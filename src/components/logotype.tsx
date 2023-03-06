import React, { Suspense } from 'react'
import LogotypeSvg from '@root/svgs/logotype.svg'
import Image from 'next/image';

async function getGithubProfile() {
  const res = await fetch('https://api.github.com/users/Rickhersd');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function Logotype({
  widthPhoto,
  widthText,
  height
}:{
  widthPhoto: string,
  widthText:string,
  height: string
}
) {

  const profileData = getGithubProfile();

  return <>
      <button className='flex'>
      <Suspense fallback={<div className={`${widthPhoto} ${height} bg-zinc-600 animate-pulse rounded-full`}> Loading</div>}>
        {/*@ts-expect-error*/}
        <Photo width={widthPhoto} height={height} promise={profileData} />
      </Suspense>
      <LogotypeSvg className={`${widthText} ${height}`}></LogotypeSvg>
     </button>
  </>
}

async function Photo({
  promise,
  width,
  height
}:{
  promise: Promise<any>
  width: string
  height: string
}){
  const profile = await promise;

  return <>
    <div className={`${width} ${height} rounded-full`}>
      <Image src={profile.avatar_url} alt='Profile Photo' width={48} height={48} ></Image>
    </div>
  </>
}

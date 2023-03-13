import React from 'react'

async function getData(){
    const data = new Promise<string>((resolve) => {
      setTimeout(()=>{
        resolve('Este contenido cargo luego de cinco de segundo')
      }, 3000)
    })
  
    return data;
  }


const  Content = async ({promise}:{promise?:Promise<string>}) => {

  const pro = await getData();

  return <>
      <div>{pro}</div>
  </>

}

export default Content;
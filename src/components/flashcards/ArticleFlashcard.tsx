import { Timestamp } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image"
import { Folder } from "react-feather";

const Flashcard = ({
  title,
  summary,
  category,
  slug,
  date,
}:{
  title:string,
  summary:string,
  category:string,
  slug: string,
  date: Timestamp | Date
}) => {

  const publishDate = new Date((date as Timestamp).seconds * 1000).toDateString()

  return <>
    <Link
      href={'/blog/' + slug}
      className="shadow flex flex-col justify-between text-left bg-white dark:bg-zinc-700 transition-all hover:scale-105 hover:shadow-lg"
    >
      <div className="flex flex-col justify-between">
        <Image src='/StockSnap_1STVFMTBJY-min.jpg' className='aspect-video bg-slate-300' alt='Proyect-img'></Image>
        <div className="p-3 sm:p-4 gap-3">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-zinc-100">{title}</h3>
          <p className="text-base sm:text-lg py-2">{summary}</p> 
        </div>
      </div>
      <div className="flex flex-row justify-between w-full p-3 sm:p-4">
        <div>{publishDate}</div>
        <h6 className="ml-auto pl-2 text-sm font-extrabold items-center tracking-wide flex flex-row gap-2">
          <Folder className="text-blue-500"></Folder>
          {category.toUpperCase()}
        </h6>
      </div>
    </Link>
  </>
}

export default Flashcard;
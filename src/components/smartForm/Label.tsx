import { useFieldset } from "@root/contexts/FieldsetContext"
import { Variants, motion} from "framer-motion"

export default function Label({
  children,
  htmlFor,
}:{
  children:React.ReactNode,
  htmlFor:string,
}){

  const variants:Variants = {
    down:{
      top: '50%',
      fontSize: '18px',
      zIndex: 0,
      color: 'rgb(100 116 139)'
    }, 
    top:{
      top: '0%',
      fontSize: '16px',
      zIndex: 20,
      color: "rgb(148 163 184)"
    }
  }

  const {isEmpty} = useFieldset();

  return <>
    <motion.label 
    animate={isEmpty ? "down" : "top"}
    variants={variants}
    htmlFor={htmlFor} 
    className='font-medium absolute bg-white -translate-y-1/2 ml-2 px-1 py-0 '>{children}</motion.label>
  </>
}
import { db } from "@root/ts/firebase"
import { deleteDoc, doc } from "firebase/firestore"
import { SetStateAction, useState } from "react"

export default function useDelete(path:string):[string, (docId: string) => Promise<SetStateAction<string> | void>]{
  const [response, setResponse] = useState<string>('')
  
  const deleteDocument = async (docId:string): Promise<SetStateAction<string> | void>=> {
    return deleteDoc(doc(db, path, docId))
      .then(res => setResponse('eliminado:' + docId))
      .catch(rej => setResponse('no eliminado'))
  };

  return [response, deleteDocument]
}
import { db } from "@root/ts/firebase"
import { addDoc, collection, } from "firebase/firestore"
import { SetStateAction, useState } from "react"

export default function useAdd (path:string):[string, (data: {}) => Promise<SetStateAction<string> | void>]{
  const [response, setResponse] = useState<string>('')

  const addDocument = async (data:{}):Promise<SetStateAction<string> | void > => {
    return addDoc(collection(db, path), data)
      .then(res => setResponse("Document written with ID: " + res.id))
      .catch(() => setResponse("Error adding document"))
  }

  return [response, addDocument]
}
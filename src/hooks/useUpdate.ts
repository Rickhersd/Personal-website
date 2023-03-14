import { db } from "@root/ts/firebase"
import { updateDoc, doc } from "firebase/firestore"
import { SetStateAction, useState } from "react"

export default function useUpdate(path:string):[string, (docId: string, newData: {}) => Promise<SetStateAction<string | void>>]{

  const [response, setResponse] = useState<string>('')

  const updateDocument = async (docID:string, newData:{}): Promise<SetStateAction<string | void>> => {
    return updateDoc(doc(db, path, docID), newData)
      .then(res => setResponse("actualizado"))
      .catch(res => setResponse('no actualizado'));
  }

  return [response, updateDocument ]
}

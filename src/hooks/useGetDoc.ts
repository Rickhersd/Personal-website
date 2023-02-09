import { db } from "@root/ts/firebase"
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { SetStateAction, useEffect, useState } from "react"

export default function useGetDoc<T>(path:string, model:new(...args: any) => T, docId:string | null = null):[string, T[]]{

  interface TResponse{res: string, data: T[]}
  const [response, setResponse] = useState<TResponse>({res:'', data: []})

  useEffect(() => {
    console.log('estoy en effect');
    (typeof(docId) != null) ? getDocuments() : getDocument();
  }, []);

  const getDocuments = async ():Promise<SetStateAction<TResponse>> => {
    let dataList:Array<T> = [];
    const q = query(collection(db, path),)
    return getDocs(q)
      .then(res => {
        res.forEach(doc => dataList = [...dataList, new model(doc.id, doc.data())]);
        return setResponse({res: "recibido", data: dataList});
      })
      .catch(rej => {return rej})
  }

  const getDocument = async ():Promise<SetStateAction<TResponse | void>> => {
    return getDoc(doc(db, path, docId as string))
      .then(res => setResponse(res.exists()? {res: "listo", data: []} : {res: "no envio", data: [] }))
      .catch();
  }
  
  return [response.res, response.data]
}
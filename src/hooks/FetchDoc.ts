import { db } from "@root/ts/firebase"
import { collection, doc, getDoc, getDocs, query, QueryConstraint} from "firebase/firestore"

export default function FetchDoc<T>(path:string, model:new(...args: any) => T, docId:string | null = null, ...queryConstraints: QueryConstraint[]):Promise<T[]>{

  const getDocuments = async ():Promise<T[]> => {
    let dataList:Array<T> = [];
    const q = query(collection(db, path), ...queryConstraints)
    return getDocs(q)
      .then(res => {
        res.forEach(doc => dataList = [...dataList, new model(doc.id, doc.data())]);
        return dataList;
      })
      .catch(rej => {return rej})
  }

  const getDocument = async ():Promise<T[]> => {
    let dataList:Array<T> = [];
    return getDoc(doc(db, path, docId as string))
      .then(res => {
        //res.exists() ? datalist = [...res.data] : datalist = dataList;
        return dataList;
      })
      .catch();
  }

  return typeof(docId) != null ? getDocuments() : getDocument();
}
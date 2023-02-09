import { getDocs, collection, getFirestore } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { doc, getDoc } from "firebase/firestore";
import Project from '../../models/project';
import firebaseApp from '../../ts/firebase';

const db = getFirestore(firebaseApp)

export const loader = async({params}:{params:{id:string}}) => {
  console.log(params)
  const docRef = doc(db, "skills", params.id);
  const docSnap = await getDoc(docRef);
  console.log(docSnap)
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

const InfoSkills = () => {

  return (
    <div>
      <div>{'una palabra'}</div>
    </div>
  )
}

export default InfoSkills
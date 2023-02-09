import { getDocs, collection, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import useDatabase from '../../hooks/useDatabase';
import firebaseApp from '../../ts/firebase';
import StringToJSX from '../../ts/stringToJSXParser';
import { Skill } from '../../models/skills';

const db = getFirestore(firebaseApp)

export default function ListSkills(filter:string) {

  const [listSkills, setListSkills] = useState<Skill[]>([]);
  const {getDocuments} = useDatabase('skills', Skill);

  useEffect(() => {
    getDocuments().then(res => setListSkills(res as Skill[]));
  },[]);

  return (
    <div>
      <h2>Lista de habilidades:</h2>
      <ul className='list-skill__list'>
      {!(listSkills.length == 0) ?
        listSkills.map((skill, index) => (
          (
            <li key={index} className='list-skill__item'>
              <Link href={`/dashboard/skills/${skill.id}`} className="list-skill_item_anchor">
                <StringToJSX domString={skill.svg_image} className="list-skill__item-image"></StringToJSX>
                <h4 className='list-skill__item-name'>{skill.name}</h4>
              </Link>
            </li>
          )
        ))
        :
        <div> No hay habilidades almacenadas</div>
      }
      </ul>
    </div>
  )
}

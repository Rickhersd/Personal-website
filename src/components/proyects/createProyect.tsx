//import { firebase } from '../../js/firebase';
// db = firebase.
//const Blogs = db.collection('blogs');

import React, { useRef, createRef, FormEvent } from 'react'
import { collection, addDoc, getFirestore, Timestamp } from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore"; 
import firebaseApp from '../../ts/firebase';

const db =  getFirestore(firebaseApp);

export default function CreateProyect() {

  const handlerSubmit = async (e:FormEvent) => {
    e.preventDefault();
    // Add data to the store
    try {
      const docRef = await addDoc(collection(db, "proyects"), {
        title: nameRef.current?.value,
        description: descriptionRef.current?.value,
        technologies: technologiesRef.current?.value, 
        urlPage: urlpageRef.current?.value,
        state: stateRef.current?.value,
        publishedOn: Timestamp.fromDate(new Date())
      });
      
      console.log("Document written with ID: " + docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const nameRef = createRef<HTMLInputElement>()
  const descriptionRef = createRef<HTMLTextAreaElement>()
  const technologiesRef = createRef<HTMLInputElement>()
  const urlpageRef = createRef<HTMLInputElement>()
  const stateRef = createRef<HTMLSelectElement>()

  return (
    <div>createProyect
      <form onSubmit={(e) => handlerSubmit(e)}>
        <fieldset>
          <label className="createArt__form-label" htmlFor="proyect__name">Nombre</label>
          <input className="createArt__form-field" ref={nameRef} type="text" name="proyect__name"  maxLength={96} autoComplete="off" required></input>
        </fieldset>
        <fieldset>
          <label className="createArt__form-label" htmlFor="proyect__email">Tecnologias</label>
          <input className="createArt__form-field" ref={technologiesRef}  name="proyect__email" maxLength={96} autoComplete="off" required></input>
        </fieldset>
        <fieldset>
          <label className="createArt__form-label" htmlFor="proyect__content">Descripcion</label>
          <textarea  className="createArt__form-field" ref={descriptionRef} name='proyect__content' rows={5} maxLength={342} required></textarea>
        </fieldset>
        <fieldset>
          <label className="createArt__form-label" htmlFor="proyect__content">Url</label>
          <input className="createArt__form-field" ref={urlpageRef} name='proyect__content' maxLength={342} required></input>
        </fieldset>
        <fieldset>
          <label></label>
          <select className="createArt__form-field"  ref={stateRef}>
            <option>Deployed</option>
            <option>Finished</option>
            <option>In Development</option>
            <option>Pending</option>
          </select>
        </fieldset>
        <fieldset>
          <input id="submit-btn" className= "contact__form-field" type="submit" value="ENVIAR"></input>
        </fieldset>
      </form>
    </div>
  )
}

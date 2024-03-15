import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
 // add config info here

};

 
  const app = initializeApp(firebaseConfig);

  const firestore = getFirestore();

  const PETS = 'messages';

  export {
    firestore, 
    collection, 
    addDoc,
    serverTimestamp,
    PETS
  };
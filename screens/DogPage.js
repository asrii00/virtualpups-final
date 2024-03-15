import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useRoute } from '@react-navigation/native';
import { Button, Divider } from "react-native-paper";
import { PETS, addDoc, collection, firestore, serverTimestamp } from '../firebase/Config';
import { useEffect, useState } from 'react';
import { onSnapshot, orderBy, query } from 'firebase/firestore';
import { convertFirebaseTimeStampToJS } from '../helpers/Functions';
import { getDogImage } from "../helpers/HomePageHelpers";
import styles from "../Styles";


const DogPage = () => {
  const route = useRoute();
  const { dog } = route.params;

  const [pets, setPets] = useState([])
  const [newPetter, setNewPetter] = useState('')

  const save = async () => {
    if (newPetter === ''){
      console.log('empty')
    }
    else {
    const docRef = await addDoc(collection(firestore, PETS), {
      petter: newPetter,
      created: serverTimestamp(),
      dog: dog.name
    }).catch(error => console.log(error))
    setNewPetter('')
    console.log('pet saved')
  }
  }

  useEffect(() => {
    const q = query(collection(firestore, PETS), orderBy('created', 'desc'))


    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tempPets = []
      querySnapshot.forEach((doc) => {
        const petObject = {
          id: doc.id,
          petter: doc.data().petter,
          dogname: doc.data().dog,
          created: convertFirebaseTimeStampToJS(doc.data().created)
        }
        tempPets.push(petObject)
      })
      setPets(tempPets)
    })

    return () => {
      unsubscribe()
    }

  }, [])

  const dogImage = getDogImage(dog.breed)


  return (
    <View style={styles.container}>
      <Text style={styles.dogname}>{dog.name}</Text>
      <Text>{dog.breed}</Text>
      <Image source={dogImage} style={{ width: 100, height: 100, margin:10 }} />

      <Divider />
     
      <TextInput placeholder='Enter your name' value={newPetter} onChangeText={text => setNewPetter(text)} />
      <Button type='button' onPress={save}>
        {`Pet ${dog.name}`}
      </Button>

      <Divider />

      <ScrollView>
        {pets.map((pet) => {
          if (pet.dogname === dog.name) {
            return (
              <View style={styles.pet} key={pet.id}>
                <Text style={styles.petInfo}>{pet.created}</Text>
                <Text>{pet.petter} pet {pet.dogname}</Text>
              </View>
            );
          }
          return null;
        })}
      </ScrollView>
     
    </View>
  );
};


export default DogPage;

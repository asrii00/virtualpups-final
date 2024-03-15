import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RenderDogItem } from "../components/RenderDogItem";
import { YourFavoriteDogSection } from "../components/YourFavoriteDogSection";
import dogData from "../data/dogData";


export default function Home() {
    const navigation = useNavigation();
    const [favoriteDogId, setFavoriteDogId] = useState(null);

    useEffect(() => {
        const fetchFavoriteDog = async () => {
            const dogId = await getFavoriteDog();
            setFavoriteDogId(dogId);
        };
        fetchFavoriteDog();
    }, []);

    const favoriteDog = async (dogId) => {
        try {
            const existingFavoriteDogId = await AsyncStorage.getItem('favoriteDogId');
    
            if (existingFavoriteDogId) {
                await AsyncStorage.removeItem('favoriteDogId');
            }
    
            await AsyncStorage.setItem('favoriteDogId', dogId.toString());
            setFavoriteDogId(dogId); 
            console.log('Favorite dog saved successfully.');
        } catch (error) {
            console.error('Error saving favorite dog:', error);
        }
    };

    const getFavoriteDog = async () => {
        try {
            const favoriteDogId = await AsyncStorage.getItem('favoriteDogId');
            return favoriteDogId ? parseInt(favoriteDogId) : null;
        } catch (error) {
            console.error('Error retrieving favorite dog:', error);
            return null;
        }
    };

    return (
        <View>
            <YourFavoriteDogSection favoriteDogId={favoriteDogId}/>
            <FlatList
                data={dogData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => 
                    <RenderDogItem
                        item={item}
                        favoriteDogId={favoriteDogId}
                        navigation={navigation}
                        favoriteDog={favoriteDog}
                    />
                }
            />
        </View>
    )
}
import { useEffect, useState } from "react";
import { View, Text} from "react-native";
import styles from "../Styles";
import dogData from "../data/dogData";

export const YourFavoriteDogSection = ({ favoriteDogId }) => {
    const [favoriteDogName, setFavoriteDogName] = useState(null);

    useEffect(() => {
        const fetchFavoriteDogName = async () => {
            const name = await getDogNameById(favoriteDogId);
            setFavoriteDogName(name);
        };
        fetchFavoriteDogName();
    }, [favoriteDogId]);

    if (!favoriteDogName) {
        return null;
    }

    return (
        <View style={[styles.dogcard, {backgroundColor: '#ffffff'}]}>
            <Text>Your Favorite Dog is: {favoriteDogName}</Text>
        </View>
    );
};

const getDogNameById = (id) => {
    const dog = dogData.find(dog => dog.id === id);
    return dog ? dog.name : null;
};



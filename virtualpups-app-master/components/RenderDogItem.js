
import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Button } from "react-native-paper";
import { getDogImage } from "../helpers/HomePageHelpers";
import styles from "../Styles";

export const RenderDogItem = ({ item, favoriteDogId, navigation, favoriteDog }) => {
    const dogImage = getDogImage(item.breed);

    return (
        <Pressable
            style={styles.dogcard}
            onPress={() => navigation.navigate('DogPage', { dog: item })}>
            {({ pressed }) => (
                <View style={{ opacity: pressed ? 0.5 : 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {dogImage && (
                            <Image
                                source={dogImage}
                                style={styles.dogImage}
                            />
                        )}
                        <Text>{item.name}</Text>
                    </View>
                    <Button
                        icon={favoriteDogId === item.id ? 'star' : 'star-outline'}
                        onPress={() => favoriteDog(item.id)}> Favorite </Button>
                </View>
            )}
        </Pressable>
    )
};

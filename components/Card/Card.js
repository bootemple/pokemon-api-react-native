import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

export default function Card({pokemon}) {
    return (
        <View style={styles.card}>
            <View style={styles.cardImage}>
                <Image
                    style={styles.pokemonImage}
                    source={{
                        uri: 'pokemon.sprites.front_default',
                    }}/>
            </View>

            <View style={styles.cardName}>
                <Text>{pokemon.name}</Text>
            </View>

            <View style={styles.cardTypes}>
                {pokemon.types.map(type => {
                    return (
                        <View style={styles.cardType}>
                            <Text>{type.type.name}</Text>
                        </View>
                    )
                })}
            </View>

            <View style={styles.cardInfo}>
                <View style={styles.cardWeight}>
                    <Text style={styles.title}>Weight</Text>
                    <Text>{pokemon.weight}</Text>
                </View>
                <View style={styles.cardHeight}>
                    <Text style={styles.title}>Height</Text>
                    <Text>{pokemon.height}</Text>
                </View>
                <View style={styles.cardAbility}>
                    <Text style={styles.title}>Ability</Text>
                    <Text>{pokemon.abilities[0].ability.name}</Text>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

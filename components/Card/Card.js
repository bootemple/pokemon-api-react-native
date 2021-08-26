import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

export default function Card({pokemon}) {
    return (
        <View style={styles.card}>
            <View style={styles.cardImage}>
                <Image
                    style={styles.pokemonImage}
                    source={{
                        uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                            pokemon.name
                        }.png`,
                    }}/>
            </View>

            <View>
                <Text style={styles.cardName}>Name: {pokemon.name.toUpperCase()}</Text>
            </View>

            {/*TYPE*/}
            {/*<View style={styles.cardTypes}>*/}
            {/*    {pokemon.types.map(type => {*/}
            {/*        return (*/}
            {/*            <View style={styles.cardType}>*/}
            {/*                <Text>Type: {type.type.name}</Text>*/}
            {/*            </View>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</View>*/}

            <View style={styles.cardInfo}>

                {/*<Text style={styles.title}>Weight</Text>*/}
                <Text style={styles.cardWeight}>Weight: {pokemon.weight}</Text>

                <View>
                    {/*<Text style={styles.title}>Height</Text>*/}
                    <Text style={styles.cardHeight}>Height: {pokemon.height}</Text>
                </View>
                <View>
                    {/*<Text style={styles.title}>Ability</Text>*/}
                    <Text style={styles.cardAbility}>Main Ability: {pokemon.abilities[0].ability.name}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fdf5e6',
        borderRadius: 10,
        width: 300,
        height: 380,
        padding: 10,
        margin: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    cardImage: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokemonImage: {
        width: 170,
        height: 170,
    },
    cardTypes: {
        display: 'flex',
        justifyContent: 'center',
    },
    cardType: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    cardName: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    cardInfo: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardData: {
        paddingBottom: 10
    },
    cardWeight: {
        fontWeight: 'bold',
        padding: 5,
    },
    cardHeight: {
        fontWeight: 'bold',
        padding: 5,
    },
    cardAbility: {
        fontWeight: 'bold',
        padding: 5,
    }
});

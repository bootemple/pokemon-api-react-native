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

            <View style={styles.cardName}>
                <Text>Name: {pokemon.name}</Text>
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
                <View style={styles.cardWeight}>
                    {/*<Text style={styles.title}>Weight</Text>*/}
                    <Text>Weight: {pokemon.weight}</Text>
                </View>
                <View style={styles.cardHeight}>
                    {/*<Text style={styles.title}>Height</Text>*/}
                    <Text>Height: {pokemon.height}</Text>
                </View>
                <View style={styles.cardAbility}>
                    {/*<Text style={styles.title}>Ability</Text>*/}
                    <Text>Ability: {pokemon.abilities[0].ability.name}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'red',
        borderRadius: 10,
        width:300,
        height:380,
padding: 10,
        margin: 50
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
        color:'#fff',
    },
cardName: {
        textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
},
cardInfo: {
        marginLeft: 10,
    },
    cardData: {
        paddingBottom: 10
    },


});

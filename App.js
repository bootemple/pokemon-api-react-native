import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import axios from 'axios';

export default function App() {

    const [pokemon, setPokemon] = useState('Ditto')
    const [pokemonData, setPokemonData] = useState([])

    const getPokemon = async () => {
        const toArray = []
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
            const res = await axios.get(url)
            console.log(res)

        } catch (e) {
            console.log(e)
        }
    }

    // useEffect(() => {
    //     getPokemon()
    // },[])

    const handleChange = (text) => {
    console.log(text)
        setPokemon(text)
    }

    const handlePress = (e) => {
        e.preventDefault()
        getPokemon()
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={handlePress}>
<TextInput
    value={pokemon}
    onChangeText={ handleChange} placeholder="Enter Pokemon name.">

</TextInput>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

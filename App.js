import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import axios from 'axios';

export default function App() {

    const [pokemon, setPokemon] = useState('ditto')
    const [pokemonData, setPokemonData] = useState([])

    const getPokemon = async () => {
        const toArray = []
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res = await axios.get(url)
            console.log(res)

        } catch (e) {
            console.log(e)
        }
    }

    // useEffect(() => {
    //     getPokemon()
    // },[])

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={handlePress}>
<TextInput value={text} onChange={handleChange} placeholder="Enter Pokemon name.">

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

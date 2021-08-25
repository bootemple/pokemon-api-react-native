import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

export default function App() {

    const [pokemon, setPokemon] = useState('pikachu')
    const [pokemonData, setPokemonData] = useState([])

  const getPokemon = async () => {
      const toArray = []
    try {
const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    } catch (e) {
        console.log(e)
    }
  }

    return (
        <View style={styles.container}>
            <Text>pokeapi</Text>
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

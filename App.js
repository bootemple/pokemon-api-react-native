import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import Card from './components/Card/Card'
import {ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import axios from 'axios';
import async from "async";
import {getAllPokemon, getPokemon} from "./services/pokemon";
import {Header} from "./components/Header";

export default function App() {

    const [pokemon, setPokemon] = useState('Ditto')
    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true)
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10'

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl)
            // map through response
            console.log(response)

            let pokemon = await loadingPokemon(response.results)
            setLoading(false)
        }

        fetchData()
    }, [])

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(
            data.map(async pokemon => {
                // RETURNS POKEMON
                // let pokemonRecords = await getPokemon(pokemon.url)
                // RETURNS ABILITIES??
                let pokemonRecord = await getPokemon(pokemon.url)
                return pokemonRecord
            }))

        setPokemonData(_pokemonData)
    }

    console.log(pokemonData)

    return (
        <View style={styles.container}>
            {loading ? <Text>Loading...</Text> : (
                <>
                    <Header
                        height={15}
                        textColor={'black'}
                        alignment="center"
                        color={'#fddde6'}
                        headerText={'Pokédex'}
                    >
                    </Header>
                    <ScrollView>
                        {pokemonData.map((pokemon, i) => {
                            return <Card key={i} pokemon={pokemon}/>
                        })}
                    </ScrollView>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#f5fffa',
    },
});

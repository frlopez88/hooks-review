import React, { useState, useEffect } from 'react'
import { List } from '../components/List'


export const PokeList = () => {

    const [pokemon, setPokemon] = useState([])
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5")


    const getPokemon = async () => {

        const result = await fetch(url)
        const data = await result.json()

        setPokemon(data);

    }

    const getNewUrl = (position) => {

        if (position === "Next") {
            setUrl(pokemon.next)
        } else {
            setUrl(pokemon.previous)   
        }

    }

    useEffect(() => {
        getPokemon()
    }, [url])

    return (
        <>
            <h1>Pokemon List</h1>

            <List data={pokemon.results} />

            <button disabled={pokemon.previous === null ? true : false} 
                    onClick={() => getNewUrl("Previuos")} 
                    className='btn btn-danger mx-5'>Previous</button>
            <button onClick={() => getNewUrl("Next")} className='btn btn-success mx-5'>Next</button>
        </>
    )
}

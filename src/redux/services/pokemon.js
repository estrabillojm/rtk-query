import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (build) => ({
        getPokemonByName: build.query({
            query: (name) => ({ url: `pokemon/${name}`})
        }),
        getCharmander: build.query({
            query: (name) => ({ url: `pokemon/${name}`})
        })
           
    })
})

export const { 
    useGetPokemonByNameQuery,
    useGetCharmanderQuery
 } = pokemonApi

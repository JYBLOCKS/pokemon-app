import { Pokemon } from "../lib/models/definitions";


export const fetchGetPokemons = async (): Promise<Pokemon[]> => {
    const api_url = process.env.URL_POKEMON_API || ''
    const params = '?limit=151&offset=0'
    return await fetch(api_url + params).then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<{ results: Pokemon[] }>
      })
      .then(data => {
          return data.results
      })
}

export const fetchGetPokemonSprite = async (name: string): Promise<string> => {
    const api_url = process.env.URL_POKEMON_API || ''
    return await fetch(`${api_url}/${name}`).then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<{ sprites: { front_default : string } }>
      })
      .then(data => {
          return data.sprites.front_default
      })
}
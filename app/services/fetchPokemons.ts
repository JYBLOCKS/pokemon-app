import Vibrant from "node-vibrant";
import { Pokemon, PokemonInfo } from "../lib/models/definitions";

export const fetchGetPokemons = async (): Promise<PokemonInfo[]> => {
  const api_url = process.env.URL_POKEMON_API || "";
  const params = "?limit=151&offset=0";
  return await fetch(api_url + params)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ results: Pokemon[] }>;
    })
    .then(async (data) => {
      return await Promise.all(data.results.map(async (item) => {
        return await fetchGetPokemonInformation(item.name)
      })).then(result => {return result});
    });
};

export const fetchGetPokemonInformation = async (name: string): Promise<PokemonInfo> => {
  const api_url = process.env.URL_POKEMON_API || "";
  return await fetch(`${api_url}/${name}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<PokemonInfo>;
    })
    .then(async (data) => {
      data.color = (await Vibrant.from(data.sprites.front_default).getPalette()).Vibrant?.hex ?? '';
      return data;
    });
};

import { Pokemon } from "@/app/lib/models/definitions";
import styles from "./pokemon_card.module.css";
import { fetchGetPokemonSprite } from "@/app/services/fetchPokemons";
import Link from "next/link";
export const Pokemon_Card = async (pokemon: Pokemon) => {
  const imgName = await fetchGetPokemonSprite(pokemon.name);
  return (
    <div className={styles.pokemon_card}>
      <img
        className="w-24 h-24 m-auto"
        src={imgName}
        alt={pokemon.name}
        loading="lazy"
      />
      <div className="text-center"><Link href={`pokemon?name=${pokemon.name}`}>{pokemon.name}</Link></div>
    </div>
  );
};

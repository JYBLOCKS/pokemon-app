import { Pokemon } from "@/app/lib/models/definitions";
import styles from "./pokemon_card.module.css";
import { fetchGetPokemonSprite } from "@/app/services/fetchPokemons";
import Link from "next/link";
import Vibrant from "node-vibrant";
export const Pokemon_Card = async (pokemon: Pokemon) => {
  const imgName = await fetchGetPokemonSprite(pokemon.name);
  const palette = await Vibrant.from(imgName).getPalette();
  const colorHex = palette.Vibrant?.hex ?? "inherit";
  return (
    <div className={styles.pokemon_card}>
      <img
        className="w-24 h-24 m-auto mt-4"
        src={imgName}
        alt={pokemon.name}
        loading="lazy"
      />
      <div className="text-center mt-5">
        <Link style={{ color: colorHex }} href={`pokemon?name=${pokemon.name}`}>
          {pokemon.name}
        </Link>
      </div>
    </div>
  );
};

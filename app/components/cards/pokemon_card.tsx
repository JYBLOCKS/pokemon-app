import { PokemonInfo } from "@/app/lib/models/definitions";
import styles from "./pokemon_card.module.css";
import Link from "next/link";

export const Pokemon_Card = async (props:{ pokemon: PokemonInfo }) => {
  const {sprites: {front_default}, name, color} = props.pokemon
  const colorHex = color ?? "inherit";
  return (
    <Link className={styles.pokemon_card} href={`pokemon?name=${name}`}>
      <img
        className="w-24 h-24 m-auto mt-4"
        src={front_default}
        alt={name}
        loading="lazy"
      />
      <div className="text-center mt-5">
        <span style={{ color: colorHex }}>{name}</span>
      </div>
    </Link>
  );
};

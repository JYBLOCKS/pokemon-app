import Image from "next/image";
import { fetchGetPokemons } from "./services/fetchPokemons";
import { Pokemon_Card } from "./components/cards/pokemon_card";

export default async function Home() {
  const getPokemons = await fetchGetPokemons();
  return (
    <>
      <div className="flex flex-wrap gap-4 ml-5 w-full">
        {getPokemons.map((item) => (
          <Pokemon_Card name={item.name} url={item.url} />
        ))}
      </div>
    </>
  );
}

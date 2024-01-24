import { fetchGetPokemons } from "./services/fetchPokemons";
import { Search } from "./components/search/search";
import { Suspense } from "react";
import { Pokemon_Card } from "./components/cards/pokemon_card";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    name?: string;
  };
}) {
  const getPokemons = await fetchGetPokemons();
  const pokemonSearchName = searchParams?.name ?? "";
  return (
    <>
      <nav>
        <div className="w-1/2 pt-4 pb-4 m-auto">
          <Search />
        </div>
      </nav>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        <Suspense key={pokemonSearchName} fallback={<>Loading...</>}>
          {getPokemons
            .filter((item) => item.name.includes(pokemonSearchName))
            .map((item) => (
              <Pokemon_Card key={item.name} name={item.name} url={item.url}  />
            ))}
        </Suspense>
      </div>
      <footer className="pb-4"></footer>
    </>
  );
}

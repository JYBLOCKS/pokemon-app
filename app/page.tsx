import { fetchGetPokemons } from "./services/fetchPokemons";
import { Pokemon_Card } from "./components/cards/pokemon_card";

export default async function Home() {
  const getPokemons = await fetchGetPokemons();
  return (
    <>
      <nav>
        <div className="w-1/2 pt-4 pb-4 m-auto">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="search"
            placeholder="Search..."
            defaultValue=''
          />
        </div>
      </nav>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        {getPokemons.map((item) => (
          <Pokemon_Card name={item.name} url={item.url} key={item.name} />
        ))}
      </div>
      <footer className="pb-4"></footer>
    </>
  );
}

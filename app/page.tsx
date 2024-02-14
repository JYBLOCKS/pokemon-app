import { fetchGetPokemons } from '@/services/fetchPokemons';
import { Search } from './components/search/search';
import { Suspense } from 'react';
import { Pokemon_Card } from './components/cards/pokemon_card';

interface HomeProps {
  searchParams: {
    name?: string;
  };
}

export default async function Home(props: HomeProps) {
  const getPokemons = await fetchGetPokemons() ?? [];
  const pokemonSearchName = props?.searchParams?.name ?? '';
  const pokemons = getPokemons.length > 0 && getPokemons
  .filter((item) => item.name.includes(pokemonSearchName))
  .map((item) => (
    <Pokemon_Card key={item.name} pokemon={item} />
  ))
  return (
    <div data-testid="home">
      <nav data-testid="nav">
        <div className="w-1/2 pt-4 pb-4 m-auto" data-testid="search">
          <Search />
        </div>
      </nav>
      <div className="flex flex-wrap gap-4 w-full justify-center" data-testid="pokemons">
        <Suspense key={pokemonSearchName} fallback={<span>Loading...</span>}>
          {pokemons}
        </Suspense>
      </div>
      <footer className="pb-4" data-testid="footer"></footer>
    </div>
  );
}

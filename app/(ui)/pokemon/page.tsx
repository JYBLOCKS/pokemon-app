import { fetchGetPokemonInformation } from '@/services/fetchPokemons';
import styles from './pokemon.module.css';
export default async function Pokemon({
  searchParams
}: {
  searchParams: {
    name?: string;
  };
}) {
  const info = await fetchGetPokemonInformation(searchParams?.name ?? '');
  return (
    <div className={styles.pokemon} style={{ backgroundColor: info.color }}>
      <div className={styles.info}>
        <h1 className={styles.name} style={{ color: info.color }}>{info.name.toUpperCase()}</h1>
        <img
          alt={info.name}
          src={info.sprites.front_default}
          width={240}
          height={240}
          style={{ display: 'block', margin: 'auto'}}
        />
        <p>{info.abilities.length}</p>
        <p>{info.base_experience}</p>
        <p>{info.forms.length}</p>
        <p>{info.game_indices.length}</p>
        <p>{info.height}</p>
        <p>{info.held_items.length}</p>
        <p>{info.id}</p>
        <p>{info.is_default}</p>
        <p>{info.location_area_encounters}</p>
        <p>{info.moves.length}</p>
        <p>{info.order}</p>
        <p>{info.past_abilities.length}</p>
        <p>{info.past_types.length}</p>
        <p>{info.species.name}</p>
        <p>{info.stats.length}</p>
        <p>{info.types.length}</p>
        <p>{info.weight}</p>
      </div>
    </div>
  );
}

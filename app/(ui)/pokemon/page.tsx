import { fetchGetPokemonInformation } from "@/app/services/fetchPokemons";

export default async function Pokemon({
  searchParams,
}: {
  searchParams: {
    name?: string;
  };
}) {
  const info = await fetchGetPokemonInformation(searchParams?.name ?? "");
  console.log(info)
  return (
    <div>
      <p>{info.name}</p>
      <p>{info.sprites.front_default}</p>
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
  );
}

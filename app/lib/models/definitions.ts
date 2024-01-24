export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonInfo {
  name: string;
  sprites: { front_default: string };
  abilities: Ability[];
  base_experience: number;
  forms: Forms[];
  game_indices: GameIndices[];
  height: number;
  held_items: HealItems[];
  id: number;
  is_default: true;
  location_area_encounters: string;
  moves: Moves[];
  order: number;
  past_abilities: [];
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  stats: Stats[];
  types: Types[];
  weight: number;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Forms {
  name: string;
  url: string;
}

export interface GameIndices {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface VersionGroupDetails {
  level_learned_at: 1;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface Moves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: VersionGroupDetails[];
}

export interface HealItems {
  item: {
    name: string;
    url: string;
  };
  version_details: VersionDetails[];
}

export interface VersionDetails {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}

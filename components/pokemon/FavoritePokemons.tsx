import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoritePokemonsCard } from "./FavoritePokemonsCard";
interface Props {
  pokemons: number[];
}
export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoritePokemonsCard key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};

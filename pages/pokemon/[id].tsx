import { NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";
interface Props {
  //pokemon: any;
  id: string;
  name: string;
}
const PokemonPage: NextPage<Props> = ({ id, name }) => {
  const router = useRouter();
  return (
    <Layout title="Pokedex App">
      <h1>Hola</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: false,
  };
};
export default PokemonPage;

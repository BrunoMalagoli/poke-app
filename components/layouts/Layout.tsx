import { FC, PropsWithChildren, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";
interface propTypes {
  title?: string;
}
export const Layout: FC<PropsWithChildren<propTypes>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Bruno Malagoli" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

import { Spacer, Text, useTheme, Image } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        paddingLeft: "20px",
        backgroundColor: theme?.colors.gray200.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png"
        alt="Icono de la app"
        width={70}
        height={70}
      />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        ókemon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white">Favoritos</Text>
    </div>
  );
};

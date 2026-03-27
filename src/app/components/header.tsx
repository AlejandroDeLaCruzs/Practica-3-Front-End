import Link from "next/link";
import "./header.css";

export const Header = () => {
  return (
    <div className="headerMenu">
      <Link href={"/"}> Home</Link>
      <Link href={"/albums"}>Buscar Álbums</Link>
      <Link href={"/favoritos"}>Favoritos</Link>
    </div>
  );
};

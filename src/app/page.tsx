"use client";

import Link from "next/link";
import "./page.css";

export const Home = () => {
  return (
    <div>
      <div className="mainConteiner">
        <div className="titulo">
          <h1>Music Albums App</h1>
        </div>
        <div className="opciones">
          <Link href={"/albums"} className="albums">
            Buscar Albums
          </Link>
          <Link href={"/favoritos"} className="favoritos">
            Favoritos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

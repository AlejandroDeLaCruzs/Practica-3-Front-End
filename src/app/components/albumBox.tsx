'use client';

import { useLista } from "@/context/MusicContext";
import "./albumBox.css";
import Link from "next/link";

type Params = {
  id: string;
  image: string;
  album: string;
  cantante: string;
};

export const AlbumBox = ({ id, image, album, cantante }: Params) => {
  const { addFavorite } = useLista();

  return (
    <div className="albumContainer">
      <img 
        src={image} 
        alt={album} 
        className="albumFoto" 
      />

      <div className="infoAlbum">
        <h2>{cantante}</h2>
        <p>{album}</p>
      </div>

      <div className="botonContainer">
        <Link href={`/albums/${id}`}>
          <button className="botonVerDetalle">
            Ver Detalle
          </button>
        </Link>

        <button 
          onClick={() => addFavorite(id)} 
          className="botonFavoritos"
        >
          ❤️ Favorito
        </button>
      </div>
    </div>
  );
};
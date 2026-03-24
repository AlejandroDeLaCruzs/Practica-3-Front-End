"use client";
import { useLista } from "@/context/MusicContext";
import "./albumBox.css";

type Params = {
  id: string;
  image: string;
  album: string;
  cantante: string;
};

export const AlbumBox = ({ id, image, album, cantante }: Params) => {
  const { addFavorite } = useLista();
    
  return (
    <div className="albumCointer">
      <img src={image} className="albumFoto" />
      <div className="infoAlbum">
        <h2>{cantante}</h2>
        <p>{album}</p>
      </div>
      <div className="linea"/>
      <div className="botonContenier">
        <button onClick={() => addFavorite(id)} className="botonVerDetalle">
          Ver Detalle
        </button>
        <button onClick={() => addFavorite(id)} className="botonFavoirtos">
          Añadir a Favoritos
        </button>
      </div>
    </div>
  );
};

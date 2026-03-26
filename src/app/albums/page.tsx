"use client";

import { getAlbumsByName, getIdCantante } from "@/lib/albums";
import { Album } from "@/types";
import { useState } from "react";
import { AlbumBox } from "../components/albumBox";
import "./albums.css";

/*TODO:
  -añadir un boton para ir al home 
  -mejorar colores de los botones*/

const AlbumsSearch = () => {
  const [albums, setAlbums] = useState<Album[] | null>(null);
  const [input, setInput] = useState<string>("");

  const fetchDataAlbums = async () => {
    const id = await getIdCantante(input);
    getAlbumsByName(id).then((res) =>
      setAlbums(
        res?.filter((e) => e.collectionType === "Album" && e.trackCount >= 5),
      ),
    );
  };

  return (
    <div className="busquedaContiener">
      <div className="header">
        <p>Buscar Álbums</p>
      </div>
      <div className="botonConteiner">
        <div className="inputSearch">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input"
          />
          <button onClick={() => fetchDataAlbums()} className="botonBuscar">
            Buscar
          </button>
        </div>
        <div className="linea" />
        <div className="albumsConteiner">
          {albums &&
            albums.map((e) => (
              <AlbumBox
                id={String(e.collectionId)}
                image={e.artworkUrl100}
                cantante={e.artistName}
                album={e.collectionName}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumsSearch;

"use client";

import { getIdsCantante, getAlbumsByName } from "@/lib/albums";
import { Album } from "@/types";
import { useState } from "react";
import { AlbumBox } from "../components/albumBox";
import "./albums.css";

/*TODO:
  -añadir un boton para ir al home 
  -indicar que hay buscar aritista, y que cuando presione enter se busque, y que vaya buscando cada 500 ms
*/

const AlbumsSearch = () => {
  const [albums, setAlbums] = useState<Album[] | null>(null);
  const [input, setInput] = useState<string>("");

  const fetchDataAlbums = async () => {
    const ids = await getIdsCantante(input);

    const results = await Promise.all(ids.map((id) => getAlbumsByName(id)));

    // Se hace flat pq results es un array bidimensional: por cada artista x albums
    const albums = results
      .flat()
      .filter((e: Album) => e.collectionType === "Album" && e.trackCount >= 5);

    console.log("aa", albums);

    setAlbums(albums);
  };

  return (
    <div className="busquedaContiener">
      <div className="header">
        <p>Buscar Álbums</p>
      </div>
      <div className="inputSearch">
        <input
          value={input}
          placeholder="Artista"
          onChange={(e) => setInput(e.target.value)}
          className="input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchDataAlbums();
            }
          }}
        />
        <button onClick={() => fetchDataAlbums()} className="botonBuscar">
          Buscar
        </button>
      </div>
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
  );
};

export default AlbumsSearch;

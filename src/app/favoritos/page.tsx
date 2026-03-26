"use client";
import { useLista } from "@/context/MusicContext";
import { getAlbumsById } from "@/lib/albums";
import { Album } from "@/types";
import { useEffect, useState } from "react";
import "./favoritos.css";

const FavoritosPage = () => {
  const { idsFavoritos, deleteFavorite } = useLista();
  const [albumsFavoritos, setAlbumsFavoritos] = useState<Album[]>([]);
  console.log(idsFavoritos);
  const ids = idsFavoritos;

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albums = await Promise.all(
          idsFavoritos.map(async (id) => {
            try {
              const res = await getAlbumsById(id);
              console.log(res.at(0));
              return res.at(0) || null;
            } catch {
              return null;
            }
          }),
        );
        console.log(albums);
        setAlbumsFavoritos(albums);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, [idsFavoritos]);

  return (
    <div className="container">
      <h1 className="title">🎵 Tus Favoritos</h1>

      {albumsFavoritos.length === 0 ? (
        <p className="empty">No tienes álbumes favoritos aún</p>
      ) : (
        <div className="grid">
          {albumsFavoritos.map((album) => (
            <div key={album.collectionId} className="card">
              <img
                src={album.artworkUrl100}
                alt={album.collectionName}
                className="image"
              />

              <h2 className="album">{album.collectionName}</h2>
              <p className="artist">{album.artistName}</p>

              <div className="footer">
                <span>{album.trackCount} canciones</span>

                <button
                  onClick={() => deleteFavorite(String(album.collectionId))}
                  className="btn-delete"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritosPage;

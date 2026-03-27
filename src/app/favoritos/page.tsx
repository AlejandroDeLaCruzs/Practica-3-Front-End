"use client";
import { useLista } from "@/context/MusicContext";
import { getTracks } from "@/lib/albums";
import { Album } from "@/types";
import { useEffect, useState } from "react";
import "./favoritos.css";
import AlbumCard from "../components/AlbumCard";

const FavoritosPage = () => {
  const { idsFavoritos, deleteFavorite } = useLista();
  const [albumsFavoritos, setAlbumsFavoritos] = useState<Album[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albums = await Promise.all(
          idsFavoritos.map(async (id) => {
            try {
              const res = await getTracks(id);
              console.log(res.at(0));
              return res.at(0) || null;
            } catch {
              return null;
            }
          }),
        );
        setAlbumsFavoritos(albums);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, [idsFavoritos]);

  return (
    <div className="containerPageFavoritos">
      <h1 className="title">🎵 Tus Favoritos</h1>

      {albumsFavoritos.length === 0 ? (
        <p className="empty">No tienes álbumes favoritos aún</p>
      ) : (
        <div className="conteinerFavoritos">
          {albumsFavoritos.map((album) => (
            <AlbumCard
              key={album.collectionId}
              album={album}
              onDelete={deleteFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritosPage;

"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Album } from "@/types";
import "./albumDetail.css";
import { getAlbumsById } from "@/lib/albums";

/*TODO: 
  -añadir boton para ir para atras y mirar el replace del foto del disco
  -crear componente de hedaer de Cancion y de track
*/

export default function AlbumDetail() {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchAlbum = async () => {
      try {
        const res = await getAlbumsById(String(id));
        setAlbumData(res);
      } catch (error) {
        console.error("Error al cargar el álbum:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [id]);

  if (loading) {
    return <div>Cargando álbum...</div>;
  }

  if (albumData.length === 0) {
    return <div>Álbum no encontrado</div>;
  }

  const album = albumData[0]; // informacion del álbum
  const tracks = albumData.slice(1); // las canciones

  return (
    <div className="albumpage">
      <div className="albumheader">
        <div>
          <img
            src={album.artworkUrl100?.replace("100x100bb.jpg", "600x600bb.jpg")}
            alt={album.collectionName}
            className="album-cover"
          />
        </div>
        <div className="albumInfo">
          <h1>{album.collectionName}</h1>
          <h2>{album.artistName}</h2>
          <p>
            {new Date(album.releaseDate).getFullYear()} •{" "}
            {album.primaryGenreName}
          </p>
          <p>{album.trackCount} canciones</p>
        </div>
      </div>
      <div className="cancionesContainer">
        <h3>Lista de canciones</h3>
        <div>
          {tracks.map((track: any, index: number) => (
            <div key={track.trackId || index} className="track-item">
              <div>
                <span className="track-number">{track.trackNumber}</span>
                <span className="track-name">{track.trackName}</span>
              </div>
              <span className="track-duration">
                {Math.floor(track.trackTimeMillis / 60000)}:
                {Math.floor((track.trackTimeMillis % 60000) / 1000)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

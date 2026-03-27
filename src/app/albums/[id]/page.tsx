"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Album } from "@/types";
import "./albumDetail.css";
import { getTracks } from "@/lib/albums";
import { TrackItem } from "@/app/components/trackList";
import { AlbumHeader } from "@/app/components/AlbumHeader";
import Link from "next/link";

export default function AlbumDetail() {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchAlbum = async () => {
      try {
        const res = await getTracks(String(id));
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

  console.log(tracks);

  return (
    <div className="albumpage">
      <AlbumHeader album={album} />
      <div className="cancionesContainer">
        <h3>Tracklist</h3>
        {tracks.map((track: any) => (
          <TrackItem key={track.collectionId} track={track} />
        ))}
      </div>
      <Link href={"/albums"} className="back-button">
        Volver a la busqueda
      </Link>
    </div>
  );
}

import './AlbumCard.css';

type Params = {
  album: {
    collectionId: number;
    artworkUrl100: string;
    collectionName: string;
    artistName: string;
    trackCount: number;
  };
  onDelete: (id: string) => void;
}

export default function AlbumCard({ album, onDelete }: Params) {
  return (
    <div className="card">
      <div>
        <img
          src={album.artworkUrl100}
          alt={album.collectionName}
          className="image"
        />
        <h2 className="album">{album.collectionName}</h2>
        <p className="artist">{album.artistName}</p>
      </div>
      <div className="fondo-card">
        <span>{album.trackCount} canciones</span>
        <button
          onClick={() => onDelete(String(album.collectionId))}
          className="boton-delete"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
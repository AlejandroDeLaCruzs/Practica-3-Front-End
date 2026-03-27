import "./AlbumHeader.css";

type Album = {
  artworkUrl100: string;
  collectionName: string;
  artistName: string;
  releaseDate: string;
  primaryGenreName: string;
  trackCount: number;
};

type Params = {
  album: Album;
};

export const AlbumHeader = ({ album }: Params) => {
  //Para hacer la portada mas grande y que se vea mejor con mas pixeles
  const portadaAlbum = album.artworkUrl100?.replace(
    "100x100bb.jpg",
    "600x600bb.jpg",
  );

  const year = new Date(album.releaseDate).getFullYear();

  return (
    <div className="albumheader">
      <img
        src={portadaAlbum}
        alt={album.collectionName}
        className="album-cover"
      />

      <div className="albumInfo">
        <h1>{album.collectionName}</h1>
        <h2>{album.artistName}</h2>

        <p>
          {year} • {album.primaryGenreName}
        </p>

        <p>{album.trackCount} canciones</p>
      </div>
    </div>
  );
};

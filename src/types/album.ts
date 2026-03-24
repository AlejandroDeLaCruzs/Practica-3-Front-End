export type Album = {
  wrapperType: string;            // ej. "collection"
  collectionType: string;         // ej. "Album"
  artistId: number;               // ej. 471744
  collectionId: number;           // ej. 1122782080
  amgArtistId?: number;           // opcional, ej. 435023
  artistName: string;             // ej. "Coldplay"
  collectionName: string;         // ej. "Parachutes"
  collectionCensoredName: string; // ej. "Parachutes"
  artistViewUrl: string;          // enlace al artista
  collectionViewUrl: string;      // enlace al álbum
  artworkUrl60: string;           // imagen pequeña
  artworkUrl100: string;          // imagen más grande
  collectionPrice: number;        // precio del álbum
  collectionExplicitness: string; // ej. "notExplicit"
  trackCount: number;             // cantidad de canciones
  copyright: string;              // copyright
  country: string;                // país
  currency: string;               // moneda, ej. "USD"
  releaseDate: string;            // fecha de lanzamiento
  primaryGenreName: string;       // género principal
};
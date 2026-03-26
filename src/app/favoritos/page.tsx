"use client"
import { useLista } from "@/context/MusicContext";


/*
TODO: 
-ponerlo bonito
*/
const FavoritosPage = () => {
  const { idsFavoritos } = useLista();
  console.log(idsFavoritos);

  return (
    <div>
      {idsFavoritos.map((e) => (
        <h1>{e}</h1>
      ))}
    </div>
  );
};

export default FavoritosPage;

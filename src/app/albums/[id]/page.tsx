"use client"
import { useParams } from "next/navigation";
import { useEffect } from "react";


const AlbumId = () => {
  const {id} = useParams();
  useEffect(() => {
    


  }, [id])
  return (
<h1>hola</h1>
  );
};

export default AlbumId;

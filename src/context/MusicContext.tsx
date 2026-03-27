"use client";
import { createContext, useContext, useState } from "react";

type ContextListaType = {
  idsFavoritos: string[];
  addFavorite: (item: string) => void;
  deleteFavorite: (item: string) => void;
};

const Listacontext = createContext<ContextListaType | null>(null);

type Params = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: Params) => {
  const [idsFavoritos, setidsFavoritos] = useState<string[]>([]);

  const addFavorite = (item: string) => {
    const alredyInList = idsFavoritos.find((e) => item == e);
    if (alredyInList) return;
    else {
      console.log("AAA");
      setidsFavoritos([...idsFavoritos, item]);
    }
  };

  const deleteFavorite = (item: string) => {
    const notInList = idsFavoritos.filter((e) => item !== e);
    setidsFavoritos([...notInList]);
  };

  return (
    <Listacontext.Provider
      value={{ idsFavoritos, addFavorite, deleteFavorite }}
    >
      {children}
    </Listacontext.Provider>
  );
};

export const useLista = () => {
  const context = useContext(Listacontext);
  if (!context) {
    throw new Error("No puedes acceder al contexto");
  }
  return context;
};

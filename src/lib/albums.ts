import { api } from "./api";

export const getIdCantante = async (name: string) => {
  try {
    const respone = await api.get(`/search?term=${(name)}&entity=musicArtist&limit=1`);
    return respone.data.results.at(0).artistId;
  } catch (error) {
    console.log(error);
  }
};

export const getAlbumsByName = async (id: string) => {
  try {
    const respones = await api.get(`/lookup?id=${id}&entity=album&limit=50`);
    return respones.data.results;
  } catch (error) {
    console.log(error);
  }
};

/*
TODO:
Hay algunos que tracks que no salen dependiendo del pais
*/
export const getAlbumsById = async (id: string) => {
  try {
    const respones = await api.get(`/lookup?id=${id}&entity=song`);
    return respones.data.results;
  } catch (error) {
    console.log(error);
  }
};

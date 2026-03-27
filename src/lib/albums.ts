import { api } from "./api";

export const getIdsCantante = async (name: string) => {
  try {
    const respone = await api.get(
      `/search?term=${name}&entity=musicArtist&limit=5`,
    );
    const ids = respone.data.results.map((e) => e.artistId);
    return ids;
  } catch (error) {
    console.log(error);
  }
};

export const getAlbumsByName = async (id: string) => {
  try {
    const respones = await api.get(`/lookup?id=${id}&entity=album&limit=10`);
    return respones.data.results;
  } catch (error) {
    console.log(error);
  }
};

/*
TODO:
Hay algunos que tracks que no salen dependiendo del pais
*/
export const getTracks = async (id: string) => {
  try {
    const respones = await api.get(`/lookup?id=${id}&entity=song`);
    return respones.data.results;
  } catch (error) {
    console.log(error);
  }
};

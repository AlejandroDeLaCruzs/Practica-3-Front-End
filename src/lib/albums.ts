import { api } from "./api";

export const getIdCantante = async (name: string) => {
  try {
    const respone = await api.get(`/search?term=${(name)}&entity=musicArtist&limit=1`);
    return respone.data.results.at(0).artistId;
  } catch (error) {}
};

export const getAlbumsByName = async (id: string) => {
  try {
    const respones = await api.get(`/lookup?id=${id}&entity=album&limit=50`);
    console.log(respones);
    return respones.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getAlbumsById = async (id: string) => {
  try {
    const respones = await api.get(`/lookup?id=${id}&entity=song`);
    return respones.data.results;
  } catch (error) {
    console.log(error);
  }
};

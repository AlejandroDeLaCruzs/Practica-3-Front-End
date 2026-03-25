import { api } from "./api";

export const getAlbumsByName = async (name: string) => {
  try {
    const respones = await api.get(`/search?term=${name}&entity=album&limit=20`);
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
}

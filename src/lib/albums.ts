import { api } from "./api";

export const getAlbumsByName = async (name: string) => {
  try {
    const respones = await api.get(`/search?term=${name}&entity=album&limit=20`);
    console.log(respones.data.results)
    return respones.data.results;
  } catch (error) {
    console.log(error);
  }
};

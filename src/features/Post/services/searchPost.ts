import { api } from "../../../services/api-core/api";

export async function searchPost(username: string, repos: string, number: number) {
  try {
    const response = await api.get(`repos/${username}/${repos}/issues/${number}`)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar post: ', error);
    throw error;
  }
}
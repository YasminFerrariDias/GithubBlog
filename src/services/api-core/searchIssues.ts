import { api } from "./api";

export async function searchRepository(username: string, repos: string) {
  try {
    const response = await api.get(`/repos/${username}/${repos}/issues`);
    return response.data
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
    throw error;
  }
}
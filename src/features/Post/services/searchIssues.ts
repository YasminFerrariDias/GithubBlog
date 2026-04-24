import { api } from "../../../services/api-core/api";

export async function searchIssues(username: string, repos: string, termo: string) {
  try {
    const response = await api.get(`/search/issues?q=${termo}+repo:${username}/${repos}`)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar perfil: ', error);
    throw error;
  }
}


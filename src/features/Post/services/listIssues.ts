import { api } from "../../../services/api-core/api";

export async function listIssues(username: string, repos: string) {
  try {
    const response = await api.get(`/repos/${username}/${repos}/issues`);
    return response.data
  } catch (error) {
    console.error('Erro ao buscar issues:', error);
    throw error;
  }
}
import { api } from "./api";

export async function searchProfile(username: string) {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    throw error;
  }
}
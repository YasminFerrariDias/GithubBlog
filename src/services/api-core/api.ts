// src/services/api.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com',
});

// Pega o token do arquivo .env.local
const token = import.meta.env.VITE_GITHUB_TOKEN;

// Só adiciona o token se ele existir
if (token) {
  api.defaults.headers.common['Authorization'] = `token ${token}`;
}

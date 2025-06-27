import axios from 'axios';

// Buat instance axios dengan konfigurasi dasar
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '', // bisa diatur di .env
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper untuk GET
export const apiGet = async <T = unknown>(url: string, config: Record<string, unknown> = {}) => {
  const response = await api.get<T>(url, config);
  return response.data;
};

// Helper untuk POST
export const apiPost = async <T = unknown>(url: string, data?: unknown, config: Record<string, unknown> = {}) => {
  const response = await api.post<T>(url, data, config);
  return response.data;
};

// Helper untuk PUT
export const apiPut = async <T = unknown>(url: string, data?: unknown, config: Record<string, unknown> = {}) => {
  const response = await api.put<T>(url, data, config);
  return response.data;
};

// Helper untuk DELETE
export const apiDelete = async <T = unknown>(url: string, config: Record<string, unknown> = {}) => {
  const response = await api.delete<T>(url, config);
  return response.data;
};

export default api; 
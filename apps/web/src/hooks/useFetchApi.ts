import { useFetch } from "./useFetch";

export const useFetchApi = <T>(path: string) => useFetch<T>(`${import.meta.env.VITE_API_URL}/${path}`)
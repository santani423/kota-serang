import { useQuery } from "@tanstack/react-query";

const API_BASE_URL =
  process.env.API_BASE_URL ||
  "https://api-cms-kota-serang.santani.dev/api/" + "articles";


//   Fetch Categories
export const fetchArticlesCategories = async () => {
  const url = `${API_BASE_URL}/categories`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Gagal fetch:", url, res.status, res.statusText);
      throw new Error("Gagal mengambil data categories");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetch:", url, error);
    throw error;
  }
};
export function useArticlesCategories() {
  return useQuery({
    queryKey: ["articlesCategories"],
    queryFn: fetchArticlesCategories,
  });
}
// End Fetch Articles
//   Fetch Articles
export const fetchArticles = async () => {
  const url = `${API_BASE_URL}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Gagal fetch:", url, res.status, res.statusText);
      throw new Error("Gagal mengambil data articles");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetch:", url, error);
    throw error;
  }
};
export function useArticles() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });
}
// End Fetch Articles
//   Fetch Articles Random
export const fetchArticlesRandom = async () => {
  const url = `${API_BASE_URL}/random`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Gagal fetch:", url, res.status, res.statusText);
      throw new Error("Gagal mengambil data articles random");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetch:", url, error);
    throw error;
  }
};
export function useArticlesRandom() {
  return useQuery({
    queryKey: ["articlesRandom"],
    queryFn: fetchArticlesRandom,
  });
}
// End Fetch Articles Random
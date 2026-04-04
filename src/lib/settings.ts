import { useQuery } from "@tanstack/react-query";

const API_BASE_URL =
  process.env.API_BASE_URL || "https://api-cms-kota-serang.santani.dev/api/";

export const fetchSettingsCorMenu = async () => {
  const url = `${API_BASE_URL}settings/cormenu`;
  console.log("Memulai fetch:", url);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Gagal fetch:", url, res.status, res.statusText);
      throw new Error("Gagal mengambil data settings/cormenu");
    }
    const data = await res.json();
    console.log("Sukses fetch:", url, data);
    return data;
  } catch (error) {
    console.error("Error fetch:", url, error);
    throw error;
  }
};

export const fetchSettingsHomepage = async () => {
  const url = `${API_BASE_URL}settings/hompage`;
  console.log("Memulai fetch:", url);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Gagal fetch:", url, res.status, res.statusText);
      throw new Error("Gagal mengambil data settings/hompage");
    }
    const data = await res.json();
    console.log("Sukses fetch:", url, data);
    return data;
  } catch (error) {
    console.error("Error fetch:", url, error);
    throw error;
  }
};

export function useSettings() {
  return useQuery({
    queryKey: ["settings"],
    queryFn: fetchSettingsCorMenu,
  });
}

export function useSettingsHomepage() {
  return useQuery({
    queryKey: ["settings-hompage"],
    queryFn: fetchSettingsHomepage,
  });
}

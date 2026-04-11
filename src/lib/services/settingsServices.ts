import { useQuery, useMutation } from "@tanstack/react-query";
import { Support } from "@/types/settingsTypes";

const API_BASE_URL =
  process.env.API_BASE_URL || "https://api-cms-kota-serang.santani.dev/api/";

export const fetchSettingsCorMenu = async () => {
  const url = `${API_BASE_URL}settings/cormenu`;
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
  const url = `${API_BASE_URL}settings/homepage`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Gagal fetch:", url, res.status, res.statusText);
      throw new Error("Gagal mengambil data settings/homepage");
    }
    const data = await res.json();
    console.log("Sukses fetch:", url, data);
    return data;
  } catch (error) {
    console.error("Error fetch:", url, error);
    throw error;
  }
};

export const fetchSettingsImageHomepage = async () => {
  const url = `${API_BASE_URL}settings/image-homepage`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Gagal fetch:", url, res.status, res.statusText);
      throw new Error("Gagal mengambil data settings/image-homepage");
    }
    const data = await res.json();
    console.log("Sukses fetch:", url, data);
    return data;
  } catch (error) {
    console.error("Error fetch:", url, error);
    throw error;
  }
};

export const postSupport = async (payload: Support) => {
  const url = `${API_BASE_URL}support`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Gagal POST:", url, res.status, errorText);
      throw new Error("Gagal mengirim data support");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error POST:", url, error);
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
    queryKey: ["settings-homepage"],
    queryFn: fetchSettingsHomepage,
  });
}

export function useSettingsImageHomepage() {
  return useQuery({
    queryKey: ["settings-img-hompage"],
    queryFn: fetchSettingsImageHomepage,
  });
}

export function useSupport() {
  return useMutation({
    mutationFn: postSupport,
  });
}

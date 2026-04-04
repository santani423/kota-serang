import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = process.env.API_BASE_URL || 'https://api-cms-kota-serang.santani.dev/api/';

export const fetchSettingsCorMenu = async () => {
  const res = await fetch(`${API_BASE_URL}settings/cormenu`);
  if (!res.ok) {
    throw new Error('Gagal mengambil data settings/cormenu');
  }
  return res.json();
};

export function useSettingsCorMenu() {
  return useQuery({
    queryKey: ['settings-cormenu'],
    queryFn: fetchSettingsCorMenu,
  });
}

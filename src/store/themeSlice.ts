import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  value: 'light' | 'dark';
}

const initialState: ThemeState = {
  value: 'light', // ✅ selalu konsisten di SSR & client
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.value = action.payload;

      // ✅ hanya jalan di client
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
      }
    },

    // ✅ init dari localStorage (dipanggil di client)
    initTheme: (state) => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('theme');
        state.value = stored === 'dark' ? 'dark' : 'light';
      }
    },
  },
});

export const { setTheme, initTheme } = themeSlice.actions;
export default themeSlice.reducer;
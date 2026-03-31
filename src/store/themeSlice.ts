import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  value: 'light' | 'dark';
}

const initialState: ThemeState = {
  value: typeof globalThis.window !== 'undefined' && globalThis.window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.value = action.payload;
      if (typeof globalThis.window !== 'undefined') {
        globalThis.window.localStorage.setItem('theme', action.payload);
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

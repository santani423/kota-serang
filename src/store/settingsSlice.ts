import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CorMenu } from '@/types/settings'; 

export interface SettingsState {
  menu: CorMenu[]; 
}

const initialState: SettingsState = {
  menu: [], 
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    // Reducer tunggal untuk mengupdate data menu dari API
    setMenu: (state, action: PayloadAction<CorMenu[]>) => {
      state.menu = action.payload;
    },
    
    // Opsional: Untuk mereset data jika diperlukan
    clearMenu: (state) => {
      state.menu = [];
    }
  },
});

export const { setMenu, clearMenu } = settingsSlice.actions;
export default settingsSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CorMenu,
  ImageHomepage,
  StatistikHeroSection,
  QuickServicesSection,
} from "@/types/settings";

export interface SettingsState {
  menu: CorMenu[];
  imageHomepage: ImageHomepage[];
  statistikHeroSection: StatistikHeroSection[];
  quickServicesSection: QuickServicesSection[];
  loading: boolean;
}

const initialState: SettingsState = {
  menu: [],
  imageHomepage: [],
  statistikHeroSection: [],
  quickServicesSection: [],
  loading: true,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    // Reducer tunggal untuk mengupdate data menu dari API
    setMenu: (state, action: PayloadAction<CorMenu[]>) => {
      state.menu = action.payload;
    },

    // Opsional: Untuk mereset data jika diperlukan
    clearMenu: (state) => {
      state.menu = [];
    },
    // Reducer untuk mengupdate data image homepage dari API
    setImageHomepage: (state, action: PayloadAction<ImageHomepage[]>) => {
      state.imageHomepage = action.payload;
    },
    clearImageHomepage: (state) => {
      state.imageHomepage = [];
    },
    // Reducer untuk mengupdate data statistik hero section dari API
    setStatistikHeroSection: (
      state,
      action: PayloadAction<StatistikHeroSection[]>,
    ) => {
      state.statistikHeroSection = action.payload;
    },
    clearStatistikHeroSection: (state) => {
      state.statistikHeroSection = [];
    },
    // Reducer untuk mengupdate data quick services section dari API
    setQuickServicesSection: (
      state,
      action: PayloadAction<QuickServicesSection[]>,
    ) => {
      state.quickServicesSection = action.payload;
    },
    clearQuickServicesSection: (state) => {
      state.quickServicesSection = [];
    },
  },
});

export const {
  setLoading,
  setMenu,
  clearMenu,
  setImageHomepage,
  clearImageHomepage,
  setStatistikHeroSection,
  clearStatistikHeroSection,
  setQuickServicesSection,
  clearQuickServicesSection,
} = settingsSlice.actions;
export default settingsSlice.reducer;

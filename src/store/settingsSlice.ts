import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CorMenu,
  ImageHomepage,
  StatistikHeroSection,
  QuickServicesSection,
  NewsItemHompage,
  CityStats,
  PerformanceMetrics,
  ServiceFeatures,
} from "@/types/settingsTypes";

export interface SettingsState {
  menu: CorMenu[];
  imageHomepage: ImageHomepage[];
  statistikHeroSection: StatistikHeroSection[];
  quickServicesSection: QuickServicesSection[];
  newsItemHomepage: NewsItemHompage[];
  cityStats: CityStats[];
  performanceMetrics: PerformanceMetrics[];
  serviceFeatures: ServiceFeatures[];
  loading: boolean;
}

const initialState: SettingsState = {
  menu: [],
  imageHomepage: [],
  statistikHeroSection: [],
  quickServicesSection: [],
  newsItemHomepage: [],
  cityStats: [],
  performanceMetrics: [],
  serviceFeatures: [],
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
    // Reducer untuk mengupdate data news item homepage dari API
    setNewsItemHomepage: (state, action: PayloadAction<NewsItemHompage[]>) => {
      state.newsItemHomepage = action.payload;
    },
    clearNewsItemHomepage: (state) => {
      state.newsItemHomepage = [];
    },
    // Reducer untuk mengupdate data city stats dari API
    setCityStats: (state, action: PayloadAction<CityStats[]>) => {
      state.cityStats = action.payload;
    },
    clearCityStats: (state) => {
      state.cityStats = [];
    },
    // Reducer untuk mengupdate data performance metrics dari API
    setPerformanceMetrics: (
      state,
      action: PayloadAction<PerformanceMetrics[]>,
    ) => {
      state.performanceMetrics = action.payload;
    },
    clearPerformanceMetrics: (state) => {
      state.performanceMetrics = [];
    },
    // Reducer untuk mengupdate data service features dari API
    setServiceFeatures: (state, action: PayloadAction<ServiceFeatures[]>) => {
      state.serviceFeatures = action.payload;
    },
    clearServiceFeatures: (state) => {
      state.serviceFeatures = [];
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
  setNewsItemHomepage,
  clearNewsItemHomepage,
  setCityStats,
  clearCityStats,
  setPerformanceMetrics,
  clearPerformanceMetrics,
  setServiceFeatures,
  clearServiceFeatures,
} = settingsSlice.actions;
export default settingsSlice.reducer;

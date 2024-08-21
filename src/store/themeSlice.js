import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    getThemeMode: (state) => {
      return state.themeMode;
    },
    setDarkTheme: (state) => {
      state.themeMode = "dark";
    },
    setLightTheme: (state) => {
      state.themeMode = "light";
    },
  },
});

export const { setThemeMode, setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
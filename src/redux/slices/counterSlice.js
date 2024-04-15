import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, is_dark_theme: true },
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count !== 0 && state.count--;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    changeTheme: (state, action) => {
      state.is_dark_theme = !state.is_dark_theme;
    },
  },
});

export default counterSlice.reducer;
export const { increase, decrease, setCount, changeTheme,is_dark_theme } =
  counterSlice.actions;

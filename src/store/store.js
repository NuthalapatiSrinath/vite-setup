import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // You can add more slices here later (e.g., theme: themeReducer)
  },
});

export default store;

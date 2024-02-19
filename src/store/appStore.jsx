import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import searchData from "../store/searchSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    searchData :searchData,
  },
});

export default appStore;
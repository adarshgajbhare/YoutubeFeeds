import { createSlice } from "@reduxjs/toolkit";

// Load initial state from local storage if available
const initialState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      localStorage.setItem("user", JSON.stringify(user)); // Save user data to local storage
      return user;
    },
    clearUser: () => {
      localStorage.removeItem("user"); // Clear user data from local storage
      return null;
    },
  },
});

export default userSlice.reducer;
export const { addUser, clearUser } = userSlice.actions;

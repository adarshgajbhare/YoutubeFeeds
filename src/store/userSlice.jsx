import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return  action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

export default userSlice;

export const { addUser, removeUser } = userSlice.actions;
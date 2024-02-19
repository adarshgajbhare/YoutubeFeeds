import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchData",
  initialState: null,
  reducers: {
    addSearchData: (state, action) => {
      return action.payload;
    },
  },
});

export default searchSlice.reducer;

export const { addSearchData } = searchSlice.actions;

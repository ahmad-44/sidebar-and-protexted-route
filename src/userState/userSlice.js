import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleUserStatus: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { toggleUserStatus } = userSlice.actions;
export default userSlice.reducer;

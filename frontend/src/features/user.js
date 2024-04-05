import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    lougoutUser: (state, action) => {
      // comportement du login
      state.user = null;
    },
  },
});
console.log(user);
export const { lougoutUser } = user.actions;
export default user.reducer;

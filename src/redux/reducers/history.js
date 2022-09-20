import { createSlice } from "@reduxjs/toolkit";
import { getHistory } from "../asyncActions/history";

const initialState = {
  data: []
};

const history = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getHistory.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
});

export { getHistory };
export default history.reducer;
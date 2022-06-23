import { createSlice } from "@reduxjs/toolkit";

export const universalSlice = createSlice({
  name: "universal",
  initialState: {
    error: {} as Object | string,
    loadingStatus: 0,
  },
  reducers: {
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    setLoadingStatus: (state, action) => {
      return {
        ...state,
        loadingStatus: action.payload,
      };
    },
  },
});

export const { setError, setLoadingStatus } = universalSlice.actions;
export const selectUniversalStates = (state: any) => {
  return state.universal;
};
export default universalSlice.reducer;

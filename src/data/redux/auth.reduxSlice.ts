import { createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "data/LocalStorage.service";
import { AuthLevelType } from "utils/types";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    authLevel: "operator" as AuthLevelType,
    token: "",
  },
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        username: action.payload,
      };
    },

    setAuthLevel: (state, action) => {
      return {
        ...state,
        username: action.payload,
      };
    },

    setToken: (state, action) => {
      LocalStorageService.setCachedData("TOKEN", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const { setUser, setAuthLevel, setToken } = authSlice.actions;
export const selectAuth = (state: any) => {
  return state.auth;
};
export default authSlice.reducer;

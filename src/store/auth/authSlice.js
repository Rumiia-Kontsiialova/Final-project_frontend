import { createSlice } from "@reduxjs/toolkit";

import { registerUser, loginUser  } from "./authOperations";

const initialState = {
    user: null,
    loading: false,
    error: null,
    accessToken: null,
    refreshToken: null,
    isRegisterSuccess: false,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state) => {
            state.loading = false;
            state.isRegisterSuccess = true;
            // state.accessToken = payload.accessToken;
            // state.refreshToken = payload.refreshToken;
            // state.user = payload.user;
        })
        .addCase(registerUser.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        //login
         builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.user = payload.user;
            state.accessToken = payload.accessToken;
            state.refreshToken = payload.refreshToken;
        })
        .addCase(loginUser.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
    }
});

export default authSlice.reducer;
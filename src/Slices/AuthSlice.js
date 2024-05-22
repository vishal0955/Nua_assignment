import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    signUpData: null,
    loading: false,
    token: localStorage.getItem("auth") ? localStorage.getItem("auth") : null
};

const authSlice = createSlice({
    name: "auth",
    initialState: intialState,
    reducers: {
        setSignupData(state, value) {
            state.signUpData = value.payload
        },
        setLoading(state, value) {
            state.loading = value.payload
        },
        setToken(state, value) { 
            state.token = value.payload
        }
    }
});

export const {setSignupData, setLoading, setToken} = authSlice.actions;
export default authSlice.reducer;
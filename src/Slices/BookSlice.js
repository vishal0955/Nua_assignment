import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    Books: [],
    loading: false,
};

const bookSlice = createSlice({
    name: "book",
    initialState: intialState,
    reducers: {
        setBookData(state, value) {
            state.Books = value.payload
        },
        setLoading(state, value) {
            state.loading = value.payload
        },
    }
});

export const { setBookData, setLoading } = bookSlice.actions;
export default bookSlice.reducer;
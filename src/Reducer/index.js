import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../Slices/AuthSlice";
import bookReducer from "../Slices/BookSlice"


const RootReducer = combineReducers({
    auth: authReducer,
    book: bookReducer
});

export default RootReducer; 
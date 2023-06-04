import { configureStore } from "@reduxjs/toolkit";
import AddToCartReducer from "./Slice"

export const store = configureStore({
    reducer: {
        ADDTOCART: AddToCartReducer
    },
})
import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./productSlice";

const store = configureStore({
    reducer: {
        LatestProduct: ProductSlice.reducer
    }
});
export default store;
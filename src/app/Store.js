import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import UserSlice from "./UserSlice.js";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        user: UserSlice,
    },
});

export default Store;

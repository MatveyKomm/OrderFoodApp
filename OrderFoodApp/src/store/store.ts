import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./user.slice.ts";
import {saveState} from "./storage.ts";
import {JWT_STATE} from "./user.slice.ts";
import cartSlice from "./cart.slice.ts";
import {CART_PERSISTANT_STATE} from './cart.slice.ts';

export const store = configureStore({
    reducer: {
        user: userSlice,
        cart: cartSlice
    }
});

store.subscribe(() => {
    saveState({jwt: store.getState().user.jwt}, JWT_STATE);
    saveState(store.getState().cart, CART_PERSISTANT_STATE);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
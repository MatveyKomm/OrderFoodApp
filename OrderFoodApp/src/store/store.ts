import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./user.slice.ts";
import {saveState} from "./storage.ts";
import {JWT_STATE} from "./user.slice.ts";

export const store = configureStore({
    reducer: {
        user: userSlice
    }
});

store.subscribe(() => {
    saveState({jwt: store.getState().user.jwt}, JWT_STATE);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
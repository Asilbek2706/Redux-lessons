import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer.ts";
import paymentReducer from "./reducers/payment.reducer.ts";

const store = configureStore({
    reducer: {
        user: userReducer,
        payment: paymentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
import type {IPayment} from "../../shared/interfaces/payment.interface.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface IState {
    payments: IPayment[]
}

const initialState: IState = {
    payments: [],
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        paymentSuccess: (state: IState, action: PayloadAction<IPayment[]>) => {
            state.payments = action.payload;
        }
    }
})

export const {paymentSuccess} = paymentSlice.actions;
export default paymentSlice.reducer;
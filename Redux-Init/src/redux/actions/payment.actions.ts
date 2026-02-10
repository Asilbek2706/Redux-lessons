import type {IPayment} from "../../shared/interfaces/payment.interface.ts";
import {PaymentActionType} from "../reducers/payment.reducer.ts";

export const paymentSucceess = (payments: IPayment[]) => {
    return {
        type: PaymentActionType.PaymentSuccess,
        payload: payments
    }
}
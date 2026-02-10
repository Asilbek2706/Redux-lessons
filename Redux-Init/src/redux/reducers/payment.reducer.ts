import type {IPayment} from "../../shared/interfaces/payment.interface.ts";

interface IState {
    payments: IPayment[]
}

const initialState: IState = {
    payments: [],
}

export enum PaymentActionType {
    PaymentSuccess = 'PAYMENT_SUCCESS',
}

type IPaymentSuccessAction = {
    type: PaymentActionType.PaymentSuccess;
    payload: IPayment[];
}

type IAction = IPaymentSuccessAction;

function reducers (state = initialState, action: IAction) {
    switch (action.type) {
        case PaymentActionType.PaymentSuccess:
            return {
                ...state,
                payments: action.payload,
            }
        default:
            return state;
    }
}

export default reducers;
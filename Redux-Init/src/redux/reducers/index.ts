import {combineReducers} from "redux";
import userReducer from "./user.reducer.ts";
import paymentReducer from "./payment.reducer.ts";

const rootReducer = combineReducers({
    user: userReducer,
    payment: paymentReducer,
})

export default rootReducer;
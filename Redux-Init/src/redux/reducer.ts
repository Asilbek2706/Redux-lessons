import type {IUser} from "../shared/interfaces/user.interface.ts";
import {ActionType} from "./actionType.ts";

interface IState {
    currentUser: IUser | null;
    isLoading: boolean;
    error: object | null;
}

const initialState: IState = {
    currentUser: null,
    isLoading: false,
    error: null,
}

type IUserRequestAction = {
    type: ActionType.UserRequest;
}

type IUserSuccessAction = {
    type: ActionType.UserSuccess;
    payload: IUser;
}

type IUserFailureAction = {
    type: ActionType.UserFailure;
    payload: Error;
}

type IAction = IUserRequestAction | IUserSuccessAction | IUserFailureAction;

function reducer(state = initialState, action: IAction) {
    console.log(action);
    switch (action.type) {
        case ActionType.UserRequest:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case ActionType.UserSuccess:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
            }
        case ActionType.UserFailure:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer
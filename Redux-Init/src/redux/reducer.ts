import type {IUser} from "../shared/interfaces/user.interface.ts";

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

export enum ActionType {
    UserRequest = 'USER_REQUEST',
    UserSuccess = 'USER_SUCCESS',
    UserFailure = 'USER_FAILURE',
}

interface IAction {
    type: ActionType;
    payload: true;
}

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
                isLoading: true,
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
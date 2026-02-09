import type {IUser} from "../shared/interfaces/user.interface.ts";

import {ActionType} from "./actionType.ts";

export const userSuccess = (user: IUser) => {
    return {
        type: ActionType.UserSuccess,
        payload: user
    }
}

export const userFailure = (error: Error) => {
    return {
        type: ActionType.UserFailure,
        payload: error
    }
}

export const userRequest = () => {
    return {
        type: ActionType.UserRequest,
    }
}
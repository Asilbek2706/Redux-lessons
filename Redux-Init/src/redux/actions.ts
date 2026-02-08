import type {IUser} from "../shared/interfaces/user.interface.ts";

import {ActionType} from "./actionType.ts";

export const setUser = (user: IUser) => {
    return {
        type: ActionType.UserSuccess,
        payload: user
    }
}
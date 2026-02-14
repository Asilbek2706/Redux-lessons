import type {IUser} from "../../shared/interfaces/user.interface.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {fetchUserById} from "../../services/user.service.ts";

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

export const fetchUser = createAsyncThunk<IUser, string>(
    "user/fetchById",
    async (userId) => {
        return fetchUserById(userId);
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userRequest: (state: IState) => {
            state.isLoading = true;
        },
        userSuccess: (state: IState, action: PayloadAction<IUser>) => {
            state.currentUser = action.payload;
        },
        userFailure: (state: IState, action: PayloadAction<IUser>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
        });
    },
});

export const { userRequest, userSuccess, userFailure } = userSlice.actions;
export default userSlice.reducer;
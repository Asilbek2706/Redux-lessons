import type { UnknownAction } from 'redux';
import type { IUser } from '../../shared/interfaces/user.interface.ts';
import { ActionType } from './actionType.ts';
import type { RootState } from '../store.ts';
import type { ThunkAction } from 'redux-thunk';
import { fetchUserById } from '../../services/user.service.ts';

export const fetchUser = (): ThunkAction<
  void,
  RootState,
  unknown,
  UnknownAction
> => {
  return (dispatch) => {
    dispatch(userRequest());
    fetchUserById('123').then((user) => {
      dispatch(userSuccess(user));
    });
  };
};

export const userSuccess = (user: IUser) => {
  return {
    type: ActionType.UserSuccess,
    payload: user,
  };
};

export const userFailure = (error: Error) => {
  return {
    type: ActionType.UserFailure,
    payload: error,
  };
};

export const userRequest = () => {
  return {
    type: ActionType.UserRequest,
  };
};

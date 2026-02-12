import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import type { UnknownAction } from 'redux';
import type { ThunkDispatch } from 'redux-thunk';
import type { RootState } from '../redux/store';

type TypedDispatch<T> = ThunkDispatch<T, unknown, UnknownAction>;
export const useAppDispatch = () => {
  return useDispatch<TypedDispatch<RootState>>();
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

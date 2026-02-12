import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { thunk } from 'redux-thunk';

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export default store;

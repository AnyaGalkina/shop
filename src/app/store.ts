import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { cartReducer, productsReducer } from '../features';

export const rootReducer = combineReducers({
    productsPage: productsReducer,
    cartPage: cartReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
    devTools: true,
});

export type AppStateType = ReturnType<typeof rootReducer>;

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { loadState, saveState } from '../common';
import { cartReducer, productsReducer } from '../features';

import { appReducer } from './app-reducer';

export const rootReducer = combineReducers({
    productsPage: productsReducer,
    cartPage: cartReducer,
    app: appReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
    preloadedState: { ...rootReducer, cartPage: loadState() },
    devTools: true,
});

store.subscribe(() => {
    saveState(store.getState().cartPage);
    // debounce(() => {
    //     // we use debounce to save the state once each 800ms
    //     // for better performances in case multiple changes occur in a short time
    //     saveState(store.getState().cartPage);
    // }, 800);
});

export type AppStateType = ReturnType<typeof rootReducer>;

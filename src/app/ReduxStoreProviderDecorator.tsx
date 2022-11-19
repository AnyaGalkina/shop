import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import cakeImg from '../../public/products/cake7.jpg';
import { productsReducer } from '../features';
import { cartReducer, ProductCartType } from '../features/cartPage/cart-reducer';

import { AppStateType } from './store';

const rootReducer = combineReducers({
    productsPage: productsReducer,
    cartPage: cartReducer,
});

const initialGlobalState: AppStateType = {
    productsPage: {
        products: [
            {
                productId: '42',
                imgSrc: cakeImg,
                productName: 'Cake',
                productDescription:
                    "Whether you've been naughty or nice this year, our limited-edition Model X-mas Sweater will keep you warm all season long. With a festive pattern featuring the S3XY vehicle lineup, Supercharger, lightning bolt silhouette and Tesla wordmark, this hand-linked knit is the perfect addition to any holiday gathering. Made from 100% hypoallergenic acrylic to be extra soft and cozy.",
                pricePerUnit: 50,
            },
        ],
    },
    cartPage: {
        productsCartList: [
            {
                productId: '42',
                imgSrc: cakeImg,
                productName: 'CAKE',
                quantity: 2,
                pricePerUnit: 200,
            },
        ] as Array<ProductCartType>,
        contactDetails: {
            firstName: '',
            surname: '',
            address: '',
            phone: '',
        },
        totalSum: 200,
    },
    app: {
        appStatus: 'idle',
        appError: null,
    },
};

export const storyBookStore = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
    preloadedState: initialGlobalState,
});

export const ReduxStoreProviderDecorator = (storyFn: any): any => (
    <Provider store={storyBookStore}>{storyFn()}</Provider>
);

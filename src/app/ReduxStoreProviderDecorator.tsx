import React, { ReactElement } from 'react';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { productsReducer } from '../features';
import { cartReducer, ProductCartType } from '../features/cartPage/cart-reducer';

import { AppStateType } from './store';

const rootReducer = combineReducers({
    productsPage: productsReducer,
    cartPage: cartReducer,
});

const initialGlobalState = {
    productsPage: {
        products: [
            {
                productId: '1',
                imgSrc: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/OUTERWEAR/JACKETS/1866149-00-A_2_2000.jpg',
                productName: 'Model X-mas Sweater',
                productDescription:
                    "Whether you've been naughty or nice this year, our limited-edition Model X-mas Sweater will keep you warm all season long. With a festive pattern featuring the S3XY vehicle lineup, Supercharger, lightning bolt silhouette and Tesla wordmark, this hand-linked knit is the perfect addition to any holiday gathering. Made from 100% hypoallergenic acrylic to be extra soft and cozy.",
                pricePerUnit: 50,
            },
        ],
    },
    cartPage: {
        productsCartList: [
            {
                productId: '90',
                imgSrc: '',
                productName: 'Hat',
                quantity: 2,
                pricePerUnit: 200,
            },
        ] as Array<ProductCartType>,
        totalSum: 0,
    },
};

export const storyBookStore = createStore(
    rootReducer,
    initialGlobalState as AppStateType,
    applyMiddleware(thunk),
);

export const ReduxStoreProviderDecorator = (storyFn: any): ReactElement => (
    <Provider store={storyBookStore}>{storyFn()}</Provider>
);

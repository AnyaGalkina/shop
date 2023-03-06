import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppStateType, setAppError, setAppStatus } from '../../app';
import { ProductType } from '../productsPage/products-reducer';

import { cartPageAPI } from './api-cartPage';

const freeGiftProduct: ProductCartType = {
    productId: '42',
    imgSrc: 'https://anyagalkina.github.io/shop/products/cake6.png',
    productName: 'Free gift',
    quantity: 1,
    pricePerUnit: 0,
};

const initialState = {
    productsCartList: [freeGiftProduct] as Array<ProductCartType>,
    contactDetails: {
        firstName: '',
        surname: '',
        address: '',
        email: '',
        phone: '',
    } as ContactDetailsType,
    totalSum: 0,
};

export const createOrder = createAsyncThunk(
    'cartPage/createOrder',
    async (
        param: {
            firstName: string;
            surname: string;
            address: string;
            phone: string;
            email: string;
        },
        { dispatch, rejectWithValue, getState },
    ) => {
        dispatch(setAppStatus({ appStatus: 'loading' }));
        const state = getState() as AppStateType;
        const { productsCartList, totalSum } = state.cartPage;

        try {
            /*eslint-disable */
            const response = await cartPageAPI.createOrder({
                contactDetails: { ...param },
                totalSum,
                productsCartList,
            });

            /* eslint-enable */
            dispatch(setProductsCartList({ product: freeGiftProduct }));
        } catch (error: any) {
            if (error.message) {
                dispatch(setAppError({ appError: error.msg }));
            }
            dispatch(setAppError({ appError: 'Some error occurred' }));

            return rejectWithValue(null);
        } finally {
            dispatch(setAppStatus({ appStatus: 'idle' }));
        }
    },
);

const findIndexInProductCartArray = (id: string, arr: Array<ProductCartType>): number => {
    return arr.findIndex(product => product.productId === id);
};

const slice = createSlice({
    name: 'cartPage',
    initialState,
    reducers: {
        addContactDetails(state, action: PayloadAction<ContactDetailsType>) {
            state.contactDetails = action.payload;
        },
        setProductsCartList(state, action: PayloadAction<{ product: ProductCartType }>) {
            state.productsCartList = [];
            state.productsCartList.push(action.payload.product);
            state.totalSum = action.payload.product.pricePerUnit;
        },
        addProductToCart(
            state,
            action: PayloadAction<{ product: Omit<ProductType, 'isAddedToCart'> }>,
        ) {
            const index = findIndexInProductCartArray(
                action.payload.product.productId,
                state.productsCartList,
            );

            if (index === -1) {
                state.totalSum += action.payload.product.pricePerUnit;
                state.productsCartList.unshift({
                    ...action.payload.product,
                    quantity: 1,
                });
            } else {
                /* eslint-disable */
                return;
                /* eslint-enable */
            }
        },
        deleteProductFromCart(state, action: PayloadAction<{ productId: string }>) {
            const index = findIndexInProductCartArray(
                action.payload.productId,
                state.productsCartList,
            );

            state.totalSum -=
                state.productsCartList[index].pricePerUnit *
                state.productsCartList[index].quantity;
            state.productsCartList.splice(index, 1);
        },
        increaseQuantity(state, action: PayloadAction<{ productId: string }>) {
            const index = findIndexInProductCartArray(
                action.payload.productId,
                state.productsCartList,
            );

            state.totalSum += state.productsCartList[index].pricePerUnit;
            state.productsCartList[index].quantity += 1;
        },
        decreaseQuantity(state, action: PayloadAction<{ productId: string }>) {
            const index = findIndexInProductCartArray(
                action.payload.productId,
                state.productsCartList,
            );

            state.totalSum -= state.productsCartList[index].pricePerUnit;
            state.productsCartList[index].quantity -= 1;
        },
    },
});

export const cartReducer = slice.reducer;
export const {
    decreaseQuantity,
    deleteProductFromCart,
    addProductToCart,
    increaseQuantity,
    addContactDetails,
    setProductsCartList,
} = slice.actions;

export type InitialStateCartType = {
    productsCartList: Array<ProductCartType>;
    contactDetails: ContactDetailsType;
    totalSum: number;
};

export type ContactDetailsType = {
    firstName: string;
    surname: string;
    address: string;
    phone: string;
    email: string;
};

export type ProductCartType = {
    productId: string;
    imgSrc: string;
    productName: string;
    quantity: number;
    pricePerUnit: number;
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from '../productsPage/products-reducer';

const initialState = {
    productsCartList: [
        {
            productId: '9',
            imgSrc: '',
            productName: 'gift',
            quantity: 1,
            pricePerUnit: 0,
        },
    ] as Array<ProductCartType>,
    contactDetails: {
        firstName: '',
        surname: '',
        address: '',
        phone: '',
    } as ContactDetailsType,
    totalSum: 0,
};

export type ContactDetailsType = {
    firstName: string;
    surname: string;
    address: string;
    phone: string;
};

export type ProductCartType = {
    productId: string;
    imgSrc: string;
    productName: string;
    quantity: number;
    pricePerUnit: number;
};

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
        addProductToCart(state, action: PayloadAction<{ product: ProductType }>) {
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
} = slice.actions;

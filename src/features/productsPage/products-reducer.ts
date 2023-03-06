import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppStateType, setAppError, setAppStatus } from '../../app';

import { productsPageAPI } from './api-productsPage';

export const initialState = {
    products: [] as Array<ProductType>,
    search: '',
};

type InitialStateType = typeof initialState;

export const getProducts = createAsyncThunk(
    'productsPage/setProducts',
    async (_, { dispatch, getState, rejectWithValue }) => {
        dispatch(setAppStatus({ appStatus: 'loading' }));
        const state = getState() as AppStateType;
        const { search } = state.productsPage;
        const params: { productName?: string } = {};

        if (search) {
            params.productName = search.toUpperCase();
        }

        try {
            const response = await productsPageAPI.getProducts(params);

            return { products: response.data };
        } catch (error: any) {
            dispatch(setAppError({ appError: 'Some error occurred' }));

            return rejectWithValue(null);
        } finally {
            dispatch(setAppStatus({ appStatus: 'idle' }));
        }
    },
);

const slice = createSlice({
    name: 'productsPage',
    initialState,
    reducers: {
        setIsAddedToCart(
            state: InitialStateType,
            action: PayloadAction<{ productId: string; isAddedToCart: boolean }>,
        ): void {
            const index = state.products.findIndex(
                product => product.productId === action.payload.productId,
            );

            if (index > -1) {
                state.products[index].isAddedToCart = action.payload.isAddedToCart;
            }
        },
        setSearchParam(
            state: InitialStateType,
            action: PayloadAction<{ search: string }>,
        ): void {
            state.search = action.payload.search;
        },
        // clearSearch(state: InitialStateType, action: PayloadAction<{ search: '' }>) {
        //     state.search = action.payload.search;
        // },
    },
    extraReducers: builder => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload.products;
        });
    },
});

export const {
    setSearchParam,
    setIsAddedToCart,
    // clearSearch
} = slice.actions;
export const productsReducer = slice.reducer;

export type ProductType = {
    productId: string;
    imgSrc: string;
    productName: string;
    productDescription: string;
    pricePerUnit: number;
    isAddedToCart: boolean;
};

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppStateType, setAppError, setAppStatus } from '../../app';

import { productsPageAPI } from './api-productsPage';

export type SortDirectionType = 'desc' | 'asc' | '';

export const initialState = {
    products: [] as Array<ProductType>,
    search: '',
    pageNumber: 1,
    pagesCount: 0,
    totalCount: 0,
    pageSize: 6,
    sortDirection: '' as SortDirectionType,
};

type InitialStateType = typeof initialState;

export type ParamsType = {
    productName?: string;
    pageNumber: number;
    pageSize: number;
    sortDirection?: Omit<SortDirectionType, ''>;
};

export const getProducts = createAsyncThunk(
    'productsPage/setProducts',
    async (_, { dispatch, getState, rejectWithValue }) => {
        dispatch(setAppStatus({ appStatus: 'loading' }));
        const state = getState() as AppStateType;
        const { search, pageNumber, sortDirection, pageSize } = state.productsPage;
        const params: ParamsType = { pageNumber, pageSize };

        if (search) {
            params.productName = search.toUpperCase();
        }
        if (sortDirection) {
            params.sortDirection = sortDirection;
        }
        try {
            const response = await productsPageAPI.getProducts(params);

            return {
                products: response.data.items,
                totalCount: response.data.totalCount,
                pagesCount: response.data.pagesCount,
            };
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
        setSortDirection(
            state: InitialStateType,
            action: PayloadAction<{ sortDirection: SortDirectionType }>,
        ) {
            state.sortDirection = action.payload.sortDirection;
        },
        setPageNumber(
            state: InitialStateType,
            action: PayloadAction<{ pageNumber: number }>,
        ) {
            state.pageNumber = action.payload.pageNumber;
        },
    },
    extraReducers: builder => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload.products;
            state.totalCount = action.payload.totalCount;
            state.pagesCount = action.payload.pagesCount;
        });
    },
});

export const { setSearchParam, setIsAddedToCart, setPageNumber, setSortDirection } =
    slice.actions;
export const productsReducer = slice.reducer;

export type ProductType = {
    productId: string;
    imgSrc: string;
    productName: string;
    productDescription: string;
    pricePerUnit: number;
    isAddedToCart: boolean;
};

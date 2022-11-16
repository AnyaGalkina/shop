import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAppStatus } from '../../app';

import { productsPageAPI } from './api-productsPage';

// import cake1 from '../../common/assets/image/products/cake1.png';
// import cake2 from '../../common/assets/image/products/cake2.png';
// import cake3 from '../../common/assets/image/products/cake3.png';
// import cake4 from '../../common/assets/image/products/cake4.png';
// import cake5 from '../../common/assets/image/products/cake5.jpg';
// import cake7 from '../../common/assets/image/products/cake7.jpg';

// import { productsPageAPI, productsPageAPI } from './api-productsPage';

// const imgSrcs = [cake1, cake2, cake3, cake4, cake5, cake7];
// // eslint-disable-next-line
// const pricePerUnits = [30, 60, 40, 35, 55, 120];
// const productNames = [
//     'BERRY PIE',
//     'CREAM CAKE',
//     'FRUIT BOWL',
//     'CHOCO ROLLS',
//     'FRUIT CAKE',
//     'ASSORTMENT CAKES',
// ];

// // eslint-disable-next-line
// const productsArray: ProductType[] = new Array(6).fill(null).map((_, index) => ({
//     productId: index.toString(),
//     imgSrc: imgSrcs[index],
//     pricePerUnit: pricePerUnits[index],
//     productName: productNames[index],
//     productDescription:
//         'Sed non mauris vitae erat consequat auctor. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin nec sagitis sem nibh id elit vulputate cursus a sit amet mauris.',
// }));

export const initialState = {
    products: [] as Array<ProductType>,
    // products: [...productsArray] as Array<ProductType>,
};

export type ProductType = {
    productId: string;
    imgSrc: string;
    productName: string;
    productDescription: string;
    pricePerUnit: number;
};

export const getProductsTC = createAsyncThunk(
    'productsPage/setProducts',
    async (param: {}, { dispatch }) => {
        dispatch(setAppStatus({ appStatus: 'loading' }));
        try {
            const response = await productsPageAPI.getProducts();

            dispatch(setProducts({ products: response.data.products }));
        } catch (error) {
            //         // handleServerNetworkError(error, dispatch);
            //         return rejectWithValue(null);
        } finally {
            dispatch(setAppStatus({ appStatus: 'idle' }));
        }
    },
);

const slice = createSlice({
    name: 'productsPage',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<{ products: Array<ProductType> }>) {
            state.products = action.payload.products;
        },
    },
});

export const productsReducer = slice.reducer;
export const { setProducts } = slice.actions;

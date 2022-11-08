import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
    products: [
        {
            productId: '1',
            imgSrc: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/OUTERWEAR/JACKETS/1866149-00-A_2_2000.jpg',
            productName: 'Model X-mas Sweater',
            productDescription:
                "Whether you've been naughty or nice this year, our limited-edition Model X-mas Sweater will keep you warm all season long. With a festive pattern featuring the S3XY vehicle lineup, Supercharger, lightning bolt silhouette and Tesla wordmark, this hand-linked knit is the perfect addition to any holiday gathering. Made from 100% hypoallergenic acrylic to be extra soft and cozy.",
            pricePerUnit: 50,
        },
        {
            productId: '2',
            imgSrc: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/OUTERWEAR/JACKETS/1866149-00-A_2_2000.jpg',
            productName: 'Model X-mas Sweater',
            productDescription:
                "Whether you've been naughty or nice this year, our limited-edition Model X-mas Sweater will keep you warm all season long. With a festive pattern featuring the S3XY vehicle lineup, Supercharger, lightning bolt silhouette and Tesla wordmark, this hand-linked knit is the perfect addition to any holiday gathering. Made from 100% hypoallergenic acrylic to be extra soft and cozy.",
            pricePerUnit: 50,
        },
    ] as Array<ProductType>,
};

export type ProductType = {
    productId: string;
    imgSrc: string;
    productName: string;
    productDescription: string;
    pricePerUnit: number;
};

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

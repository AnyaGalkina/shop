import axios from 'axios';

import { ProductType } from './products-reducer';

export const instance = axios.create({
    // baseURL: "https://anyagalkina.github.io/shop"
    baseURL: './',
});

export const productsPageAPI = {
    getProducts() {
        return instance.get<ProductsType>('/products.json');
    },
};

type ProductsType = {
    products: Array<ProductType>;
};

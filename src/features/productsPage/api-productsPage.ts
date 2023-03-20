import { instance } from '../../api';
import { PATH } from '../../common';

import { ParamsType, ProductType } from './products-reducer';

export const productsPageAPI = {
    getProducts(params: ParamsType) {
        return instance.get<ResponseProductsType>(`${PATH.GET_PRODUCTS}`, { params });
    },
};

export type ResponseProductsType = {
    pagesCount: number;
    pagesNumber: number;
    pageSize: number;
    totalCount: number;
    items: ProductType[];
};

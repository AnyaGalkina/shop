import { instance } from '../../api';
import { PATH } from '../../common';

import { ProductType } from './products-reducer';

export const productsPageAPI = {
    getProducts(param: { productName?: string }) {
        return param.productName
            ? instance.get<Array<ProductType>>(
                  `${PATH.GET_PRODUCTS}?productName=${param.productName}`,
              )
            : instance.get<Array<ProductType>>(PATH.GET_PRODUCTS);
    },
};

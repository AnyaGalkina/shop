import React, { ReactElement } from 'react';

import { ProductItem } from './productItem';

export const ProductsPage = (): ReactElement => (
    <div>
        Products
        <ProductItem
            imgSrc=""
            productDescription={"That's the best product ever!"}
            productId="8"
        />
    </div>
);

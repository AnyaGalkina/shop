import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { AppStateType } from '../../app/store';

import { ProductItem } from './productItem';
import { ProductType } from './products-reducer';
import styles from './ProductsPage.module.css';

export const ProductsPage = (): ReactElement => {
    const products = useSelector<AppStateType, Array<ProductType>>(
        state => state.productsPage.products,
    );

    return (
        <div className={styles.productsPageContainer}>
            <h3>SHOP NOW</h3>
            <div className={styles.productsContainer}>
                {products.map(
                    (product): ReactElement => (
                        <ProductItem key={product.productId} product={product} />
                    ),
                )}
            </div>
        </div>
    );
};

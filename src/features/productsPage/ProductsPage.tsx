import React, { ReactElement, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { AppStateType } from '../../app/store';
import { useAppDispatch } from '../../common';

import { ProductItem } from './productItem';
import { getProductsTC, ProductType } from './products-reducer';
import styles from './ProductsPage.module.css';

export const ProductsPage = (): ReactElement => {
    const dispatch = useAppDispatch();
    const products = useSelector<AppStateType, Array<ProductType>>(
        state => state.productsPage.products,
    );

    useEffect(() => {
        dispatch(getProductsTC({}));
    }, [dispatch]);

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

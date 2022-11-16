import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { AppStateType } from '../../app/store';

import { ProductItem } from './productItem';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getProductsTC, ProductType } from './products-reducer';
import styles from './ProductsPage.module.css';

// import { useAppDispatch } from '../../common';

export const ProductsPage = (): ReactElement => {
    // const dispatch = useAppDispatch();
    const products = useSelector<AppStateType, Array<ProductType>>(
        state => state.productsPage.products,
    );
    // console.log(JSON.stringify(products));

    // useEffect(() => {
    //     dispatch(getProductsTC({}));
    // }, []);

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

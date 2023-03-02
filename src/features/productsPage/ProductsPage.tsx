import React, { ReactElement, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../common';
import { Search } from '../../common/search/Search';

import { ProductItem } from './productItem';
import { getProducts, setSearchParam } from './products-reducer';
import styles from './ProductsPage.module.css';

export const ProductsPage = (): ReactElement => {
    const dispatch = useAppDispatch();

    const products = useAppSelector(state => state.productsPage.products);
    const search = useAppSelector(state => state.productsPage.search);
    const appStatus = useAppSelector(state => state.app.appStatus);

    const onSearchClickHandler = (productName: string): void => {
        dispatch(setSearchParam({ productName }));
    };

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch, search]);

    return (
        <div className={styles.productsPageContainer}>
            <h3>SHOP NOW</h3>
            <div>
                <Search onSearchClickHandler={onSearchClickHandler} />
            </div>
            <div className={styles.productsContainer}>
                {products.map(
                    (product): ReactElement => (
                        <ProductItem
                            key={product.productId}
                            product={product}
                            disabled={appStatus === 'loading'}
                        />
                    ),
                )}
            </div>
        </div>
    );
};

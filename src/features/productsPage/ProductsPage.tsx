import React, { ReactElement, useEffect } from 'react';

import { useAppDispatch, useAppSelector, Search } from '../../common';

import { NotFoundSearchResult } from './notFoundSearchResult/NotFoundSearchResult';
import { ProductItem } from './productItem';
import { getProducts, setSearchParam } from './products-reducer';
import styles from './ProductsPage.module.css';

export const ProductsPage = (): ReactElement => {
    const dispatch = useAppDispatch();

    const products = useAppSelector(state => state.productsPage.products);
    const search = useAppSelector(state => state.productsPage.search);
    const appStatus = useAppSelector(state => state.app.appStatus);

    const isSearchResultEmpty = products.length === 0 && search;

    const onSearchClickHandler = (productName: string): void => {
        dispatch(setSearchParam({ productName }));
    };

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch, search]);

    return (
        <div className={styles.productsPageContainer}>
            <h3>SHOP NOW</h3>
            <Search onSearchClickHandler={onSearchClickHandler} />
            <div className={styles.productsContainer}>
                {isSearchResultEmpty ? (
                    <NotFoundSearchResult />
                ) : (
                    products.map(
                        (product): ReactElement => (
                            <ProductItem
                                key={product.productId}
                                product={product}
                                disabled={appStatus === 'loading'}
                            />
                        ),
                    )
                )}
            </div>
        </div>
    );
};

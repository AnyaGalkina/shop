import React, { ReactElement, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../common';

import { NotFoundSearchResult } from './notFoundSearchResult/NotFoundSearchResult';
import { ProductItem } from './productItem';
import { getProducts } from './products-reducer';
import styles from './ProductsPage.module.css';
import { SearchBar } from './searchBar/SearchBar';

export const ProductsPage = (): ReactElement => {
    const dispatch = useAppDispatch();

    const products = useAppSelector(state => state.productsPage.products);
    const search = useAppSelector(state => state.productsPage.search);
    const sortDirection = useAppSelector(state => state.productsPage.sortDirection);
    const pageNumber = useAppSelector(state => state.productsPage.pageNumber);
    const appStatus = useAppSelector(state => state.app.appStatus);

    const isSearchResultEmpty = products.length === 0 && search;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch, search, sortDirection, pageNumber]);

    return (
        <div className={styles.productsPageContainer}>
            <h3>SHOP NOW</h3>
            <SearchBar />
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

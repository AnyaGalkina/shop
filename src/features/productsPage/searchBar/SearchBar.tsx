import React, { ReactElement } from 'react';

import { Search, SortSelect, useAppDispatch } from '../../../common';
import { setSearchParam } from '../products-reducer';

import styles from './SearchBar.module.css';

export const SearchBar = (): ReactElement => {
    const dispatch = useAppDispatch();

    const onSearchClickHandler = (productName: string): void => {
        dispatch(setSearchParam({ search: productName }));
    };

    return (
        <div className={styles.searchBar}>
            <Search onSearchClickHandler={onSearchClickHandler} />
            <SortSelect />
        </div>
    );
};

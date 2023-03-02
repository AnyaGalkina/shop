import React, { ChangeEvent, ReactElement, useState } from 'react';

import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import style from './Search.module.css';

type PropsType = {
    onSearchClickHandler: (productName: string) => void;
};

export const Search = ({ onSearchClickHandler }: PropsType): ReactElement => {
    const [searchValue, setSearchValue] = useState('');

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.currentTarget.value);
    };
    const onSearchClick = (): void => {
        onSearchClickHandler(searchValue);
        setSearchValue('');
    };

    return (
        <div className={style.searchContainer}>
            <input
                className={style.searchInput}
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={onSearchChange}
            />
            <IconButton
                aria-label="cart"
                color="primary"
                onClick={onSearchClick}
                style={{ backgroundColor: '#c29f79', borderRadius: '3px' }}
            >
                <SearchIcon color="secondary" />
            </IconButton>
        </div>
    );
};

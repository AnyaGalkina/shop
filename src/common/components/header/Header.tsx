import React, { ReactElement } from 'react';

import { AppBar, Box, Toolbar, Paper, IconButton } from '@material-ui/core';
import { ShoppingBasketSharp } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../enums';
import { useAppSelector } from '../../hooks';

import styles from './Header.module.css';

const paperStyles = {
    height: '30px',
    textAlign: 'center',
    minWidth: '80px',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginRight: '20px',
    paddingRight: '5px',
};
const toolbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#161616',
    color: '#c29f79',
};

export const Header = (): ReactElement => {
    const navigate = useNavigate();
    const totalSum = useAppSelector(state => state.cartPage.totalSum);

    const onTitleClick = (): void => {
        navigate(PATH.PRODUCT_PAGE);
    };
    const onCartClickHandler = (): void => {
        navigate(PATH.CART_PAGE);
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar style={toolbarStyles}>
                    {/* eslint-disable-next-line */}
                    <div onClick={onTitleClick} className={styles.title}>
                        <h2>Cakes Shop</h2>
                    </div>
                    <div className={styles.shopCart}>
                        <Paper
                            // @ts-ignore
                            style={paperStyles}
                        >
                            {totalSum || ''}
                        </Paper>
                        <IconButton
                            aria-label="cart"
                            color="inherit"
                            onClick={onCartClickHandler}
                        >
                            <ShoppingBasketSharp />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

// {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">*/}
// {/*    <path*/}
// {/*        fill="#161616"*/}
// {/*        fillOpacity="2"*/}
// {/*        d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 681.800-80V0H0z"*/}
// {/*        // d="M0 51.76c36.21-2.25 77.57-3.58 126.42-3.58 320 0 320 57 640 57 271.15 0 312.58-40.91 681.800-80V0H0z"*/}
// {/*    />*/}
// {/*</svg>*/}

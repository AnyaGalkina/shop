import React, { ReactElement } from 'react';

import { AppBar, Box, Toolbar, Paper, IconButton } from '@material-ui/core';
import { ShoppingBasketSharp } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppStateType } from '../../../app/store';
import { ProductCartType } from '../../../features/cartPage/cart-reducer';
import { ROUTES } from '../../enums';

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
    justifyContent: 'end',
    backgroundColor: '#161616',
    color: '#c29f79',
};

// type PropsType = {
//     demo?: boolean;
// };

export const Header = (): ReactElement => {
    // if (!demo) {
    const navigate = useNavigate();
    // }
    const productsCartList = useSelector<AppStateType, Array<ProductCartType>>(
        state => state.cartPage.productsCartList,
    );
    const totalSum = useSelector<AppStateType, number>(state => state.cartPage.totalSum);

    const onCartClickHandler = (): void => {
        // if (!demo) {
        navigate(ROUTES.CART_PAGE);
        // }
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar style={toolbarStyles}>
                    <Paper
                        // @ts-ignore
                        style={paperStyles}
                    >
                        {productsCartList.length ? totalSum : ''}
                    </Paper>
                    <IconButton color="inherit" onClick={onCartClickHandler}>
                        <ShoppingBasketSharp />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

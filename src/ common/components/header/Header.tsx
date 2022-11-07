/* eslint-disable */

import React, { ReactElement } from 'react';

import { AppBar, Box, Button, Toolbar, Paper } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../enums';

type PropsType = {
    totalSum: number;
};

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
const toolbarStyles = { display: 'flex', justifyContent: 'end' };

export const Header = ({ totalSum }: PropsType): ReactElement => {
    const navigate = useNavigate();

    const onCartClickHandler = (): void => {
        navigate(ROUTES.CART_PAGE);
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar style={toolbarStyles}>
                    <Paper
                        // @ts-ignore
                        style={paperStyles}
                    >
                        {totalSum} $
                    </Paper>
                    <Button color="inherit" onClick={onCartClickHandler}>
                        CART
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

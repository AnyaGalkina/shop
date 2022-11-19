import React, { ReactElement } from 'react';

import { Container, LinearProgress } from '@material-ui/core';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Header, PageNotFound, PATH, useAppSelector } from '../common';
import bg from '../common/assets/image/backGroundImg.jpg';
import { ErrorSnackbars } from '../common/components';
import { CartPage, ProductsPage } from '../features';

export const App = (): ReactElement => {
    const appStatus = useAppSelector(state => state.app.appStatus);

    return (
        <div className="App" style={{ backgroundImage: `url(${bg})` }}>
            <Header />
            {appStatus === 'loading' && <LinearProgress />}
            <ErrorSnackbars />
            <Container fixed style={{ position: 'relative' }}>
                <Routes>
                    <Route path="/" element={<Navigate to={PATH.PRODUCT_PAGE} />} />
                    <Route path={PATH.PRODUCT_PAGE} element={<ProductsPage />} />
                    <Route path={PATH.CART_PAGE} element={<CartPage />} />
                    <Route path={PATH.PAGE_NOT_FOUND} element={<PageNotFound />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                </Routes>
            </Container>
        </div>
    );
};

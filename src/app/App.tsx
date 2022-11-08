import React, { ReactElement } from 'react';

import { Container } from '@material-ui/core';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Header, PageNotFound, ROUTES } from '../ common';
import { CartPage, ProductsPage } from '../features';

export const App = (): ReactElement => (
    <div>
        <Header />
        <Container fixed>
            <Routes>
                <Route path="/" element={<Navigate to={ROUTES.PRODUCT_PAGE} />} />
                <Route path={ROUTES.PRODUCT_PAGE} element={<ProductsPage />} />
                <Route path={ROUTES.CART_PAGE} element={<CartPage />} />
                <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </Container>
    </div>
);

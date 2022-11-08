import React, { ReactElement } from 'react';

import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../ common';
import { AppStateType } from '../../app/store';

import { ProductCartType } from './cart-reducer';
import { CartItem } from './cartItem';
import styles from './CartPage.module.css';
import { OrderDetails } from './orderDetails';

export const CartPage = (): ReactElement => {
    const navigate = useNavigate();
    const productsAtCart = useSelector<AppStateType, Array<ProductCartType>>(
        state => state.cartPage.productsCartList,
    );
    const totalSum = useSelector<AppStateType, number>(state => state.cartPage.totalSum);

    const onStartShoppingClickHandler = (): void => {
        navigate(ROUTES.PRODUCT_PAGE);
    };

    return (
        <div className={styles.cartContainer}>
            <div>
                {productsAtCart.length ? (
                    productsAtCart.map(p => {
                        return <CartItem key={p.productId} product={p} />;
                    })
                ) : (
                    <div>
                        <h4>The cart is empty</h4>
                        <Button onClick={onStartShoppingClickHandler}>
                            Start shopping now
                        </Button>
                    </div>
                )}
                <div>Total: {totalSum}</div>
            </div>
            <OrderDetails />
        </div>
    );
};

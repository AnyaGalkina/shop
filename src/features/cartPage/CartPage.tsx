import React, { ReactElement } from 'react';

import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppStateType } from '../../app/store';
import { ROUTES } from '../../common';

import { ProductCartType } from './cart-reducer';
import { CartItem } from './cartItem';
import styles from './CartPage.module.css';
import { ContactDetails } from './contactDetails';

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
                    <div>
                        {productsAtCart.map(p => {
                            return <CartItem key={p.productId} product={p} />;
                        })}
                        <div className={styles.totalSumBlock}>
                            <h4>Total: {totalSum} $</h4>
                            <Button
                                style={{ color: '#fff' }}
                                variant="contained"
                                onClick={onStartShoppingClickHandler}
                            >
                                BACK TO SHOPPING
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.totalSumBlock}>
                        <h4>The cart is empty</h4>
                        <Button
                            style={{ color: '#fff' }}
                            variant="contained"
                            onClick={onStartShoppingClickHandler}
                        >
                            SHOP NOW
                        </Button>
                    </div>
                )}
            </div>
            <ContactDetails />
        </div>
    );
};

import React, { ReactElement } from 'react';

import { CartItem } from './cartItem';
import styles from './CartPage.module.css';
import { OrderDetails } from './orderDetails';

export const CartPage = (): ReactElement => {
    return (
        <div className={styles.cartContainer}>
            <div>
                <CartItem
                    imgSrc=""
                    productName="newProduct"
                    productId="1"
                    productCount={3}
                />
                <div>Total:</div>
            </div>
            <OrderDetails />
        </div>
    );
};

import React, { ReactElement } from 'react';

import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {
    decreaseQuantity,
    deleteProductFromCart,
    increaseQuantity,
    ProductCartType,
} from '../cart-reducer';

import styles from './CartItem.module.css';

type PropsType = {
    product: ProductCartType;
};

const buttonStyles = {
    maxWidth: '30px',
    maxHeight: '30px',
    minWidth: '30px',
    minHeight: '30px',
};

export const CartItem = ({ product }: PropsType): ReactElement => {
    const dispatch = useDispatch();
    const { productId, imgSrc, productName, pricePerUnit, quantity }: ProductCartType =
        product;

    const onIncreaseQuantityClickHandler = (): void => {
        dispatch(increaseQuantity({ productId }));
    };

    const onDecreaseItemClickHandler = (): void => {
        if (quantity === 1) {
            dispatch(deleteProductFromCart({ productId }));
        } else {
            dispatch(decreaseQuantity({ productId }));
        }
    };

    return (
        <div className={styles.cartItemContainer}>
            <img alt="product" src={imgSrc} className={styles.img} />
            <div>productName: {productName}</div>
            <div>price Per Unit: {pricePerUnit}</div>
            <div className={styles.itemQuantityContainer}>
                <Button
                    variant="contained"
                    onClick={onDecreaseItemClickHandler}
                    style={buttonStyles}
                >
                    -
                </Button>
                <div className={styles.itemQuantity}>{quantity}</div>
                <Button
                    variant="contained"
                    onClick={onIncreaseQuantityClickHandler}
                    style={buttonStyles}
                >
                    +
                </Button>
            </div>
        </div>
    );
};

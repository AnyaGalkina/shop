/* eslint-disable */

import React, { ReactElement } from 'react';

import { Button } from '@material-ui/core';

import styles from './CartItem.module.css';

type PropsType = {
    productId: string;
    imgSrc: string;
    productName: string;
    productCount: number;
};

const buttonStyles = {
    maxWidth: '30px',
    maxHeight: '30px',
    minWidth: '30px',
    minHeight: '30px',
};

export const CartItem = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    productId,
    imgSrc,
    productName,
    productCount,
}: PropsType): ReactElement => {
    const onAddItemClickHandler = (): void => {};
    const onDeleteItemClickHandler = (): void => {};

    return (
        <div className={styles.cartItemContainer}>
            <img alt="product" src={imgSrc} className={styles.img} />
            <div>productName: {productName}</div>
            <div className={styles.itemQuantityContainer}>
                <Button
                    variant="contained"
                    onClick={onAddItemClickHandler}
                    style={buttonStyles}
                >
                    -
                </Button>
                <div className={styles.itemQuantity}>{productCount}</div>
                <Button
                    variant="contained"
                    onClick={onDeleteItemClickHandler}
                    style={buttonStyles}
                >
                    +
                </Button>
            </div>
        </div>
    );
};

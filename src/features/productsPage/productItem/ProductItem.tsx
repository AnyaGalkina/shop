import React, { ReactElement } from 'react';

import { Button, Paper } from '@material-ui/core';
import TaskAltIcon from '@material-ui/icons/CheckCircle';

import { useAppDispatch } from '../../../common';
import { addProductToCart } from '../../cartPage';
import { ProductType, setIsAddedToCart } from '../products-reducer';

import styles from './ProductItem.module.css';

type PropsType = {
    product: ProductType;
    disabled: boolean;
};

export const ProductItem = ({ product, disabled }: PropsType): ReactElement => {
    const dispatch = useAppDispatch();

    const {
        imgSrc,
        productDescription,
        productName,
        pricePerUnit,
        isAddedToCart,
        productId,
    } = product;

    const onAddToCardClickHandler = (): void => {
        dispatch(addProductToCart({ product }));
        dispatch(setIsAddedToCart({ productId, isAddedToCart: true }));
    };

    return (
        <Paper elevation={3} style={{ marginBottom: '30px' }}>
            <div className={styles.shoppingItemContainer}>
                <img alt="product" src={imgSrc} className={styles.img} />
                <h4 className={styles.title}>{productName}</h4>
                <div className={styles.text}>{productDescription}</div>
                <div className={styles.text}>
                    PRICE: <b>{pricePerUnit}$</b>
                </div>
                <Button
                    disabled={disabled}
                    variant="contained"
                    style={{ width: '320px', color: '#fff' }}
                    onClick={onAddToCardClickHandler}
                >
                    {!isAddedToCart ? (
                        <span>Add to Cart</span>
                    ) : (
                        <>
                            <span style={{ marginRight: '5px' }}>Added to cart</span>{' '}
                            <TaskAltIcon />
                        </>
                    )}
                </Button>
            </div>
        </Paper>
    );
};

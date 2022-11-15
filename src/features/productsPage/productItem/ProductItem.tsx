import React, { ReactElement } from 'react';

import { Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { addProductToCart } from '../../cartPage';
import { ProductType } from '../products-reducer';

import styles from './ProductItem.module.css';

type PropsType = {
    product: ProductType;
};

export const ProductItem = ({ product }: PropsType): ReactElement => {
    const dispatch = useDispatch();

    const { imgSrc, productDescription, productName, pricePerUnit } = product;

    const onAddToCardClickHandler = (): void => {
        dispatch(addProductToCart({ product }));
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
                    variant="contained"
                    style={{ width: '320px' }}
                    onClick={onAddToCardClickHandler}
                >
                    Add to Cart
                </Button>
            </div>
        </Paper>
    );
};

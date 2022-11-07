/* eslint-disable */

import React, { FC } from 'react';

import { Button } from '@material-ui/core';

import styles from './ProductItem.module.css';

type PropsType = {
    imgSrc: string;
    productDescription: string;
    productId: string;
};

export const ProductItem: FC<PropsType> = ({
    imgSrc,
    productDescription, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    productId,
}: PropsType) => {
    // const dispatch = useDispatch();
    //
    const handleOnAddToCardClick = (): void => {};

    return (
        <div className={styles.shoppingItemContainer}>
            <img alt="product" src={imgSrc} className={styles.img} />
            <div className={styles.itemDescription}>{productDescription}</div>
            <Button
                variant="contained"
                style={{ width: '320px' }}
                onClick={handleOnAddToCardClick}
            >
                Add to Cart
            </Button>
        </div>
    );
};

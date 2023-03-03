import React, { ReactElement } from 'react';

import imgNotFound from '../../../common/assets/image/imgNotFound.png';

import styles from './NotFoundSearchResult.module.css';

export const NotFoundSearchResult = (): ReactElement => {
    return (
        <div className={styles.productsPageContainer}>
            <h2>Not found </h2>
            <img src={imgNotFound} alt="not found" className={styles.notFoundImage} />
        </div>
    );
};

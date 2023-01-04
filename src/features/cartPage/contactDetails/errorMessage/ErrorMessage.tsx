import React, { ReactElement } from 'react';

import styles from './ErrorMessage.module.css';

type PropsType = {
    errorMessage?: string;
    isTouched?: boolean;
};

export const ErrorMessage = ({ errorMessage, isTouched }: PropsType): ReactElement => {
    const showErrorMessage = isTouched && errorMessage;

    return <div className={styles.error}>{showErrorMessage ? errorMessage : ''}</div>;
};

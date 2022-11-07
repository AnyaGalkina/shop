import React, { ReactElement } from 'react';

import { Button, Paper, TextField } from '@material-ui/core';
import { useFormik } from 'formik';

import styles from './OrderDetails.module.css';

const textFieldStyles = { marginBottom: '10px', width: '280px' };

export const OrderDetails = (): ReactElement => {
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            address: '',
            phone: '',
        },
        // validate:
        onSubmit: values => {
            formik.resetForm();
        },
    });

    return (
        <Paper
            elevation={3}
            style={{ width: '330px', display: 'flex', flexDirection: 'column' }}
        >
            <h3 className={styles.formHeader}>Add order details:</h3>
            <form onSubmit={formik.handleSubmit} className={styles.orderDetailsForm}>
                <TextField
                    style={textFieldStyles}
                    label="Name"
                    {...formik.getFieldProps('name')}
                />
                <TextField
                    style={textFieldStyles}
                    label="Surname"
                    {...formik.getFieldProps('surname')}
                />
                <TextField
                    style={textFieldStyles}
                    label="Address"
                    {...formik.getFieldProps('address')}
                />
                <TextField
                    style={textFieldStyles}
                    label="Phone"
                    {...formik.getFieldProps('phone')}
                />
                <Button type="submit">Order</Button>
            </form>
        </Paper>
    );
};

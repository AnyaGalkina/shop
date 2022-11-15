import React, { ReactElement } from 'react';

import { Button, Paper, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import 'yup-phone';

import { addContactDetails } from '../cart-reducer';

import styles from './ContactDetails.module.css';

const textFieldStyles = { marginBottom: '10px', width: '280px' };
const MAX_NAME_LENGTH = 128;
const MAX_ADDRESS_LENGTH = 500;

export const FormSchema = Yup.object().shape({
    firstName: Yup.string()
        .max(MAX_NAME_LENGTH, `Maximum ${MAX_NAME_LENGTH} symbol.`)
        .required('Field is required'),
    surname: Yup.string()
        .max(MAX_NAME_LENGTH, `Maximum ${MAX_NAME_LENGTH} symbol.`)
        .required('Field is required'),
    address: Yup.string()
        .max(MAX_ADDRESS_LENGTH, `Maximum ${MAX_ADDRESS_LENGTH} symbol.`)
        .required('Field is required'),
    phone: Yup.string().phone('IN').required('A phone number is required'),
});

export const ContactDetails = (): ReactElement => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            surname: '',
            address: '',
            phone: '',
        },
        validationSchema: FormSchema,
        onSubmit: (values): void => {
            dispatch(addContactDetails(values));
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
                    label="First name"
                    {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <div>{formik.errors.firstName}</div>
                )}
                <TextField
                    style={textFieldStyles}
                    label="Surname"
                    {...formik.getFieldProps('surname')}
                />
                {formik.touched.surname && formik.errors.surname && (
                    <div>{formik.errors.surname}</div>
                )}
                <TextField
                    style={textFieldStyles}
                    label="Address"
                    {...formik.getFieldProps('address')}
                />
                {formik.touched.address && formik.errors.address && (
                    <div>{formik.errors.address}</div>
                )}
                <TextField
                    style={textFieldStyles}
                    label="Phone"
                    {...formik.getFieldProps('phone')}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <div>{formik.errors.phone}</div>
                )}
                <Button type="submit">Order</Button>
            </form>
        </Paper>
    );
};

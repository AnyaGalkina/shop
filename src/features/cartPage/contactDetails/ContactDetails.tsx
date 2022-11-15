import React, { ReactElement } from 'react';

import { Button, Paper, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

import styles from './ContactDetails.module.css';

const textFieldStyles = { marginBottom: '10px', width: '280px' };
const MAX_NAME_LENGTH = 128;
const MAX_ADDRESS_LENGTH = 500;
// const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

export const FormSchema = Yup.object().shape({
    firstName: Yup.string()
        // .min(2, '.')
        .max(MAX_NAME_LENGTH, `Maximum ${MAX_NAME_LENGTH} symbol.`)
        .required('Field is required'),
    surname: Yup.string()
        // .min(2, 'Field may not be less than 2 letters or include numeric values/symbols.')
        .max(MAX_NAME_LENGTH, `Maximum ${MAX_NAME_LENGTH} symbol.`)
        .required('Field is required'),
    address: Yup.string()
        // .min(2, 'Field may not be less than 2 letters or include numeric values/symbols.')
        .max(MAX_ADDRESS_LENGTH, `Maximum ${MAX_ADDRESS_LENGTH} symbol.`)
        .required('Field is required'),
    //     .required('Must include the "@" symbol and valid domain (e.g. .com, .net).')
    //     .email('Must include the "@" symbol and valid domain (e.g. .com, .net).'),
    phone: Yup.string().phone('IN').required('A phone number is required'),
});

export const ContactDetails = (): ReactElement => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            surname: '',
            address: '',
            phone: '',
        },
        validationSchema: FormSchema,
        onSubmit: (): void => {
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

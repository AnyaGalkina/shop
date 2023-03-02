import React, { memo, ReactElement, useState } from 'react';

import { Button, Paper } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

import { useAppDispatch, useAppSelector } from '../../../common';
import { ContactDetailsType, createOrder } from '../cart-reducer';

import styles from './ContactDetails.module.css';
import { OrderInput } from './orderInput/OrderInput';

import { Modal } from 'common/components';

const MIN_NAME_LENGTH = 1;
const MAX_NAME_LENGTH = 100;
const MAX_ADDRESS_LENGTH = 500;

export const FormSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(MIN_NAME_LENGTH, `Minimum ${MIN_NAME_LENGTH} symbol`)
        .max(MAX_NAME_LENGTH, `Maximum ${MAX_NAME_LENGTH} symbol.`)
        .required('Field is required'),
    surname: Yup.string()
        .min(MIN_NAME_LENGTH, `Minimum ${MIN_NAME_LENGTH} symbol`)
        .max(MAX_NAME_LENGTH, `Maximum ${MAX_NAME_LENGTH} symbol.`)
        .required('Field is required'),
    address: Yup.string()
        .min(MIN_NAME_LENGTH, `Minimum ${MIN_NAME_LENGTH} symbol`)
        .max(MAX_ADDRESS_LENGTH, `Maximum ${MAX_ADDRESS_LENGTH} symbol.`)
        .required('Field is required'),
    email: Yup.string().email().required('Field is required'),
    phone: Yup.string().phone('IN').required('A phone number is required'),
});

type PropsType = {
    disabled: boolean;
};

export const ContactDetails = memo(({ disabled }: PropsType): ReactElement => {
    const dispatch = useAppDispatch();

    const appError = useAppSelector(state => state.app.appError);

    const [open, setOpen] = useState(false);

    const formik = useFormik<ContactDetailsType>({
        initialValues: {
            firstName: '',
            surname: '',
            address: '',
            email: '',
            phone: '',
        },
        validationSchema: FormSchema,
        onSubmit: (values, { resetForm }): void => {
            dispatch(createOrder(values));
            if (!appError) {
                setOpen(true);
            }
            resetForm();
        },
    });

    const { errors, touched, getFieldProps, handleSubmit } = formik;

    return (
        <Paper
            elevation={3}
            style={{ width: '330px', display: 'flex', flexDirection: 'column' }}
        >
            <h3 className={styles.formHeader}>Add order details:</h3>
            <form onSubmit={handleSubmit} className={styles.orderDetailsForm}>
                <OrderInput
                    placeholder="First name"
                    value="firstName"
                    isTouched={touched.firstName}
                    errorMessage={errors.firstName}
                    getFieldProps={getFieldProps}
                />
                <OrderInput
                    placeholder="Surname"
                    value="surname"
                    isTouched={touched.surname}
                    errorMessage={errors.surname}
                    getFieldProps={getFieldProps}
                />
                <OrderInput
                    placeholder="Address"
                    value="address"
                    isTouched={touched.address}
                    errorMessage={errors.address}
                    getFieldProps={getFieldProps}
                />
                <OrderInput
                    placeholder="Email"
                    value="email"
                    isTouched={touched.email}
                    errorMessage={errors.email}
                    getFieldProps={getFieldProps}
                />
                <OrderInput
                    placeholder="Phone"
                    value="phone"
                    isTouched={touched.phone}
                    errorMessage={errors.phone}
                    getFieldProps={getFieldProps}
                />
                <Button
                    disabled={disabled}
                    variant="contained"
                    style={{ color: '#fff' }}
                    type="submit"
                >
                    Order
                </Button>
            </form>

            <Modal setOpen={setOpen} open={open} />
        </Paper>
    );
});

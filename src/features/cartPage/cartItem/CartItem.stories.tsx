import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import placeholder from '../../../ common/assets/image/placeholder.png';

import { CartItem } from './CartItem';

export default {
    title: 'Shop/Cart_Page/CartItem',
    component: CartItem,
} as ComponentMeta<typeof CartItem>;

// const onAddItemClickHandler = action()

const baseArgs = {
    onAddItemClickHandler: action('one more item added'),
    onDeleteItemClickHandler: action('one more item added'),
};

const Template: ComponentStory<typeof CartItem> = args => <CartItem {...args} />;

export const CartItemBaseExample = Template.bind({});
CartItemBaseExample.args = {
    ...baseArgs,
    productId: '1',
    imgSrc: placeholder,
    productName: 'Best Product',
    productCount: 5,
};

import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';

import placeholder from '../../../ common/assets/image/placeholder.png';
import { ProductType } from '../products-reducer';

import { ProductItem } from './ProductItem';

export default {
    title: 'Shop/Product_Page/ProductItem_Component',
    component: ProductItem,
    args: {
        addItem: action("Button 'add to cart' was pressed"),
    },
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = args => <ProductItem {...args} />;

export const ProductItemBaseExample = Template.bind({});

const product: ProductType = {
    imgSrc: placeholder,
    productDescription: "That's the best product ever!",
    productId: '8',
    productName: 'PRODUCT',
    pricePerUnit: 85,
};

ProductItemBaseExample.args = {
    product,
    // @ts-ignore
    addItem: action("Button 'add to cart' was pressed"),
};

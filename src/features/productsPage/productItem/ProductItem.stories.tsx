import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';

import placeholder from '../../../ common/assets/image/placeholder.png';

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

ProductItemBaseExample.args = {
    imgSrc: placeholder,
    productDescription: "That's the best product ever!",
    productId: '8',
    // @ts-ignore
    addItem: action("Button 'add to cart' was pressed"),
};

import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
    title: 'Shop/Common/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const HeaderBaseExample = Template.bind({});
HeaderBaseExample.args = {
    totalSum: 150,
};

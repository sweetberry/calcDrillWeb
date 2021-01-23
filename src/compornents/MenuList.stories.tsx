import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {MenuList, MenuListProps} from './MenuList';

export default {
    title: 'CalcDrill/MenuList',
    component: MenuList,
    argTypes: {onPress:{action:'onPress'}},
} as Meta;

const Template: Story<MenuListProps> = (args) => <MenuList {...args} />;

export const Default = Template.bind({});
Default.args = {}

import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {MenuListRow, MenuListRowProps} from './MenuListRow';

export default {
    title: 'CalcDrill/MenuListRow',
    component: MenuListRow,
    argTypes: {},
} as Meta;

const Template: Story<MenuListRowProps> = (args) => <MenuListRow {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Level1",
    description: "1桁 × 1桁\n穴あき",
    levelRecord: {
        lastResult: {
            totalCount: 20,
            successCount: 20,
            totalDuration: 3542558,
            timestamp: Date.now() - 10000,
        },
        bestResult: {
            totalCount: 20,
            successCount: 20,
            totalDuration: 268653,
            timestamp: Date.now() - 50000000000,
        },
        clearCount: 2,
    }

}

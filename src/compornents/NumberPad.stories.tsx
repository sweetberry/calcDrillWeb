import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {NumberPad, NumberPadProps} from './NumberPad';

export default {
    title: 'CalcDrill/NumberPad',
    component: NumberPad,
    argTypes: {onPress:{action:'onPress'}},
} as Meta;

const Template: Story<NumberPadProps> = (args) => <NumberPad {...args} />;
export const Default = Template.bind({});

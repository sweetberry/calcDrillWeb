import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {NumberPadButton, NumberPadButtonProps} from './NumberPadButton';

export default {
    title: 'CalcDrill/NumberPadButton',
    component: NumberPadButton,
    argTypes: {onPress:{action:'onPress'}},
} as Meta;

const Template: Story<NumberPadButtonProps> = (args) => <NumberPadButton {...args} />;
export const Default = Template.bind({});
export const Zero = Template.bind({});
Zero.args = {
    number: '0',
    color: '#0074bf',
};
export const One = Template.bind({});
One.args = {
    number: '1',
    color: '#f2cf01',
};
export const Two = Template.bind({});
Two.args = {
    number: '2',
    color: '#56a764',
};
export const Three = Template.bind({});
Three.args = {
    number: '3',
    color: '#d06d8c',
};
export const Four = Template.bind({});
Four.args = {
    number: '4',
    color: '#9460a0',
};

export const Five = Template.bind({});
Five.args = {
    number: '5',
    color: '#a0c238',
};

export const Six = Template.bind({});
Six.args = {
    number: '6',
    color: '#c93a40',
};

export const Seven = Template.bind({});
Seven.args = {
    number: '7',
    color: '#cc528b',
};
export const Eight = Template.bind({});
Eight.args = {
    number: '8',
    color: '#65ace4',
};
export const Nine = Template.bind({});
Nine.args = {
    number: '9',
    color: '#de9610',
};

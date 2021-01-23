import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {StartModal, StartModalProps} from './StartModal';

export default {
    title: 'CalcDrill/Modal/StartModal',
    component: StartModal,
    argTypes: {},
} as Meta;

const Template: Story<StartModalProps> = (args) => <StartModal {...args} />;

export const Default = Template.bind({});
Default.args = {}


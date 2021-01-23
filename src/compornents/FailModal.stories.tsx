import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {FailModal, FailModalProps} from './FailModal';

export default {
    title: 'CalcDrill/Modal/FailModal',
    component: FailModal,
    argTypes: {},
} as Meta;

const Template: Story<FailModalProps> = (args) => <FailModal {...args} />;

export const Default = Template.bind({});
Default.args = {
}


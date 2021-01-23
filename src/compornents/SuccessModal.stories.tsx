import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {SuccessModal, SuccessModalProps} from './SuccessModal';

export default {
    title: 'CalcDrill/Modal/SuccessModal',
    component: SuccessModal,
    argTypes: {},
} as Meta;

const Template: Story<SuccessModalProps> = (args) => <SuccessModal {...args} />;

export const Default = Template.bind({});
Default.args = {}


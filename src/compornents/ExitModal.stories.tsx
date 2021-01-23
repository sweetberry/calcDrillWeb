import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {ExitModal, ExitModalProps} from './ExitModal';

export default {
    title: 'CalcDrill/Modal/ExitModal',
    component: ExitModal,
    argTypes: {},
} as Meta;

const Template: Story<ExitModalProps> = (args) => <ExitModal {...args} />;

export const Default = Template.bind({});
Default.args = {
}


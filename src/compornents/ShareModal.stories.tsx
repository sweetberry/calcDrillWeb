import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {ShareModal, ShareModalProps} from './ShareModal';

export default {
    title: 'CalcDrill/Modal/ShareModal',
    component: ShareModal,
    argTypes: {},
} as Meta;

const Template: Story<ShareModalProps> = (args) => <ShareModal {...args} />;

export const Default = Template.bind({});
Default.args = {}


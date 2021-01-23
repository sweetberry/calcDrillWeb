import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {LevelView, LevelViewProps} from './LevelView';

export default {
    title: 'CalcDrill/LevelView',
    component: LevelView,
    argTypes: {exitLevel: {action: 'existLevel'}}
} as Meta;

const Template: Story<LevelViewProps> = (args) => <LevelView {...args} />;
export const Default = Template.bind({});
Default.args = {
    levelID: 'level_9x9_lv01',
};

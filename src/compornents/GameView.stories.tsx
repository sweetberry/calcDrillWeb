import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {GameView, GameViewProps} from './GameView';

export default {
    title: 'CalcDrill/GameView',
    component: GameView,
} as Meta;

const Template: Story<GameViewProps> = (args) => <GameView {...args} />;
export const Default = Template.bind({});
Default.args = {
    question:{problem: "9*9=??", answer: 81}
};

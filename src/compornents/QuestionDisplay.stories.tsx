import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {QuestionDisplay, QuestionDisplayProps} from './QuestionDisplay';

export default {
    title: 'CalcDrill/QuestionDisplay',
    component: QuestionDisplay,
    argTypes: {},
} as Meta;

const Template: Story<QuestionDisplayProps> = (args) => <QuestionDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
    characters: [
        {text: "3", status: null},
        {text: "2", status: "success"},
        {text: "+", status: null},
        {text: "5", status: null},
        {text: "6", status: null},
        {text: "=", status: null},
        {text: " ", status: "ready"},
        {text: "8", status: "fail"}]
}

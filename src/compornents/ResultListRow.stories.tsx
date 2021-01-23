import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {ResultListRow, ResultListRowProps} from './ResultListRow';

export default {
    title: 'CalcDrill/ResultListRow',
    component: ResultListRow,
    argTypes: {
        problemLog: {},
    },
} as Meta;

const Template: Story<ResultListRowProps> = (args) => <ResultListRow {...args} />;

export const Success = Template.bind({});
Success.args = {
    problemLog: {question: {problem: "9x7=??", answer: 63}, inputNumbers: [6, 3], duration: 7098}
}
export const Fail = Template.bind({});

Fail.args = {
    problemLog: {question: {problem: "4x7=??", answer: 28}, inputNumbers: [2, 4], duration: 2383}
}


import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {ResultList, ResultListProps} from './ResultList';

export default {
    title: 'CalcDrill/ResultList',
    component: ResultList,
    argTypes: {
        levelRecord: {},
    },
} as Meta;

const Template: Story<ResultListProps> = (args) => <ResultList {...args} />;

export const Default = Template.bind({});
Default.args = {
    levelRecord: {
        levelID: 'testA',
        problemLogs: [
            {question: {problem: "3x3=?", answer: 9}, inputNumbers: [9], duration: 2215},
            {question: {problem: "8x6=??", answer: 48}, inputNumbers: [4, 2], duration: 2450},
            {question: {problem: "2x9=??", answer: 18}, inputNumbers: [1, 8], duration: 2694},
            {question: {problem: "5x6=??", answer: 30}, inputNumbers: [3, 0], duration: 1839},
            {question: {problem: "9x2=??", answer: 18}, inputNumbers: [1, 8], duration: 1368},
            {question: {problem: "3x3=?", answer: 9}, inputNumbers: [9], duration: 2215},
            {question: {problem: "8x6=??", answer: 48}, inputNumbers: [4, 2], duration: 2450},
            {question: {problem: "2x9=??", answer: 18}, inputNumbers: [1, 8], duration: 2694},
            {question: {problem: "5x6=??", answer: 30}, inputNumbers: [3, 0], duration: 1839},
            {question: {problem: "9x2=??", answer: 18}, inputNumbers: [1, 8], duration: 1368},
            {question: {problem: "3x3=?", answer: 9}, inputNumbers: [9], duration: 2215},
            {question: {problem: "8x6=??", answer: 48}, inputNumbers: [4, 2], duration: 2450},
            {question: {problem: "2x9=??", answer: 18}, inputNumbers: [1, 8], duration: 2694},
            {question: {problem: "5x6=??", answer: 30}, inputNumbers: [3, 0], duration: 1839},
            {question: {problem: "9x2=??", answer: 18}, inputNumbers: [1, 8], duration: 1368},
            {question: {problem: "3x3=?", answer: 9}, inputNumbers: [9], duration: 2215},
            {question: {problem: "8x6=??", answer: 48}, inputNumbers: [4, 2], duration: 2450},
            {question: {problem: "2x9=??", answer: 18}, inputNumbers: [1, 8], duration: 2694},
            {question: {problem: "5x6=??", answer: 30}, inputNumbers: [3, 0], duration: 1839},
            {question: {problem: "9x2=??", answer: 18}, inputNumbers: [1, 8], duration: 1368}]
    }
}
export const Complete = Template.bind({});
Complete.args = {
    levelRecord: {
        levelID: 'testB',
        problemLogs: [
            {question: {problem: "3x3=?", answer: 9}, inputNumbers: [9], duration: 2215},
            {question: {problem: "8x6=??", answer: 48}, inputNumbers: [4, 8], duration: 2450},
            {question: {problem: "2x9=??", answer: 18}, inputNumbers: [1, 8], duration: 2694},
            {question: {problem: "5x6=??", answer: 30}, inputNumbers: [3, 0], duration: 1839},
            {question: {problem: "9x2=??", answer: 18}, inputNumbers: [1, 8], duration: 1368},
            {question: {problem: "3x3=?", answer: 9}, inputNumbers: [9], duration: 2215},
            {question: {problem: "8x6=??", answer: 48}, inputNumbers: [4, 8], duration: 2450},
            {question: {problem: "2x9=??", answer: 18}, inputNumbers: [1, 8], duration: 2694},
            {question: {problem: "5x6=??", answer: 30}, inputNumbers: [3, 0], duration: 1839},
            {question: {problem: "9x2=??", answer: 18}, inputNumbers: [1, 8], duration: 1368},
            {question: {problem: "3x3=?", answer: 9}, inputNumbers: [9], duration: 2215},
            {question: {problem: "8x6=??", answer: 48}, inputNumbers: [4, 8], duration: 12452},
            {question: {problem: "2x9=??", answer: 18}, inputNumbers: [1, 8], duration: 2694},
            {question: {problem: "5x6=??", answer: 30}, inputNumbers: [3, 0], duration: 1839},
            {question: {problem: "9x2=??", answer: 18}, inputNumbers: [1, 8], duration: 13168},
            {question: {problem: "3x3=?", answer: 9}, inputNumbers: [9], duration: 2215},
            {question: {problem: "8x6=??", answer: 48}, inputNumbers: [4, 8], duration: 2450},
            {question: {problem: "2x9=??", answer: 18}, inputNumbers: [1, 8], duration: 80694},
            {question: {problem: "5x6=??", answer: 30}, inputNumbers: [3, 0], duration: 18339},
            {question: {problem: "9x2=??", answer: 18}, inputNumbers: [1, 8], duration: 1368}]
    }
}
export const Short = Template.bind({});
Short.args = {
    levelRecord: {
        levelID: 'testC',
        problemLogs: [
            {question: {problem: "3x3=?", answer: 9}, inputNumbers: [9], duration: 2215},
            {question: {problem: "8x6=??", answer: 48}, inputNumbers: [4, 8], duration: 2450},
            {question: {problem: "2x9=??", answer: 18}, inputNumbers: [1, 8], duration: 2694},
            {question: {problem: "5x6=??", answer: 30}, inputNumbers: [3, 0], duration: 1839},
            {question: {problem: "9x2=??", answer: 18}, inputNumbers: [1, 8], duration: 1368},
            ]
    }
}

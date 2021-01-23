import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {QuestionCharacter, QuestionCharacterProps} from './QuestionCharacter';

export default {
    title: 'CalcDrill/QuestionCharacter',
    component: QuestionCharacter,
    argTypes: {},
} as Meta;

const Template: Story<QuestionCharacterProps> = (args) => <QuestionCharacter {...args} />;
export const Default = Template.bind({});

import React from 'react';
import '../css/bootstrap.min.css';
import {QuestionCharacter} from './QuestionCharacter'
import {Character} from '../@types/calcDrill'

import {v1 as uuid} from 'uuid';

export interface QuestionDisplayProps {
    size?: number;

    characters?: Character[];
    style?: {};
    className?: string;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
                                                                    size = 50,
                                                                    characters = [],
                                                                    style = {},
                                                                    className = "",
                                                                }) => {

    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            {characters.map((character) => {
                return (
                    <QuestionCharacter
                        key={uuid()}
                        size={size}
                        text={character.text}
                        status={character.status}
                    />)
            })}
        </div>
    )
};

import {ProblemLog} from '../@types/calcDrill'
import React from 'react';
import {Row, Col} from "react-bootstrap";
import {QuestionDisplay} from "./QuestionDisplay";
import {getCurrentCharactersAndProblemStatus} from "./useSolveProblem";
import {i18n} from "../common/i18n";


export interface ResultListRowProps {
    problemLog: ProblemLog
}

export const ResultListRow: React.FC<ResultListRowProps> = ({problemLog}) => {
    const sec = i18n.t('sec');
    const {
        currentCharacters,
        problemStatus
    } = getCurrentCharactersAndProblemStatus(problemLog.question, problemLog.inputNumbers);

    const durationColor = (problemStatus === 'success') ? 'success' : 'warning';

    return (
        <Row className={'mx-0 justify-content-center user-select-none'}>
            <Col xs={7}
                 sm={4}
                 className={''}>
                <QuestionDisplay
                    size={35}
                    characters={currentCharacters}
                    className={"justify-content-end"}
                />
            </Col>
            <Col xs={5}
                 sm={2}
                 className={`d-flex align-items-center font-italic text-${durationColor}`}>
                <div>
                    <h4 className={'p-0 m-0'}>
                        <span className={'font-weight-bold'} children={problemLog.duration / 1000}/>
                        <span className={'ml-1'} children={sec}/>
                    </h4>
                </div>

            </Col>
        </Row>
    )
}

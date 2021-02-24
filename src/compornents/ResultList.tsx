import {ProblemLog} from '../@types/calcDrill'
import React, {useEffect, useRef, useState} from 'react';
import {ResultListRow} from './ResultListRow'
import {Button, Col, Row} from "react-bootstrap";
import {i18n} from "../common/i18n";
import {getCurrentCharactersAndProblemStatus} from "./useSolveProblem";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMugHot, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {cheerSound, openSound, resultSound} from '../common/sounds'
import Confetti from 'react-confetti'
import {useDimension} from "./useDimension";
import {saveLevelRecordAsync, loadLevelRecordAsync} from '../common/repository'

async function evaluateLevelRecord(levelRecord) {
    const problemLogs = levelRecord.problemLogs;
    const totalDuration = problemLogs.reduce((acc, problemLog,) => {
        return acc + problemLog.duration;
    }, 0);
    const successCount = problemLogs.filter((problemLog) => {
        const {problemStatus} = getCurrentCharactersAndProblemStatus(problemLog.question, problemLog.inputNumbers);
        return problemStatus === 'success'
    }).length

    const lastResult = {
        totalCount: problemLogs.length,
        successCount: successCount,
        totalDuration: totalDuration,
        timestamp: Date.now(),
    }

    const levelID = levelRecord.levelID

    const isComplete = successCount === problemLogs.length;

    const prevLevelRecord = await loadLevelRecordAsync(levelID);
    const prevBestResult = prevLevelRecord.bestResult;

    let isNewRecord = false;
    if (!prevBestResult) {
        isNewRecord = true;
    } else if (prevBestResult.successCount < successCount) {
        isNewRecord = true;
    } else if (isComplete && prevBestResult.totalDuration > totalDuration) {
        isNewRecord = true;
    }


    const newLevelRecord = {
        lastResult,
        bestResult: (isNewRecord) ? lastResult : prevLevelRecord.bestResult,
        clearCount: prevLevelRecord.clearCount + 1,
    }
    // saveLevelRecord(levelID, newLevelRecord);
    await saveLevelRecordAsync(levelID, newLevelRecord);

    return {
        totalCount: problemLogs.length,
        successCount,
        totalDuration,
        timestamp: Date.now(),
        isComplete,
        isNewRecord
    }
}

export interface ResultListProps {
    levelRecord: { problemLogs: ProblemLog[], levelID: string }
    exitLevel: () => void
}

export const ResultList: React.FC<ResultListProps> = ({levelRecord, exitLevel}) => {
    const sec = i18n.t('sec');
    const total = i18n.t('total');
    const targetRefTail = useRef<HTMLDivElement>(null);
    const [state, setState] = useState({successCount: 0, totalDuration: 0, isComplete: false, isNewRecord: false})
    const {successCount, totalDuration, isComplete, isNewRecord} = state;

    useEffect(() => {
        let unmounted = false;
        (async () => {
            const {successCount, totalDuration, isComplete, isNewRecord} = await evaluateLevelRecord(levelRecord);
            if (!unmounted) {
                setState({successCount, totalDuration, isComplete, isNewRecord});
                resultSound.play()
                if (isComplete) {
                    cheerSound.play()
                }
                if (targetRefTail && targetRefTail.current) {
                    targetRefTail.current.scrollIntoView({behavior: "smooth"})
                }
            }
        })();

        return () => {
            unmounted = true;
        };

        // eslint-disable-next-line
    }, [])


    const handleExit=()=>{
        openSound.play();
        if(exitLevel){
            exitLevel();
        }
    }

    const targetRefRoot = useRef<HTMLDivElement>(null);
    const rootDimensions = useDimension(targetRefRoot);

    return (
        <div style={{minHeight: '100vh'}} ref={targetRefRoot}>
            {isComplete && <Confetti
                confettiSource={{x: 0, y: 0, w: rootDimensions.width, h: rootDimensions.height * .6}}
                width={rootDimensions.width}
                height={rootDimensions.height}
                recycle={true}
            />}
            {levelRecord.problemLogs.map((problemLog) => {
                return (
                    <ResultListRow key={problemLog.question.problem} problemLog={problemLog}/>

                )
            })}
            <hr style={{borderTopWidth: '5px'}}/>
            <Row className={'mx-0 justify-content-center pb-4 user-select-none'}>
                <Col xs={7}
                     sm={4}
                     className={'d-flex align-items-center justify-content-end'}>
                    <h4 className={'p-0 m-0'}>
                        <span className={'font-weight-bold'}
                              children={`${total} ${successCount}/${levelRecord.problemLogs.length}`}/>
                    </h4>
                    {isComplete && !isNewRecord && <div className={'position-absolute border-danger p-2'}
                                                        style={{
                                                            borderStyle: "solid",
                                                            borderWidth: "5px",
                                                            borderRadius: "15px",
                                                            right: 0,
                                                            opacity: 0.8,
                                                            transform: "rotate(-15deg) translateX(15px)"
                                                        }}>
                      <h2 className={'text-danger d-inline-block'}>{i18n.t('complete')}</h2>
                    </div>}
                    {isNewRecord && <div className={'position-absolute border-danger p-2'}
                                         style={{
                                             borderStyle: "solid",
                                             borderWidth: "5px",
                                             borderRadius: "15px",
                                             right: 0,
                                             opacity: 0.8,
                                             transform: "rotate(-15deg)"
                                         }}>
                      <h2 className={'text-danger d-inline-block'}>{i18n.t('newRecord')}</h2>
                    </div>}
                </Col>
                <Col xs={5}
                     sm={2}
                     className={`d-flex align-items-center font-italic`}>
                    <div>
                        <h4 className={'p-0 m-0'}>
                            <span className={'font-weight-bold'} children={totalDuration / 1000}/>
                            <span className={'ml-1'} children={sec}/>
                        </h4>
                    </div>

                </Col>
            </Row>
            <Row className={'mx-0 justify-content-center pb-5'}>
                <div ref={targetRefTail}>
                    {!isComplete &&
                    <Button className={'btn-success'}
                            style={{borderRadius: "30px"}}
                            onClick={handleExit}>
                      <FontAwesomeIcon
                          className={'mr-2'}
                          size={"2x"}
                          icon={faMugHot}
                      />
                      <span className={'font-weight-bold'} style={{fontSize: "24px"}} children={i18n.t('goodJob')}/>
                    </Button>}
                    {isComplete &&
                    <Button className={'btn-success'}
                            style={{borderRadius: "30px"}}
                            onClick={handleExit}>
                      <FontAwesomeIcon
                          className={'mr-2'}
                          size={"2x"}
                          icon={faThumbsUp}
                      />
                      <span className={'font-weight-bold'} style={{fontSize: "24px"}}
                            children={i18n.t('congratulations')}/>
                    </Button>}
                </div>
            </Row>

        </div>
    )
}


/*

 */

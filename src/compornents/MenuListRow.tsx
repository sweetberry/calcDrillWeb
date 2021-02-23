import React from 'react';
import {Row, Col} from "react-bootstrap";
import {i18n} from "../common/i18n";
import {format} from 'date-fns'
import ja from 'date-fns/locale/ja'
import {LevelRecord} from '../@types/calcDrill'

export interface MenuListRowProps {
    title: string;
    description: string;
    levelRecord: LevelRecord;
}

export const MenuListRow: React.FC<MenuListRowProps> = ({title, description, levelRecord}) => {
    const sec = i18n.t('sec');
    const menuList_record = i18n.t('menuList_record');
    const menuList_lastResult = i18n.t('menuList_lastResult');
    const {lastResult, bestResult} = levelRecord;


    const getResultString = (result) => {
        const isCompleted = result.totalCount === result.successCount;
        return isCompleted ? result.totalDuration / 1000 + sec : `${result.successCount}/${result.totalCount}`
    }

    return (
        // <Container>
        <Row
            className={'mx-0 justify-content-center user-select-none'}>
            <Col xs={4} sm={5}>
                <Row xs={1} sm={2} className={'h-100'}>
                    <Col className={`d-flex align-items-center`}>
                        <div>
                            <div className={'font-weight-bold'} style={{fontSize: '1.5em'}} children={title}/>
                        </div>
                    </Col>
                    <Col>
                        <div className={`d-flex align-items-center font-italic mb-2 w-100 h-100`}>
                            <div style={{whiteSpace: 'pre-wrap'}} children={description}/>
                        </div>

                    </Col>
                </Row>
            </Col>
            <Col>
                <Row xs={1} sm={2}>
                    <Col
                        className={`d-flex align-items-center font-italic px-0`}>
                        {bestResult &&
                        <div className={''}>
                          <div>{menuList_record + ': ' + getResultString(bestResult)}</div>
                          <div className={'text-right text-muted'}>
                            <small children={format(bestResult.timestamp, 'P', {locale: ja})}/>
                          </div>
                        </div>}
                    </Col>
                    <Col
                        className={`d-flex align-items-center font-italic`}>
                        {lastResult &&
                        <div className={''}>
                          <div>{menuList_lastResult + ': ' + getResultString(lastResult)}</div>
                          <div className={'text-right text-muted'}>
                            <small children={format(lastResult.timestamp, 'P pp', {locale: ja})}/>
                          </div>
                        </div>}

                    </Col>
                </Row>
            </Col>

        </Row>
        // </Container>
    )
}

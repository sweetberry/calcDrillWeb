import React from 'react';
import '../css/bootstrap.min.css';
import '../css/dialog-style.css';
import {Modal, Button, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {i18n} from '../common/i18n';
import {pressSound, openSound} from '../common/sounds'

export interface StartModalProps {
    isShow: boolean;
    title: string;
    description: string;
    onClickStart: () => void;
    onClickCancel: () => void;
}


export const StartModal: React.FC<StartModalProps> = ({
                                                          isShow = true,
                                                          title = '',
                                                          description = '',
                                                          onClickStart,
                                                          onClickCancel
                                                      }) => {

    const handleClose = () => {
        pressSound.play();
        onClickCancel()
    }
    const handleStart = () => {
        pressSound.play();
        onClickStart()
    }

    const handleEntering = () => {
        openSound.play();
    }
    const borderRadius = 20;
    const levelStartModal_start = i18n.t('levelStartModal_start');
    const message = i18n.t('levelStartModal_messageB');

    return (
        <Modal
            size={'sm'}
            show={isShow}
            onHide={handleClose}
            onEntering={handleEntering}
            // backdrop='static'
            centered
            dialogClassName={'dialog-style'}
            keyboard={false}
            contentClassName={'bg-transparent border-0 user-select-none'}
            backdropClassName={'bg-dark'}
        >
            <Card
                className={'p-3 text-white bg-info mb-0'}
                style={{
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                }}
            >
                <p
                    className={'mt-0 mb-1 h2 font-weight-bold'}
                    children={title}
                />
                <p
                    className={'mt-0 mb-1 h2 text-center'}
                    style={{whiteSpace: 'pre-wrap'}}
                    children={description}
                />
                <p
                    className={'mt-0 mb-0 text-center font-italic text-left'}
                    children={message}
                />

            </Card>
            <div
                className={'d-flex flex-row'}
            >
                <div
                    className={'p-3 bg-dark d-flex justify-content-center align-items-center'}
                    style={{
                        borderBottomLeftRadius: borderRadius,
                    }}>
                    <FontAwesomeIcon
                        className={'text-muted'}
                        icon={faTimesCircle}
                        size={'2x'}
                        onClick={handleClose}
                    />
                </div>
                <div
                    className={'bg-primary p-2 flex-grow-1 text-center'}
                    style={{
                        borderBottomRightRadius: borderRadius,
                    }}>
                    <Button
                        className={'rounded-pill shadow'}
                        color='primary'
                        size={'lg'}
                        onClick={handleStart}
                    >
                        <FontAwesomeIcon
                            className={'mr-2'}
                            icon={faPlayCircle}
                        />
                        {levelStartModal_start}
                    </Button>
                </div>


            </div>
        </Modal>)
};

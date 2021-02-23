import React from 'react';
import '../css/bootstrap.min.css';
import '../css/dialog-style.css';
import {Modal, Button, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {i18n} from '../common/i18n';
import {pressSound, failSound} from '../common/sounds'

export interface FailModalProps {
    isShow: boolean;
    onClickNext: () => void;
}


export const FailModal: React.FC<FailModalProps> = ({
                                                        isShow = true,
                                                        onClickNext,
                                                    }) => {
    const handleClose = () => {
        pressSound.play();
        onClickNext()
    }

    const handleEntering = () => {
        failSound.play();
    }

    const borderRadius = 20;
    const successModal_next = i18n.t('failModal_next');


    // failSound2.play()

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
                className={'p-3 text-dark bg-danger mb-0 d-flex justify-content-center align-items-center'}
                style={{
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                }}
            >
                <FontAwesomeIcon
                    size={'6x'}
                    className={''}
                    icon={faTimesCircle}
                />
            </Card>
            <div
                className={'bg-primary p-2 flex-grow-1 text-center'}
                style={{
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius,
                }}>
                <Button
                    className={'rounded-pill shadow'}
                    color='primary'
                    size={'lg'}
                    onClick={handleClose}
                >
                    <FontAwesomeIcon
                        className={'mr-2'}
                        icon={faArrowRight}
                    />
                    {successModal_next}
                </Button>
            </div>
        </Modal>)
};

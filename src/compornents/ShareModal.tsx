import React from 'react';
import '../css/bootstrap.min.css';
import '../css/dialog-style.css';
import {Modal, Button, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {i18n} from '../common/i18n';
import {openSound, pressSound} from '../common/sounds'
export interface ShareModalProps {
    isShow: boolean
    onClickNext: () => void;
}


export const ShareModal: React.FC<ShareModalProps> = ({
                                                              isShow = true,
                                                              onClickNext,
                                                          }) => {
    const handleClose = () => {
        pressSound.play();
        onClickNext()
    }
    const handleEntering = () => {
        openSound.play();
    }
    const borderRadius = 20;
    const shareModal_next = i18n.t('playTogether');

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
            contentClassName={'bg-transparent border-0'}
            backdropClassName={'bg-dark'}
        >
            <Card
                className={'p-3 text-white bg-primary mb-0 d-flex justify-content-center align-items-center'}
                style={{
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                }}
            >
                <img alt={'url'} src={`${process.env.PUBLIC_URL}/QR_code.png`} />
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
                        icon={faThumbsUp}
                    />
                    {shareModal_next}
                </Button>
            </div>
        </Modal>)
};

import React from 'react';
import '../css/bootstrap.min.css';
import '../css/dialog-style.css';
import {Modal, Button, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {faRunning} from "@fortawesome/free-solid-svg-icons";
import {i18n} from '../common/i18n';
import {pressSound, openSound,hideSound} from '../common/sounds'

export interface ExitModalProps {
    isShow: boolean
    onClickExit: () => void;
    onClickCancel: () => void;
}


export const ExitModal: React.FC<ExitModalProps> = ({isShow = true, onClickExit, onClickCancel}) => {
    // const [isShow, setIsShow] = useState(true);
    const handleCancel = () => {
        pressSound.play();
        onClickCancel()
    };
    const handleExit = () => {
        hideSound.play();
        onClickExit()
    };
    const handleEntering = () => {
        openSound.play();
    }
    const borderRadius = 20;
    const exitModal_escape = i18n.t('exitModal_escape');
    const really = i18n.t('exitModal_really');
    const message = i18n.t('exitModal_messageB');
    return (
        <Modal
            size={'sm'}
            show={isShow}
            onEntering={handleEntering}
            backdrop='static'
            centered
            dialogClassName={'dialog-style'}
            keyboard={false}
            contentClassName={'bg-transparent border-0'}
            backdropClassName={'bg-dark'}
        >
            <Card
                className={'p-3 text-dark bg-light mb-0 d-flex justify-content-center align-items-center'}
                style={{
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                }}
            >
                <FontAwesomeIcon
                    size={'6x'}
                    className={''}
                    icon={faRunning}
                />
                <p
                    className={'mt-0 mb-1 h2 font-weight-bold'}
                    children={really}
                />
                <p
                    className={'mt-0 mb-0 font-italic text-left'}
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
                        onClick={handleCancel}
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
                        onClick={handleExit}
                    >

                        {exitModal_escape}
                    </Button>
                </div>
            </div>
        </Modal>)
};

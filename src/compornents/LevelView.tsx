import React, {useState} from 'react';
import '../css/bootstrap.min.css';
import {GameView} from "./GameView";
import {usePlayLevel} from './usePlayLavel'
import {ResultList} from "./ResultList";
import {Button} from "react-bootstrap";
import {faRunning} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ExitModal} from './ExitModal';

export interface LevelViewProps {
    levelID: string
    exitLevel: () => void
}

export const LevelView: React.FC<LevelViewProps> = ({levelID, exitLevel}) => {
    const [isShowExistModal, setIsShowExistModal] = useState(false);

    const {question, logging, status, levelRecord} = usePlayLevel(levelID);
    // console.log(question, status, levelRecord);

    const handleClickExitCancel = () => {
        setIsShowExistModal(false)
    }

    const handleClickExit = () => {
        setIsShowExistModal(false)
        exitLevel();
    }

    return (
        <div>
            {status === "ip" && question &&
            <div>
                {isShowExistModal &&
                <ExitModal
                    isShow={isShowExistModal}
                    onClickCancel={handleClickExitCancel}
                    onClickExit={handleClickExit}
                />}
              <div
                  className={'position-absolute text-right w-100'}
                  style={{zIndex: 2}}>
                  {/*{status}*/}
                  <Button
                    className={'rounded-pill shadow '}
                    color='primary'
                    size={'lg'}
                    onClick={() => {
                        setIsShowExistModal(true)
                    }}
                >
                  <FontAwesomeIcon
                      size={'2x'}
                      className={''}
                      icon={faRunning}
                  />
                </Button>
              </div>
              <GameView
                  question={question}
                  logging={logging}
              />

            </div>
            }
            {status === "result" &&
            <ResultList levelRecord={levelRecord} exitLevel={exitLevel}/>
            }

        </div>
    )

}

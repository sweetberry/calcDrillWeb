import React, {useRef, useState, useEffect} from 'react';
import '../css/bootstrap.min.css';
import {Question, ProblemLog} from '../@types/calcDrill'
import {QuestionDisplay} from './QuestionDisplay'
import {useSolveProblem} from './useSolveProblem'
import {NumberPad} from './NumberPad'
import {useDimension} from './useDimension'
import {FailModal} from './FailModal';
import {SuccessModal} from './SuccessModal';

export interface GameViewProps {
    question: Question,
    logging: (problemLog: ProblemLog) => void
}

export const GameView: React.FC<GameViewProps> = ({
                                                      question,
                                                      logging = (problemLog) => {
                                                          console.log(problemLog)
                                                      }
                                                  }) => {

    const [isFailModalShow, setIsFailModalShow] = useState(false);
    const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);
    const [zoom, setZoom] = useState(1);

    const {currentCharacters, problemStatus, onPress, problemLog} = useSolveProblem(question);

    const targetRefRoot = useRef<HTMLDivElement>(null);
    const rootDimensions = useDimension(targetRefRoot);


    const handleNext = () => {
        logging(problemLog);
    }

    useEffect(() => {
        setIsFailModalShow(false);
        setIsSuccessModalShow(false);

    }, [question]);

    useEffect(() => {
        if (problemStatus === 'fail') {
            setIsFailModalShow(true)
        }
        if (problemStatus === 'success') {
            setIsSuccessModalShow(true)
        }
    }, [problemStatus]);

    useEffect(() => {
        const heightRatio = (rootDimensions.height / 3 * 2) / 400;
        const widthRatio = rootDimensions.width / 300;
        setZoom(Math.min(heightRatio, widthRatio))
    }, [rootDimensions])

    return (
        <div
            className={'vh-100 vw-100 position-relative d-flex flex-column align-items-center'}
            ref={targetRefRoot}>

            {/*{problemStatus}*/}
            {/*<span>{rootDimensions.width}</span>*/}
            {/*<span>{rootDimensions.height}</span>*/}

            <FailModal
                isShow={isFailModalShow}
                onClickNext={handleNext}
            />

            <SuccessModal
                isShow={isSuccessModalShow}
                onClickNext={handleNext}
            />

            <div
                className={'flex-grow-1 d-flex'}
            >
                <QuestionDisplay
                    size={50}
                    characters={currentCharacters}
                    className={"py-3 align-self-center w-100"}
                />
            </div>
            <NumberPad
                style={{zoom: zoom}}
                onPress={onPress}/>
        </div>
    )
};

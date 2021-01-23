import {Character, CharacterStatus, Question, ProblemStatus} from '../@types/calcDrill'
import {useState} from "react";

export function getCurrentCharactersAndProblemStatus(question: Question, inputNumbers: number[]) {
    const currentInputs = [...inputNumbers];
    const answerCharacters = Array.from(String(question.answer)).map((string) => {
        return parseInt(string)
    });
    let newProblemStatus: ProblemStatus = null;

    const currentCharacters: Character[] = Array.from(question.problem).map((characterString) => {
        let text;
        let status: CharacterStatus;
        if (characterString !== "?") {
            text = characterString;
            status = null;
        } else if (!answerCharacters.length) {
            text = '?';
            status = 'fail';
            newProblemStatus = 'fail';
        } else {
            const currentAnswerCharacter = answerCharacters.shift();
            const currentInputNumber = currentInputs.shift();
            if (currentInputNumber === undefined) {
                text = ' ';
                status = 'ready'
            } else if (currentAnswerCharacter === currentInputNumber) {
                text = String(currentInputNumber);
                status = 'success'
            } else {
                text = String(currentInputNumber);
                status = 'fail'
                newProblemStatus = 'fail';
            }
        }

        return {text, status}

    });

    if (newProblemStatus === null) {
        const isInputSameCountAsAnswer = inputNumbers.length === Array.from(String(question.answer)).length;
        if (isInputSameCountAsAnswer) {
            newProblemStatus = 'success'
        } else {
            newProblemStatus = 'ip'
        }
    } else {
        newProblemStatus = 'fail'
    }
    return {currentCharacters, problemStatus: newProblemStatus,}
}

export function useSolveProblem(question: Question) {
    const [prevQuestion, setPrevQuestion] = useState(question);
    const [inputNumbers, setInputNumbers] = useState<number[]>([]);
    const [startTime, setStartTime] = useState(Date.now());

    if (prevQuestion !== question) {
        setInputNumbers([]);
        setPrevQuestion(question);
        setStartTime(Date.now());
    }


    const onPress = (num: string) => {
        const newNumbers = [...inputNumbers, parseInt(num)]
        setInputNumbers(newNumbers)
    }

    const {currentCharacters, problemStatus} = getCurrentCharactersAndProblemStatus(question, inputNumbers);

    return {
        onPress,
        currentCharacters,
        problemStatus,
        problemLog: {question, inputNumbers, duration: Date.now() - startTime}
    }
}

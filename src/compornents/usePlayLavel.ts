import {levels} from '../levels/allLevels'
import {useEffect, useState} from "react";
import {ProblemLog, Question} from '../@types/calcDrill'
import {getCurrentCharactersAndProblemStatus} from "./useSolveProblem";


function shuffleArray(array) {
    for (let i = array.length; 1 < i; i--) {
        let k = Math.floor(Math.random() * i);
        [array[k], array[i - 1]] = [array[i - 1], array[k]];
    }
    return array
}

function createQuestions(levelID: string) {
    const _questions = levels[levelID].questions;
    const _questionCount = levels[levelID].questionCount;
    const rankedQuestions = _questions.map((question) => {
        return {question, rank: Number(localStorage[question.problem] || 0)}
    })
    const sortedRankedQuestions = rankedQuestions.sort((a, b) => {
        return a.rank - b.rank
    });
    const sortedQuestions = sortedRankedQuestions.map((row) => {
        return row.question
    });
    
    return [...shuffleArray(sortedQuestions.splice(0, _questionCount))];
}

function writeGlobalReport(problemLog) {
    const {problemStatus} = getCurrentCharactersAndProblemStatus(problemLog.question, problemLog.inputNumbers);
    if (problemStatus === 'success') {
        const prevCorrectCount = localStorage[problemLog.question.problem] || 0;
        localStorage[problemLog.question.problem] = Number(prevCorrectCount) + 1;
    }
}

export function usePlayLevel(levelID: string) {
    const [questions, setQuestions] = useState<Question[]>();
    const [status, setStatus] = useState('ip');

    const [currentQuestion, setCurrentQuestion] = useState<Question>();
    const [problemLogs, setProblemLogs] = useState<ProblemLog[]>([]);

    useEffect(() => {
        const _questions = createQuestions(levelID);
        const newQuestion = _questions.shift();
        setCurrentQuestion(newQuestion);
        setQuestions(_questions)
        setProblemLogs([])
        // eslint-disable-next-line
    }, [])

    const logging = (problemLog) => {
        writeGlobalReport(problemLog);

        setProblemLogs([...problemLogs, problemLog])
        if (questions) {
            const newQuestion = questions.shift();
            if (!newQuestion) {
                setStatus('result')
            }
            setCurrentQuestion(newQuestion);
        }

    }

    return {
        question: currentQuestion,
        logging,
        status,
        levelRecord: {problemLogs, levelID}
    }
}

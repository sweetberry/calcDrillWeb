import {Question} from '../@types/calcDrill'

const questions: Question[] = [];
const leftArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rightArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const range = (start, end) => [...Array((end - start) + 1)].map((_, i) => start + i);
const replacePlaceholder = (number: number) => {
    return String(number).replace(/[0-9]/g, '?');
}

leftArray.forEach((leftTerm) => {
    rightArray.forEach((rightTerm) => {
        const rightHandSide = leftTerm * rightTerm;
        questions.push({
            "problem": `${leftTerm}x${rightTerm}=${replacePlaceholder(rightHandSide)}`,
            "answer": rightHandSide
        })
        // questions.push({
        //   "problem": `${replacePlaceholder(leftTerm)}x${rightTerm}=${rightHandSide}`,
        //   "answer": leftTerm
        // })
        // questions.push({
        //   "problem": `${leftTerm}x${replacePlaceholder(rightTerm)}=${rightHandSide}`,
        //   "answer": rightTerm
        // })
    })
})

const level = {
    "title": "Level19",
    "description": "九九 20問",
    "questionCount": 20,
    questions
}

export default level

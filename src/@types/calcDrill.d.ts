export type CharacterStatus = 'ready' | 'fail' | 'success' | null;
export type Character = { text: string, status: CharacterStatus };
export type Question = { problem: string, answer: number };
export type ProblemStatus = 'ready' | 'ip' | 'fail' | 'success' | null;
export type ProblemLog = { question: Question, inputNumbers: number[], duration: number };
export type LevelRecord = {
    lastResult?: {
        totalCount: number,
        successCount: number,
        totalDuration: number,
        timestamp: number,
    },
    bestResult?:{
        totalCount: number,
        successCount: number,
        totalDuration: number,
        timestamp: number,
    },
    clearCount:number,

}

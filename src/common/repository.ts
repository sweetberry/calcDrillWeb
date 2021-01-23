import {LevelRecord} from '../@types/calcDrill'

export const saveLevelRecordAsync = (levelID: string, newLevelRecord: LevelRecord): Promise<void> => {
    return new Promise((resolve) => {
        localStorage[levelID] = JSON.stringify(newLevelRecord);
        resolve(undefined);
    });
}

export const loadLevelRecordAsync = (levelID: string): Promise<LevelRecord> => {
    return new Promise((resolve) => {
        const prevlevelRecord = (localStorage[levelID]) ? JSON.parse(localStorage[levelID]) : null;
        resolve({
            lastResult: (prevlevelRecord) ? prevlevelRecord.lastResult : null,
            bestResult: (prevlevelRecord) ? prevlevelRecord.bestResult : null,
            clearCount: (prevlevelRecord) ? prevlevelRecord.clearCount : 0,
        })
    });
}

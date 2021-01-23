import React, {useState} from 'react';

import '../css/hidden-scrollbar.css'
import {MenuList} from './MenuList'
import {LevelView} from './LevelView'

export const App: React.FC = () => {
    const [playingLevelID, setPlayingLevelID] = useState<string | null>(null);

    const handleExitLevel = () => {
        setPlayingLevelID(null);
    }
    const handleStartLevel = (levelID) => {
        setPlayingLevelID(levelID);
    }


    return (
        <div className={'h-100 w-100'}>
            {!playingLevelID && <MenuList
                startLevel={handleStartLevel}
            />}
            {playingLevelID &&
            <LevelView
                exitLevel={handleExitLevel}
                levelID={playingLevelID}
            />}
        </div>
    )
}

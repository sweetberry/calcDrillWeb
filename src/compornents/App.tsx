import React, {useState} from 'react';

import '../css/hidden-scrollbar.css'
import {MenuList} from './MenuList'
import {LevelView} from './LevelView'
import {faQrcode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ShareModal} from "./ShareModal";

export const App: React.FC = () => {
    const [playingLevelID, setPlayingLevelID] = useState<string | null>(null);

    const [isShowShareModal, setIsShowShareModal] = useState(false);

    const handleExitLevel = () => {
        setPlayingLevelID(null);
    }
    const handleStartLevel = (levelID) => {
        setPlayingLevelID(levelID);
    }

    const handleShowShareModal=()=>{
        setIsShowShareModal(true);
    }

    const handleHideShareModal=()=>{
        setIsShowShareModal(false);
    }

    return (
        <div className={'h-100 w-100'}>
            <FontAwesomeIcon
                className={'mr-3 mt-2 float-right text-muted'}
                size={"2x"}
                icon={faQrcode}
                onClick={handleShowShareModal}
            />
            <h2 className={'text-center'}>Calc Drill</h2>
            <ShareModal
                isShow={isShowShareModal}
                onClickNext={handleHideShareModal}
            />
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

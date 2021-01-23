import React, {useEffect, useRef, useState} from 'react';
import {Container, ListGroup} from "react-bootstrap";
import {levels} from '../levels/allLevels'
import {loadLevelRecordAsync} from "../common/repository";
import {MenuListRow} from './MenuListRow'
import {useDimension} from "./useDimension";
import {StartModal} from './StartModal';

function getMenuItems() {
    return Promise.all(Object.entries(levels).map(async ([key, value]) => {
        const levelID = key;
        const levelRecord = await loadLevelRecordAsync(levelID);
        return ({
            levelID,
            title: value.title,
            description: value.description,
            levelRecord,
        })
    }))
}

export interface MenuListProps {
    startLevel: (levelID: string) => void;

}

export const MenuList: React.FC<MenuListProps> = ({startLevel}) => {
    const [menuItems, setMenuItems] = useState<any>([])

    const targetRefRoot = useRef<HTMLDivElement>(null);
    const rootDimensions = useDimension(targetRefRoot);

    const [isSm, setIsSm] = useState(false);

    const tempClassName = isSm ? 'ml-0 px-0' : 'ml-0';

    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

    const handleRowClick = (levelID) => {
        setSelectedLevel(levelID);
    }
    const handleCancelClick = () => {
        setSelectedLevel(null);
    }

    const startModalTitle = selectedLevel ? levels[selectedLevel].title : 'temp';

    const startModalDescription = selectedLevel ? levels[selectedLevel].description : 'temp';

    useEffect(() => {
        setIsSm(rootDimensions.width < 573);
    }, [rootDimensions])

    useEffect(() => {
        let unmounted = false;
        (async () => {
            const _menuItems = await getMenuItems();
            if (!unmounted) {
                setMenuItems(_menuItems);
            }
        })();

        return () => {
            unmounted = true;
        };
    }, [])

    return (
        <Container ref={targetRefRoot}>
            <StartModal
                isShow={!!selectedLevel}
                title={startModalTitle}
                description={startModalDescription}
                onClickStart={() => {
                    if (startLevel && selectedLevel) {
                        startLevel(selectedLevel)
                    }
                }}
                onClickCancel={handleCancelClick}

            />
            <ListGroup>
                {menuItems.map((item) => {
                    return (<ListGroup.Item action
                                            className={tempClassName}
                                            key={item.levelID}
                                            onClick={() => {
                                                handleRowClick(item.levelID)
                                            }}

                    >
                        <MenuListRow
                            key={item.levelID}
                            title={item.title}
                            description={item.description}
                            levelRecord={item.levelRecord}
                        /></ListGroup.Item>)
                })}
            </ListGroup>
        </Container>
    )
}

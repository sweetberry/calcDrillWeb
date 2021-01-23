import React from 'react';
import '../css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import {NumberPadButton} from './NumberPadButton'
export interface NumberPadProps {
    onPress?: (number: string) => void;
    style?: any
}


const colorDict = {
    bg: 'rgba(105,105,105,0.8)',
    0: '#0074bf',
    1: '#f2cf01',
    2: '#56a764',
    3: '#d06d8c',
    4: '#9460a0',
    5: '#a0c238',
    6: '#c93a40',
    7: '#cc528b',
    8: '#65ace4',
    9: '#de9610',
}


export const NumberPad: React.FC<NumberPadProps> = ({
                                                        onPress,
                                                        style = {},
                                                    }) => {
    return (
        <div
            style={{
                ...style,
                backgroundColor: colorDict.bg,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                width: '300px',
                padding: 0,
                margin: 0,
                paddingTop: '10px',
            }}>
            <Row style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: 0,
            }}>
                <NumberPadButton
                    number={"7"}
                    color={colorDict["7"]}
                    onPress={onPress}
                />
                <NumberPadButton
                    number={"8"}
                    color={colorDict["8"]}
                    onPress={onPress}
                />
                <NumberPadButton
                    number={'9'}
                    color={colorDict["9"]}
                    onPress={onPress}

                />
            </Row>
            <Row style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: 0,
            }}>
                <NumberPadButton
                    number={"4"}
                    color={colorDict["4"]}
                    onPress={onPress}

                />
                <NumberPadButton
                    number={"5"}
                    color={colorDict["5"]}
                    onPress={onPress}

                />
                <NumberPadButton
                    number={'6'}
                    color={colorDict["6"]}
                    onPress={onPress}

                />
            </Row>
            <Row style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: 0,
            }}>
                <NumberPadButton
                    number={"1"}
                    color={colorDict["1"]}
                    onPress={onPress}

                />
                <NumberPadButton
                    number={"2"}
                    color={colorDict["2"]}
                    onPress={onPress}

                />
                <NumberPadButton
                    number={'3'}
                    color={colorDict["3"]}
                    onPress={onPress}

                />
            </Row>
            <Row style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: 0,
            }}>
                <NumberPadButton
                    number={"0"}
                    color={colorDict["0"]}
                    onPress={onPress}
                />
            </Row>
        </div>
    )
};

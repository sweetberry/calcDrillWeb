import React from 'react';
import '../css/bootstrap.min.css';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface QuestionCharacterProps {
    /*
    文字サイズ(px)
     */
    size?: number;
    /*
    ステータス
     */
    status: 'ready' | 'fail' | 'success' | null;
    /*
    表示テキスト
     */
    text?: string;

}

export const QuestionCharacter: React.FC<QuestionCharacterProps> = ({
                                                                        size = 50,
                                                                        status,
                                                                        text = '0',
                                                                    }) => {
    const colorDict = {'ready': 'whiteSmoke', 'fail': 'red', 'success': 'green'};
    const tempBorderWidth = size * 0.1;
    const borderColor = (status) ? colorDict[status] : 'whiteSmoke';
    const borderWidth = (status) ? tempBorderWidth : 0;
    const isFail = status === 'fail';
    if (text === "*") {
        text = 'x'
    }
    if (text === "/") {
        text = '÷'
    }

    return (
        <div
            style={{
                width: `${size * .7}px`,
                height: `${size}px`,
                borderRadius: `${size * .25}px`,
                position: 'relative',
                marginLeft: -tempBorderWidth,
                display: 'inline-block',
                color: 'whiteSmoke',
            }}
        >
            {isFail && <div
                className={'position-absolute w-100 h-100 d-flex justify-content-center align-items-center'}
                style={{opacity:0.5}}
            >
              <FontAwesomeIcon
                  color={'red'}
                  icon={faTimes}
                  size={'3x'}
              />
            </div>}

            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: `${size * .25}px`,
                border: `solid ${borderWidth}px ${borderColor}`,
                borderColor: borderColor,
                opacity: .5,
            }}/>
            <div style={{
                height: `${size}px`,
            }}>
                <div
                    style={{
                        fontFamily: 'helvetica',//Platform.select({ios: 'System', android: 'helvetica'}),
                        fontWeight: 'bold',
                        textAlign: 'center',
                        lineHeight: `${size * 1.04}px`, //'normal',
                        fontSize: `${size * .8}px`,
                        // color: textColor,
                    }}
                >
                    {text}
                </div>
            </div>
        </div>
    )
};

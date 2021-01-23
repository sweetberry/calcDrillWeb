import React, {useState} from 'react';
import '../css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
// @ts-ignore
import {pressSound} from '../common/sounds'

export interface NumberPadButtonProps {
    /**
     * ボタン番号
     */
    number?: string;
    /**
     * 背景色
     */
    color?: string;
    /**
     * ボタン半径
     */
    radius?: number;
    /**
     * Optional click handler
     */
    onPress?: (number: string) => void;
}

export const NumberPadButton: React.FC<NumberPadButtonProps> = ({
                                                                    number = "0",
                                                                    color = "blue",
                                                                    onPress,
                                                                    radius = 80,
                                                                    ...props
                                                                }) => {
    const [isActive, setIsActive] = useState(false);

    const _onPress = () => {
        pressSound.play()

        if (onPress) {
            onPress(number);
        }
    };
    const _backgroundColor = (isActive) ? 'whitesmoke' : color;
    const _color = (isActive) ? color : 'whitesmoke';


    return (
        <div className={''}
             style={{
                 marginBottom: `18px`,
                 width: `${radius}px`,
                 height: `${radius}px`,
                 padding: 0,
                 display: 'inline-block',
                 position: "relative"
             }}
        >
            <div style={{
                background: _color,
                borderTop: '2px solid #ddd',
                borderRadius: '50%',
                boxShadow: 'inset 0 8px 48px #ddd',
                content: '',
                display: 'block',
                position: 'absolute',
                left: `-${radius / 8}px`,
                right: `-${radius / 8}px`,
                top: `-${radius / 8}px`,
                bottom: `-${radius / 8}px`,
            }}>

            </div>
            <Button
                style={{
                    backgroundColor: _backgroundColor,
                    borderRadius: `${radius / 2}px`,
                    width: `${radius}px`,
                    height: `${radius}px`,
                    color: _color,
                    fontSize:  `${radius / 2}px`,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: `${radius / 2}px`,
                    borderWidth: 0,
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))',
                    boxShadow: '0 5px 5px rgba(0, 0, 0, .1), 0 4px 6px rgba(0, 0, 0, .2)',
                    position: 'absolute',
                }}
                onMouseDown={() => {
                    setIsActive(true);
                    _onPress()
                }}
                onMouseUp={() => {
                    setIsActive(false)
                }}
                onMouseLeave={()=>{
                    setIsActive(false)
                }}
                {...props}>
                <span style={{
                    textShadow: isActive ? 'rgb(213, 213, 213) 1px 2px 1px' : '-1px -1px 1px #fff, 1px 1px 1px #000',
                }}>
                                    {number}

                </span>
            </Button>

        </div>
    )
};

import {Howl} from 'howler';

// @ts-ignore
import pressSoundSrc from '../assets/bt3.mp3'
// @ts-ignore
import failSoundSrc from '../assets/bubuu.mp3'
// @ts-ignore
import successSoundSrc from '../assets/hayaosi.mp3'
// @ts-ignore
import hideSoundSrc from '../assets/win1.mp3'
// @ts-ignore
import openSoundSrc from '../assets/win2.mp3'
// @ts-ignore
import resultSoundSrc from '../assets/sel5.mp3'
// @ts-ignore
import cheerSoundSrc from '../assets/stadiumcheer1.mp3'


export const pressSound = new Howl({
    src: [
        pressSoundSrc
    ]
}).volume(0.2);

export const failSound = new Howl({
    src: [
        failSoundSrc
    ]
});

export const successSound = new Howl({
    src: [
        successSoundSrc
    ]
});

export const hideSound = new Howl({
    src: [
        hideSoundSrc
    ]
});

export const openSound = new Howl({
    src: [
        openSoundSrc
    ]
});

export const resultSound = new Howl({
    src: [
        resultSoundSrc
    ]
});

export const cheerSound = new Howl({
    src: [
        cheerSoundSrc
    ]
});

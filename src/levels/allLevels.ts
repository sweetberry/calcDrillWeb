import level_9x9_lv01 from './level_9x9_lv01'
import level_9x9_lv01_hole from './level_9x9_lv01_hole'
import level_9x9_lv02 from './level_9x9_lv02'
import level_9x9_lv02_hole from './level_9x9_lv02_hole'
import level_9x9_lv03 from './level_9x9_lv03'
import level_9x9_lv03_hole from './level_9x9_lv03_hole'
import level_9x9_lv04 from './level_9x9_lv04'
import level_9x9_lv04_hole from './level_9x9_lv04_hole'
import level_9x9_lv05 from './level_9x9_lv05'
import level_9x9_lv05_hole from './level_9x9_lv05_hole'
import level_9x9_lv06 from './level_9x9_lv06'
import level_9x9_lv06_hole from './level_9x9_lv06_hole'
import level_9x9_lv07 from './level_9x9_lv07'
import level_9x9_lv07_hole from './level_9x9_lv07_hole'
import level_9x9_lv08 from './level_9x9_lv08'
import level_9x9_lv08_hole from './level_9x9_lv08_hole'
import level_9x9_lv09 from './level_9x9_lv09'
import level_9x9_lv09_hole from './level_9x9_lv09_hole'
import level_9x9_lv10 from './level_9x9_lv10'
import level_9x9_lv10_hole from './level_9x9_lv10_hole'


const levels = {
    level_9x9_lv01,
    level_9x9_lv01_hole,
    level_9x9_lv02,
    level_9x9_lv02_hole,
    level_9x9_lv03,
    level_9x9_lv03_hole,
    level_9x9_lv04,
    level_9x9_lv04_hole,
    level_9x9_lv05,
    level_9x9_lv05_hole,
    level_9x9_lv06,
    level_9x9_lv06_hole,
    level_9x9_lv07,
    level_9x9_lv07_hole,
    level_9x9_lv08,
    level_9x9_lv08_hole,
    level_9x9_lv09,
    level_9x9_lv09_hole,
    level_9x9_lv10,
    level_9x9_lv10_hole,
}

for (const [key, value] of Object.entries(levels)) {
    if (!value.title) {
    throw new Error(`title is not find in Level:${key}`)
    }
    if (!value.questionCount) {
        throw new Error(`questionCount is not find in Level:${key}`)
    }
}

export {levels}

import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'

import { useTip } from './tips/TipDataProvider.js'
import { TipList } from './tips/TipList.js'

// fish automation section
const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()

// tip automation section

const allTheTips = useTip()

for (const tip of allTheTips) {
    console.log(tip)
}

TipList()
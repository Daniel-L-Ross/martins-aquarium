// fish automation section
import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()

// tip automation section
import { useTip } from './tips/TipDataProvider.js'

const allTheTips = useTip()

for (const tip of allTheTips) {
    console.log(tip)
}

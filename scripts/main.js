import { useFish } from './FishDataProvider.js'

const allTheFish = useFish()

const test () => {
    for (const fish of allTheFish) {
    console.log(fish)
}
}
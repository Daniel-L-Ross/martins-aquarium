import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'

import { useTip } from './tips/TipDataProvider.js'
import { TipList } from './tips/TipList.js'

import { useLocation } from './locations/LocationDataProvider.js'
import { LocationList } from './locations/LocationList.js'

import { useQuote } from './quotes/QuoteDataProvider.js'

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

// location automation section

const allLocations = useLocation()

for (const locationObj of allLocations) {
    console.log(locationObj)
}

LocationList()

// quote automation section

const allQuotes = useQuote()

for (const quoteObj of allQuotes) {
    console.log(quoteObj)
}
const fishCollection = [
    {
        image: 'clownfish.jpg',
        name: 'Bart',
        species: 'Clownfish',
        location: 'Springfield',
        length: 5,
        food: 'crustaceans',
    },
    {
        image: 'clownfish.jpg',
        name: 'Homer',
        species: 'Clownfish',
        location: 'Springfield',
        length: 15,
        food: 'Duff Beer',
    },
    {
        image: 'clownfish.jpg',
        name: 'Marge',
        species: 'Clownfish',
        location: 'Springfield',
        length: 4,
        food: 'crustaceans',
    },
    {
        image: 'clownfish.jpg',
        name: 'Lisa',
        species: 'Clownfish',
        location: 'Springfield',
        length: 3,
        food: 'crustaceans',
    },
    {
        image: 'clownfish.jpg',
        name: 'Maggie',
        species: 'Clownfish',
        location: 'Springfield',
        length: 1,
        food: 'crustaceans',
    },
    {
        image: 'clownfish.jpg',
        name: 'Santa\'s Little Helper',
        species: 'Dogfish',
        location: 'Florida',
        length: 6,
        food: 'crustaceans',
    },
    {
        image: 'clownfish.jpg',
        name: 'Flanders',
        species: 'Neighborfish',
        location: 'Springfield',
        length: 12,
        food: 'crustaceans',
    },
    {
        image: 'clownfish.jpg',
        name: 'Krusty',
        species: 'Dogfish',
        location: 'Springfield',
        length: 7,
        food: 'crustaceans',
    },
]

// export const useFish = () => {
//     return fishCollection.slice()
// }

export const MostHolyFish = () => {
    let holyFish = [];
    for (const fishObj of fishCollection) {
        if (fishObj.length % 3 === 0) {
            holyFish.push(fishObj)
        }
    }
    return holyFish
}

export const SoldierFish = () => {
    let fightFish = [];
    for (const fishObj of fishCollection) {
        if (fishObj.length % 5 === 0 && fishObj.length % 3 !== 0) {
            fightFish.push(fishObj)
        }
    }
    return fightFish
}

export const UnHolyFish = () => {
    let otherFish = [];
    for (const fishObj of fishCollection) {
        if (fishObj.length % 3 !== 0 && fishObj.length % 5 !== 0) {
            otherFish.push(fishObj)
        }
    }
    return otherFish
}
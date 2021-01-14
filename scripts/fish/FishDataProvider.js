const fishCollection = [
    {
        image: 'clownfish.jpg',
        name: 'Bart',
        species: 'Clownfish',
        location: 'Great Barrier Reef',
        length: 5,
        food: 'crustaceans',
    },
    {
        image: 'clownfish.jpg',
        name: 'Homer',
        species: 'Clownfish',
        location: 'Great Barrier Reef',
        length: 15,
        food: 'Duff Beer',
    },
    {
        image: 'clownfish.jpg',
        name: 'Marge',
        species: 'Clownfish',
        location: 'Great Barrier Reef',
        length: 4,
        food: 'crustaceans',
    },
    {
        image: 'clownfish.jpg',
        name: 'Lisa',
        species: 'Clownfish',
        location: 'Great Barrier Reef',
        length: '3 inch',
        food: 'crustaceans',
    },
    {
        image: 'clownfish.jpg',
        name: 'Maggie',
        species: 'Clownfish',
        location: 'Great Barrier Reef',
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
]

export const useFish = () => {
    return fishCollection.slice()
}


const fishCollection = [
    {
        image: 'clownfish.jpg',
        name: 'Bart',
        species: 'Clownfish',
        location: 'Great Barrier Reef',
        length: '3 inches',
        food: 'crustaceans',
    },
    {
        image: 'clownfish.jpg',
        name: 'Homer',
        species: 'Clownfish',
        location: 'Great Barrier Reef',
        length: '5 inches',
        food: 'Duff Beer',
    },
    {
        image: 'clownfish.jpg',
        name: 'Marge',
        species: 'Clownfish',
        location: 'Great Barrier Reef',
        length: '4 inches',
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
        length: '1 inch',
        food: 'crustaceans',
    },
    {
        image: 'clownfish.jpg',
        name: 'Santa\'s Little Helper',
        species: 'Dogfish',
        location: 'Florida',
        length: '4 inches',
        food: 'crustaceans',
    },
]

export const useFish = () => {
    return fishCollection.slice()
}


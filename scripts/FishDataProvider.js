const fishCollection = [
    {
        name: Bart,
        species: Clownfish,
        location: Great Barrier Reef,
        length: "4 inches",
        food: crustaceans,
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

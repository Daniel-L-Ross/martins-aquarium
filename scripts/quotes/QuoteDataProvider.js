const quoteCollection = [
    {
        author: "Nemo",
        text: "Don't touch the but.",
        location: "Pacific Ocean"
    },
    {
        author: "Bruce",
        text: "Fish are friends, not food.",
        location: "Pacific Ocean"
    },
    {
        author: "Sebastian",
        text: "Life is better under the sea.",
        location: "Pacific Ocean"
    },
    {
        author: "Anonymous",
        text: "Fish is the chicken of the sea.",
        location: "America (probably)"
    },
    {
        author: "Chief Brody",
        text: "You're gonna need a bigger boat.",
        location: "Amity Island"
    },
    
]

export const useQuote = () => {
    return quoteCollection.slice()
}
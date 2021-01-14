const quoteCollection = [
    {
        author: "Nemo",
        text: "Don't touch the but.",
    },
    {
        author: "Bruce",
        text: "Fish are friends, not food."
    },
    {
        author: "Sebastian",
        text: "Life is better under the sea.",
    },
    {
        author: "Anonymous",
        text: "Fish is the chicken of the sea.",
    },
    {
        author: "Chief Brody",
        text: "You're gonna need a bigger boat.",
    },
    
]

export const useQuote = () => {
    return quoteCollection.slice()
}
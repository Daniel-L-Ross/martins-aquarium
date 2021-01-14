import { useQuote } from '/scripts/quotes/QuoteDataProvider.js'
import { Quote } from '/scripts/quotes/Quotes.js'

export const QuoteList = () => {
    const contentElement = document.querySelector('.containerLeft')
    const quotes = useQuote()

    let quoteHTMLRepresentations = ""
    for (const quoteObj of quotes) {
        quoteHTMLRepresentations += Quote(quoteObj)
    }

    contentElement.innerHTML +=`
        <article class="containerLeft__QuoteList contentArticle">
            ${quoteHTMLRepresentations}
        </article>
    `
}
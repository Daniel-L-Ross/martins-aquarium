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
        <h2 class="content__title">Martin's Favorite Quotes</h2>
        <article class="containerLeft__QuoteList contentArticle">
            ${quoteHTMLRepresentations}
        </article>
    `
}
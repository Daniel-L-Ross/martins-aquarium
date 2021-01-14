export const Quote = (quote) => {
    return `
    <div class ="quoteCard">
        <div class="quoteCard__content">
            <div class="quoteCard__content-text">${quote.text}</div>
            <div class="quoteCard__content-author">${quote.author}</div>
            <div class="quoteCard__content-location">${quote.location}</div>
        </div>
    </div>
    `
}
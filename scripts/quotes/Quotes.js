export const Quote = (quote) => {
    return `
    <div class ="quoteCard">
        <div class="quoteCard__content">
            <div class="quoteCard__content-text">"${quote.text}"</div>
            <div class="quoteCard__content-author">By: ${quote.author}</div>
            <div class="quoteCard__content-location">Location: ${quote.location}</div>
        </div>
    </div>
    `
}
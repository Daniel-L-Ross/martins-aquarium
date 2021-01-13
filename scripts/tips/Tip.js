export const Tip = (tip) => {
    return `
        <div class="tip__card">
            <div class="tip__card-subject>${tip.subject}</div>
            <div class="tip__card-text>${tip.text}</div>
        </div>
    `
}
import { useTip } from '/scripts/tips/TipDataProvider.js'
import { Tip } from '/scripts/tips/Tip.js'
// This component takes an object and renders it as html

export const TipList = () => {
    const contentElement = document.querySelector('.containerRight')
    const tips = useTip()

    let tipHTMLRepresentations = ""
    for (const tipObj of tips) {
        tipHTMLRepresentations += Tip(tipObj)
    }
    //add to the existing HTML in the content element
    contentElement.innerHTML +=`
        <div class="tipList">
            ${tipHTMLRepresentations}
        </div>
    `
}
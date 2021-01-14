import { useTip } from '/scripts/tips/TipDataProvider.js'
import { Tip } from '/scripts/tips/Tip.js'
// This component takes an object and renders it as html

export const TipList = () => {
    const contentElement = document.querySelector('.tipContainer')
    const tips = useTip()

    let tipHTMLRepresentations = ""
    for (const tipObj of tips) {
        tipHTMLRepresentations += Tip(tipObj)
    }
    //add to the existing HTML in the content element
    contentElement.innerHTML +=`
        <h2 class="content__title">Martin's Care Tips</h2>
        <div class="containerRight">
            <div class="tipList">
                ${tipHTMLRepresentations}
            </div>
        </div>
    `
}
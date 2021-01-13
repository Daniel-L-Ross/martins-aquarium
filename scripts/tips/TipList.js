import { useTip } from '/scripts/tips/TipDataProvider.js'
// This component takes an object and renders it as html

export const TipList = () => {
    const contentElement = document.querySelector('.containerRight')
    const tips = useTip()

    //add to the existing HTML in the content element
    contentElement.innerHTML +=`
        <ul class="tipList">
            Tips go here.
        </ul>
    `
}
import { useFish } from '/scripts/fish/FishDataProvider.js'
import { Fish } from '/scripts/fish/Fish.js'

// for of loop to populate the dom with the fish
export const FishList = () => {
    const contentElement = document.querySelector('.containerLeft')
    const fishes = useFish()
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish);
    }
    contentElement.innerHTML += `
        <article class="containerLeft__fishList contentArticle">
            ${fishHTMLRepresentations}
        </article>
    `
}

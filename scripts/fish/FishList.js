import { MostHolyFish, SoldierFish, UnHolyFish } from '/scripts/fish/FishDataProvider.js'
import { Fish } from '/scripts/fish/Fish.js'

// new funcion to automate repetitve code
const buildFishHTML = (array, heading) => {
    let fishHTML = `<h3 class="fish__title">${heading}</h3><div class="contentArticle">`;
    for (const fish of array) {
        fishHTML += Fish(fish)
    }
    fishHTML +=`</div>`;
    return fishHTML
}

// for of loop to populate the dom with the fish
export const FishList = () => {
    const contentElement = document.querySelector('.containerLeft')
    const holyFishes = MostHolyFish()
    const soldierFishes = SoldierFish()
    const unholyFishes = UnHolyFish()
    let holyFishHTML = buildFishHTML(holyFishes, 'Holy Fish');
    let soldierFishHTML = buildFishHTML(soldierFishes, 'Soldier Fish')
    let unholyFishHTML = buildFishHTML(unholyFishes, 'Other Fish')

    contentElement.innerHTML += `
        <h2 class="content__title">Martin's Fish List</h2>
        <article class="containerLeft__fishList">
                ${holyFishHTML}
                ${soldierFishHTML}
                ${unholyFishHTML}
        </article>
    `
}
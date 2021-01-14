import { MostHolyFish } from '/scripts/fish/FishDataProvider.js'
import { SoldierFish } from '/scripts/fish/FishDataProvider.js'
import { UnHolyFish } from '/scripts/fish/FishDataProvider.js'
import { Fish } from '/scripts/fish/Fish.js'

// for of loop to populate the dom with the fish
export const FishList = () => {
    const contentElement = document.querySelector('.containerLeft')
    const holyFishes = MostHolyFish()
    const soldierFishes = SoldierFish()
    const unholyFishes = UnHolyFish()
    let holyFishHTML = ""
    let soldierFishHTML = ""
    let unholyFishHTML = ""
    
    // for of loop to get holy fish
    for (const fish of holyFishes) {
        holyFishHTML += Fish(fish);
    }
    
    // for of loop to get holy fish
    for (const fish of soldierFishes) {
        soldierFishHTML += Fish(fish);
    }
    
    // for of loop to get holy fish
    for (const fish of unholyFishes) {
        unholyFishHTML += Fish(fish);
    }    

    contentElement.innerHTML += `
        <h2 class="content__title">Martin's Fish List</h2>
        <article class="containerLeft__fishList">
            <div class="contentArticle">
                <h3>Holy Fish</h3>
                ${holyFishHTML}
            </div>
            <div class="contentArticle">
                <h3>Soldier Fish</h3>
                ${soldierFishHTML}
            </div>
            <div class="contentArticle">
                <h3>Other Fish</h3>
                ${unholyFishHTML}
            </div>
        </article>
    `
}


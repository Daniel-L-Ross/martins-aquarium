export const Fish = (fish) => {
    return `
        <section class="fishCard">
            <div class="fishCard__content">
                <img src="./images/${fish.image}" alt="" class="fishCard__image image--card">
                <div class="fish__name">Name: ${fish.name}</div>
                <div class="fish__species">Species: ${fish.species}</div>
                <div class="fish__length">Length: ${fish.length}</div>
                <div class="fish__location">Harvest Location: ${fish.location}</div>
                <div class="fish__diet">Diet: ${fish.food}</div>
            </div>
            </section>
            `
        }
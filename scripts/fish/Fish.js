export const Fish = (fish) => {
    return `
        <section class="fishCard">
            <div class="fishCard__content">
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
            </div>
            </section>
            `
        }
        
        // <div><img class="fish__image image--card" src="${fish.image}" /></div>
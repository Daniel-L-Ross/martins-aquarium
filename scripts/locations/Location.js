export const Location = (location) => {
    return `
    <div class="locationCard">
        <div class="locationCard__content">
            <img class="locationCard__image"src="${location.image.source}" lat="${location.image.alt}">
            <div class="locationCard__imageCredit">${location.image.credit}</div>
            <div class="locationCard__city">${location.city}</div>
            <div class="locationCard__state">${location.state}</div>
            <div class="locationCard__country">${location.country}</div>
            <div class="locationCard__waterBody">${location.bodyOfWater}</div>
        </div>
    </div>
    `
}
import { useLocation } from './LocationDataProvider.js'
import { Location } from './Location.js'

export const LocationList = () => {
    const contentElement = document.querySelector('.containerLeft')
    const locations = useLocation()

    let locationHTMLRep = ""
    for (const locObj of locations) {
        locationHTMLRep += Location(locObj)
    }
    contentElement.innerHTML +=`
        <h2 class="content__title">Harvesting Locations</h2>
        <article class="containerLeft__LocationList contentArticle">
            ${locationHTMLRep}
        </article>
    `
}
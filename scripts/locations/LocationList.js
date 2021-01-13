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
        <article class="containerLeft__LocationList contentArticle">
            ${locationHTMLRep}
        </article>
    `
}
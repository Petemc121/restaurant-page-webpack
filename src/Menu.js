import Lobster from './lobster.jpeg'
import Pie from './pie.jpg'
import Scallops from './scallops.jpeg'
import Icon from './icon.jpg';


function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu')

    const lobsterImage = new Image();
    lobsterImage.src = Lobster;
    lobsterImage.classList.add('menuImage')

    const pieImage = new Image();
    pieImage.src = Pie;
    pieImage.classList.add('menuImage')


    const scallopsImage = new Image();
    scallopsImage.src = Scallops;
    scallopsImage.classList.add('menuImage')


    const iconImage = new Image();
    iconImage.src = Icon;
    iconImage.classList.add('menuImage')


    const menuCards = [{name:'Haggis Paella', image: iconImage}, {name:'Baked Lobster', image: lobsterImage}, {name:'Scottish Pie', image: pieImage}, {name:'Scallops', image: scallopsImage},]

    menuCards.forEach(card => {
        const container = document.createElement('div')
        container.classList.add('menuCards')
        container.appendChild(card.image);
        const name = document.createElement('p');
        name.textContent = card.name;
        container.appendChild(name);
        menu.appendChild(container)
    })

    return menu;

}

function loadMenu() {
    const main = document.querySelector('#main')
    main.textContent = "";
    main.appendChild(createMenu())
}

export default loadMenu;
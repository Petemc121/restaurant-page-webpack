import Lobster from './lobster.png'
import Pie from './pie.png'
import Scallops from './scallops.png'
import Icon from './icon.png';


function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('.menu')

    const lobsterImage = new Image();
    lobsterImage.src = Lobster;

    const pieImage = new Image();
    pieImage.src = Pie;

    const scallopsImage = new Image();
    scallopsImage.src = Scallops;

    const iconImage = new Image();
    iconImage.src = Icon;

}
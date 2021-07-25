import './style.css';
import _ from 'lodash';
import Icon from './icon.jpg'

function Header() {
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = "Pedronios"
    const header = document.createElement('div');
    header.classList.add('header');
    const navigation = [
        {name:"Home", link:""},
        {name:"About", link:""},
        {name:"Menu", link:""},
        {name:"Contact", link:""},
    ]

    navigation.forEach(navElement => {
        const div = document.createElement('div');
        div.textContent = navElement.name;
        div.classList.add('navs');
        const link = document.createElement('a');
        link.href = navElement.link;
        link.appendChild(div)

        header.appendChild(link)


    })

    title.appendChild(header);

    return title;
    
}

document.body.appendChild(Header());



function Body1() {
    const div = document.createElement('div');
    div.classList.add('homeImage')

    const myIcon = new Image();
    myIcon.src = Icon;


  div.appendChild(myIcon);

  const slogan = document.createElement('div')
  slogan.classList.add('slogan');
  slogan.textContent = "Bringing Scottish and Spanish fusion food to your table!"

  div.appendChild(slogan)

    return div;
}

document.body.appendChild(Body1());
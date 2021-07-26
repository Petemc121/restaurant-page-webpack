import Icon from './icon.jpg'

function createHome()
{
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

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = "";

  main.appendChild(createHome());
}

export default loadHome;
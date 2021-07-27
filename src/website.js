import loadHome from './Home'
import loadAbout from './About'
import loadMenu from './Menu'
import loadContact from './Contact'

function createHeader() {
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = "Pedronios"

    return title;
    
}

function createNavbar() {

    const navBar = document.createElement('div');
    navBar.classList.add('navBar')

    const home = document.createElement('div');
    home.classList.add('navs')
    home.textContent = 'Home';
    home.addEventListener('click', () => {
        if(home.classList.contains('active')) return
        setActiveButton(home);
        loadHome();
        
    })

    const about = document.createElement('div');
    about.classList.add('navs')
    about.textContent = 'About';
    about.addEventListener('click', () => {
        if(about.classList.contains('active')) return
        setActiveButton(about);
        loadAbout();
        
    })

    const menu = document.createElement('div');
    menu.classList.add('navs')
    menu.textContent = 'Menu';
    menu.addEventListener('click', () => {
        if(menu.classList.contains('active')) return
        setActiveButton(menu);
        loadMenu();
        
    })

    const contact = document.createElement('div');
    contact.classList.add('navs')
    contact.textContent = 'Contact';
    contact.addEventListener('click', () => {
        if(contact.classList.contains('active')) return
        setActiveButton(contact);
        loadContact();
        
    })

    navBar.appendChild(home);
    navBar.appendChild(about);
    navBar.appendChild(menu);
    navBar.appendChild(contact);
    

    return navBar
}

function setActiveButton(button) {
    button.classList.add('active');

    const navs = document.querySelectorAll('.navs');
    navs.forEach(nav=> {
        if (nav !== button) 
        {
            nav.classList.remove('active');
        }
    })
}

function loadMain() {
  const main = document.createElement('div')
  main.setAttribute('id', 'main')

return main;
}

function initializeWebsite() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    header.setAttribute('id', 'header')
    header.appendChild(createHeader())
    header.appendChild(createNavbar())
    content.appendChild(header);
    content.appendChild(loadMain());
    loadHome();
}

export default initializeWebsite;
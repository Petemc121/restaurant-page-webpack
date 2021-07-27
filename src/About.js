function createAbout() {
 const about = document.createElement('div');
 about.classList.add('about');

 const paragraph1 = document.createElement('p')
 paragraph1.classList.add('aboutText')
 paragraph1.textContent = "Pedrinios is a new wave restaurant run by the legendary Pedrinio himself!";

 const paragraph2 = document.createElement('p')
 paragraph2.classList.add('aboutText')
 paragraph2.textContent = "Opened just last year, Pedrinios has already established itself as a 3 star michilin establishment!"

 const paragraph3 = document.createElement('p')
 paragraph3.classList.add('aboutText')
 paragraph3.textContent = "Drop by this weekend and try our famous Haggis Paella!"

 about.appendChild(paragraph1)
 about.appendChild(paragraph2)
 about.appendChild(paragraph3)

 return about;
}

function loadAbout() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createAbout())
}

export default loadAbout;
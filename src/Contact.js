import Location from './location.PNG'

function createContact()
{
    const div = document.createElement('div');
    div.classList.add('locationImageCon')

    const mylocation = new Image();
    mylocation.src = Location;
    mylocation.classList.add('locationImage')


    div.appendChild(mylocation);

    const details = document.createElement('div')
    details.classList.add('contactDetails');
    details.textContent = "Phone Number: 0773456789"

    div.appendChild(details)

    return div;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = "";

  main.appendChild(createContact());
}

export default loadContact;
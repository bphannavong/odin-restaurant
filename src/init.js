const headComponents = []; //components for header section

const welcome = document.createElement('h1');
const nav = document.createElement('div');

welcome.innerHTML = 'Welcome to Pho Restaurant!'

//nav-bar elements
nav.classList.add('nav-bar');
const home = document.createElement('button');
const menu = document.createElement('button');
const contact = document.createElement('button');

home.innerHTML = 'HOME';
menu.innerHTML = 'MENU';
contact.innerHTML = 'CONTACT';

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);


//home();

//push components to respective arrays
// headComponents.push(banner);
headComponents.push(welcome);
headComponents.push(nav);


export default function renderPage() {
    document.innerHTML = ''; //create new module for home and ability to change between tabs
    const main = document.querySelector('main')
    
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    for (const element of headComponents) {
        header.appendChild(element);
    }
    
    main.appendChild(header);
}


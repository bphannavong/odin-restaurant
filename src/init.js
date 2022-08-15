const headComponents = []; //components for header section
const components = []; //components to add to page

const welcome = document.createElement('h1');
const nav = document.createElement('div');
//const banner = document.createElement('img');
const hero = document.createElement('div');


welcome.innerHTML = 'Welcome to Pho Restaurant!'

//banner.src = phoBanner;

//nav-bar elements
nav.classList.add('nav-bar');
const home = document.createElement('button');
const menu = document.createElement('button');
const contact = document.createElement('button');

home.innerHTML = 'HOME';
menu.innerHTML = 'MENU';
contact.innerHTML = 'CONTACT';

home.classList.add('selected');

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);

//Hero/About 
const aboutHeader = document.createElement('h2');
aboutHeader.innerHTML = 'ABOUT';
const about = document.createElement('div');
about.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
hero.appendChild(aboutHeader);
hero.appendChild(about);

//push components to respective arrays
// headComponents.push(banner);
headComponents.push(welcome);
headComponents.push(nav);
components.push(hero);

export default function renderPage() {
    document.innerHTML = ''; //create new module for home and ability to change between tabs
    const main = document.querySelector('main')
    const content = document.getElementById('content');
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    for (const element of headComponents) {
        header.appendChild(element);
    }
    for (const element of components) {
        content.appendChild(element);
    }

    main.appendChild(header);
}


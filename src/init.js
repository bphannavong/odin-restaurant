import phoBanner from './assets/pho-banner.jpg';

const headComponents = [];
const components = []; //components to add to page

const welcome = document.createElement('h1');
const nav = document.createElement('div');
const banner = document.createElement('img');
const hero = document.createElement('div');


welcome.innerHTML = 'Welcome to Pho Restaurant!'

banner.src = phoBanner;
banner.classList.add('banner');

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

hero.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

headComponents.push(banner);
headComponents.push(welcome);
headComponents.push(nav);
components.push(hero);

export default function renderPage() {
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


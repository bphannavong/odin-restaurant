import homeRender from './home.js';

const components = []; //components for header section

const welcome = document.createElement('h1');
welcome.innerHTML = 'Welcome to Pho Restaurant!'

//nav-bar elements
const nav = document.createElement('div');
nav.classList.add('nav-bar');

const home = document.createElement('button');
const menu = document.createElement('button');
const contact = document.createElement('button');

home.setAttribute('id', 'homeBtn');
menu.setAttribute('id', 'menuBtn');
contact.setAttribute('id', 'contactBtn');

home.innerHTML = 'HOME';
menu.innerHTML = 'MENU';
contact.innerHTML = 'CONTACT';

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);

//push components
components.push(welcome);
components.push(nav);

//initial rendering of page
const header = document.createElement('div');
const content = document.getElementById('content');
    
content.insertAdjacentElement('beforebegin', header);
header.setAttribute('id', 'header');

for (const element of components) {
    header.appendChild(element);
}

export default function renderPage() {
    
}

export function tabSwitch(tabBtn) {
    document.querySelectorAll('button').forEach(btn => btn.removeAttribute('class'));
    tabBtn.target.classList.add('selected');
}

function renderHeader() {

}
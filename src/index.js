import initRender from './init.js';
import homeRender from './home.js';
import menuRender from './menu.js';
import contactRender from './contact.js';
import tabSwitch from './init.js';
import './styles.css';

window.onload = initRender();

const home = document.querySelector('.nav-bar button:first-child');
home.addEventListener('click', homeRender);
home.addEventListener('click', tabSwitch);

const menu = document.querySelector('.nav-bar button:nth-child(2)');
menu.addEventListener('click', menuRender);
menu.addEventListener('click', tabSwitch);

const contactBtn = document.querySelector('.nav-bar button:last-child');
contactBtn.addEventListener('click', contactRender);
import initRender from './init.js';
import menuRender from './menu.js';
import './styles.css'

initRender();

const home = document.querySelector('.nav-bar button:first-child');
home.addEventListener('click', initRender);

const menu = document.querySelector('.nav-bar button:nth-child(2)');
menu.addEventListener('click', menuRender);

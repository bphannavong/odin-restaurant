const components = []; //components to add to page

const hero = document.createElement('div');

//home.classList.add('selected');
//Hero/About 
const aboutHeader = document.createElement('h2');
aboutHeader.innerHTML = 'ABOUT';
const about = document.createElement('div');
about.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
hero.appendChild(aboutHeader);
hero.appendChild(about);

components.push(hero);


//fx
const content = document.getElementById('content');\

for (const element of components) {
    content.appendChild(element);
}

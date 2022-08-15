export default function renderPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    for (const element of components) {
        content.appendChild(element);
    }
}

class MenuItem {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}

const components = []; //components to add to page

//menu components 
const menu = document.createElement('div'); //wrapper for menu objects
const aboutHeader = document.createElement('h2');
aboutHeader.innerHTML = 'MENU';

//item-card components
const itemCards = document.createElement('div');
itemCards.setAttribute('id', 'item-cards');

const dacBiet = new MenuItem('Pho Dac Biet', 'Lorem ipsum dolor sit amet, consectetur.')
const pho2 = new MenuItem('Pho #2', 'Lorem ipsum dolor sit amet, consectetur.');
const pho3 = new MenuItem('Pho #3', 'Lorem ipsum dolor sit amet, consectetur.');
const pho4 = new MenuItem('Pho #4', 'Lorem ipsum dolor sit amet, consectetur.');
const pho5 = new MenuItem('Pho #5', 'Lorem ipsum dolor sit amet, consectetur.');
const pho6 = new MenuItem('Pho #6', 'Lorem ipsum dolor sit amet, consectetur.');

const items = [dacBiet, pho2, pho3, pho4, pho5, pho6];
for (const item of items) {
    const card = document.createElement('div');
    card.classList.add('card');

    const itemName = document.createElement('div');
    const itemIngredients = document.createElement('div');

    itemName.innerHTML = item.name;
    itemIngredients.innerHTML = item.ingredients;

    card.appendChild(itemName);
    card.appendChild(itemIngredients);

    itemCards.appendChild(card);
}


menu.appendChild(aboutHeader);
menu.appendChild(itemCards);

components.push(menu);

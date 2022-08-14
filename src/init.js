import banner from './assets/pho-banner.jpg';

const components = [];
const div = document.createElement('div');
const restaurantImg = document.createElement('img');
    
div.innerHTML = 'hey';

restaurantImg.src = banner;
restaurantImg.classList.add('banner');

components.push(div);
components.push(restaurantImg);

export default function renderPage() {
    const content = document.getElementById('content');
    for (const element of components) {
        content.appendChild(element);
    }
}


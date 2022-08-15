export default function renderPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    for (const element of components) {
        content.appendChild(element);
    }
}

const components = []; //components to add to page

//Contact information
const contactInfo = document.createElement('div');
const aboutHeader = document.createElement('h2');
aboutHeader.innerHTML = 'CONTACT';
const about = document.createElement('div');
about.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
contactInfo.appendChild(aboutHeader);
contactInfo.appendChild(about);

components.push(contactInfo);


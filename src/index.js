import './style.css'

const content = document.getElementById('content')

function createHeaderBar() {
    const header = document.createElement('header');
    const headerHomeButton = document.createElement('button');
    headerHomeButton.classList.add('page-button')
    const headerMenuButton = headerHomeButton.cloneNode('true');
    const headerAboutButton = headerHomeButton.cloneNode('true');

    headerAboutButton.textContent = 'ABOUT';
    headerHomeButton.textContent = 'HOME';
    headerMenuButton.textContent = 'MENU';

    header.append(headerHomeButton, headerMenuButton, headerAboutButton);

    content.appendChild(header);
}

createHeaderBar();
export function createHeaderBar() {

    const content = document.getElementById('content');

    const header = document.createElement('header');
    const headerHomeButton = document.createElement('button');
    headerHomeButton.classList.add('page-button')
    const headerMenuButton = headerHomeButton.cloneNode('true');
    const headerAboutButton = headerHomeButton.cloneNode('true');

    headerAboutButton.textContent = 'ABOUT';
    headerAboutButton.classList.add('header-button-inactive');
    headerHomeButton.textContent = 'HOME';
    headerHomeButton.classList.add('header-button-active');
    headerMenuButton.textContent = 'MENU';
    headerMenuButton.classList.add('header-button-inactive');

    header.append(headerHomeButton, headerMenuButton, headerAboutButton);

    content.appendChild(header);
};

export function createSection(headerText, paragraphText) {
    const content = document.getElementById('content');

    const section = document.createElement('section');
    const title = document.createElement('h2');
    const paragraph = document.createElement('p');

    section.classList.add('section', 'container');
    title.classList.add('section');
    paragraph.classList.add('section');

    title.textContent = headerText;
    paragraph.textContent = paragraphText;

    section.append(title, paragraph);
    content.appendChild(section);
};
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

    section.classList.add('section', 'container');
    title.classList.add('section');
    title.textContent = headerText;
    section.appendChild(title);

    let paragraph
    [...arguments].forEach((argument, index) => {
        if (index !== 0){
            paragraph = document.createElement('p');
            paragraph.classList.add('section');
            paragraph.textContent = argument;
            section.appendChild(paragraph);
        }
    })
    
    content.appendChild(section);
    
};

export function createTitle(titleText) {
    const content = document.getElementById('content');

    const title = document.createElement('h1');
    title.classList.add('title');

    title.textContent = titleText;
    content.appendChild(title);
}

export function clearContent() {
    const content = document.getElementById('content');

    while (content.childElementCount > 1) {
        content.removeChild(content.lastChild);
    }
}
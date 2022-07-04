import './style.css'
import {createHeaderBar, clearContent} from './dom.js';
import * as Home from './home.js';
import * as Menu from './menu.js';
import * as About from './about.js';

createHeaderBar();
Home.createHomePage();

const headerButtons = [...document.getElementsByClassName('page-button')];
function toggleHeaderButtonStyle (currentIndex) {
    headerButtons.forEach((button, index) => {
        if (index === currentIndex) {
            button.classList.remove('header-button-inactive');
            button.classList.add('header-button-active');
        }
        else {
            button.classList.remove('header-button-active');
            button.classList.add('header-button-inactive');
        }
    })
};
headerButtons.forEach(
    (button, index) => {
        switch (button.textContent) {
            case 'HOME':
                button.addEventListener('click', () => {
                    clearContent();
                    Home.createHomePage();
                    toggleHeaderButtonStyle(index);
                });
                break;
            case 'MENU':
                button.addEventListener('click', () => {
                    clearContent();
                    Menu.createMenuPage();
                    toggleHeaderButtonStyle(index);
                });
                break;
            case 'ABOUT':
                button.addEventListener('click', () => {
                    clearContent();
                    About.createAboutPage();
                    toggleHeaderButtonStyle(index);
                });
                break;
        }
    }
)
import * as DOM from './dom.js';
import * as MenuImages from './images/index.js';

export function createMenuPage () {
    DOM.createTitle('Menu');

    DOM.createPictureSection('Beetlejuice Burger', MenuImages.burger, 'A delicous burger from a bright star, with crisp lettuce, fresh cheese, and juicy tomato, served chips or fries.')
    DOM.createPictureSection('Capricorn Couscous', MenuImages.couscous, 'A crafted constellation of couscous, organically harvested from the farms of California.')
    
}
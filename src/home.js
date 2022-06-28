import * as DOM from './dom.js';

export function createHomePage () {
    DOM.createTitle('SpaceBar');

    DOM.createSection('Discover', 'Out of this world flavours will take you to the next level. Conveniently located in the heart of San Fransokyo, stop in before a visit to downtown or heading on to the Institute of Technology.');
    DOM.createSection('Hours', "Sunday-Thursday: 12:00 - 22:00", "Friday-Saturday: 11:00 - 23:00");
    DOM.createSection('Find Us', '319 Moonrise Plaza,', 'San Fransokyo,', 'CA 94114,', 'United States of America')

}
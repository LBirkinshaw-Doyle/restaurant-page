import * as DOM from './dom.js';

export function createAboutPage () {
    DOM.createTitle('About the SpaceBar');

    DOM.createSection('Founding', 'Vivamus bibendum, augue eu facilisis fermentum, elit augue congue arcu, nec fringilla massa nunc quis magna. Nullam eleifend malesuada sollicitudin. Curabitur id condimentum elit. Vivamus euismod enim at odio iaculis, non sollicitudin nulla bibendum. Nulla molestie eu ex vitae tempus. Phasellus placerat molestie felis nec commodo. Maecenas tincidunt convallis gravida. Fusce ultricies lectus sapien, vitae dictum purus pellentesque in. Cras pulvinar orci tempor nulla accumsan, non varius diam suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tortor porta, dignissim elit at, venenatis tellus. Aliquam erat volutpat.');
    DOM.createSection('About Our Team', "Sed porta odio tempor, ornare ex a, molestie sapien.", "Aenean blandit elit nec justo varius maximus.", "Maecenas nec mollis diam, vitae scelerisque sem. Sed at nibh quis mi sagittis sollicitudin et nec tortor.", "Nulla vel dui mollis, consectetur elit eu, efficitur odio.", "Nulla ut interdum sem. In tempor consequat tincidunt. Aenean ut maximus lorem.", "Ut viverra dictum augue a gravida. Donec ex orci, faucibus ut nisi ut, vestibulum venenatis mi.");
    DOM.createSection('Find Us', '319 Moonrise Plaza,', 'San Fransokyo,', 'CA 94114,', 'United States of America')
    
}
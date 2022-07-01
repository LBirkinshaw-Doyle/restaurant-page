import * as DOM from './dom.js';
import * as MenuImages from './images/index.js';

export function createMenuPage () {
    DOM.createTitle('Menu');

    DOM.createPictureSection('Blackhole Breakfast', MenuImages.breakfast, 'Disappear this delicious breakfast into your blackhole! fresh mushrooms and cherry tomatos, fried with authentic german sausage.')
    DOM.createPictureSection('Beetlejuice Burger', MenuImages.burger, 'A delicous burger from a bright star, with crisp lettuce, fresh cheese, and juicy tomato, served chips or fries.')
    DOM.createPictureSection('Capricorn Couscous', MenuImages.couscous, 'A crafted constellation of couscous, organically harvested from the farms of California.')
    DOM.createPictureSection('Crater Crepes', MenuImages.crepes, 'Get a sweet taste of Paris with these astronomically tasty pancakes, served with any* sauce of your choosing!')
    DOM.createPictureSection('Dimensional Doughnuts', MenuImages.doughnuts, 'The universe is doughnut shaped, and your desert can be too!')
    DOM.createPictureSection('Fusion Float', MenuImages.float, 'Stars power the universe through fusion, so power your day with our Fusion Float')
    DOM.createPictureSection('Lagrange Lemonade', MenuImages.lemonade, 'The fizz in this fresh Scicillian lemonade will lift you out of this world!')
    DOM.createPictureSection('Lunar Loaf Cake', MenuImages.loaf, 'Let your soul be bathed in moonlight with the subtle delight of this lightly spiced loaf, perfectly accompanied by any of our drinks.')
    DOM.createPictureSection('Planetoid Pasta', MenuImages.pasta, 'This pasta will hook you into orbit, and keep you coming back round for more!')
    DOM.createPictureSection('Pulsar Punch', MenuImages.punch, 'The quenchiest of drinks, this strawberry punch takes your tongue to a whole new orbit.')
    DOM.createPictureSection('Sunlight Salad', MenuImages.salad, 'Drench yourself in goodness from within, as this salad nourishes you with all you need for the day ahead.')    
}
import React from 'react';
import ReactDOM from 'react-dom';

//Music
const musicOne = React.createElement('li', {}, 'Techno');
const techno = React.createElement('ul', {}, musicOne);

const musicTwo = React.createElement('li', {}, 'House');
const house = React.createElement('ul', {}, musicTwo);

const musicThree = React.createElement('li', {}, 'Trance');
const trance = React.createElement('ul', {}, musicThree);

//Colors
const colorOne = React.createElement('li', {}, 'Orange');
const orange = React.createElement('ul', {}, colorOne);

const colorTwo = React.createElement('li', {}, 'Green');
const green = React.createElement('ul', {}, colorTwo);

const colorThree = React.createElement('li', {}, 'Blue');
const blue = React.createElement('ul', {}, colorThree);

//Food
const foodOne = React.createElement('li', {}, 'Street Tacos');
const streetTacos = React.createElement('ul', {}, foodOne);

const foodTwo = React.createElement('li', {}, 'Pizza');
const pizza = React.createElement('ul', {}, foodTwo);

const foodThree = React.createElement('li', {}, 'Pho');
const pho = React.createElement('ul', {}, foodThree);

//Websites
const webOne = React.createElement('a', { href: 'https://www.youtube.com/' }, 'YouTube');
const youTube = React.createElement('ul', {}, webOne);

const webTwo = React.createElement('a', { href: 'https://wozu.exeterlms.com' }, 'Woz-U');
const woz = React.createElement('ul', {}, webTwo);

const webThree = React.createElement('a', { href: 'https://www.amazon.com/' }, 'Amazon');
const amazon = React.createElement('ul', {}, webThree);

ReactDOM.render(
    React.createElement(
        'div', {},
        React.createElement('li', {}, 'Favorite Colors', orange, green, blue),
        React.createElement('li', {}, 'Favorite Music', techno, house, trance),
        React.createElement('li', {}, 'Favorite Food', streetTacos, pizza, pho),
        React.createElement('li', {}, 'Favorite Websites', youTube, woz, amazon)
    ),
    document.getElementById('root')
);
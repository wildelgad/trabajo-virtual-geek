'use strict';

document.querySelector('h1').innerHTML+= " Heyy Jupiter";

const listElement = document.querySelector('.list');

const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';

listElement.innerHTML += content;
// 1 
document.getElementById(`portillos`);
const portillos = document.getElementById(`portillos`);
console.log(portillos);
// console.dir(portillos);

// 2
document.getElementsByTagName(`img`);
const pic = document.getElementsByTagName(`img`);
console.log(pic);

// 3
document.getElementsByClassName(`center`);
const centerd = document.getElementsByClassName(`center`);
console.log(centerd);

// 4
document.querySelector(`#ginos`);
const ginosEast = document.querySelector(`#ginos`);
console.log(ginosEast);

// 5
document.querySelectorAll(`p`);
const pTags = document.querySelectorAll(`p`);
console.log(pTags);

// 6a
document.querySelector(`h1`);
const h1 = document.querySelector(`h1`);
console.log(h1);

// 6b
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;

// 7a
document.querySelector(`#others`);
const others = document.querySelector(`#others`);
console.log(others);

// 7b
others.innerHTML = `<h3>Other Favorites</h3>`;

// 8a
document.querySelector(`a`);
const aTag = document.querySelector(`a`);
console.log(aTag);

// 8b
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9
console.dir(h1);
h1.classList.add(`background`, `text-color`);

// 10
console.dir(h1);
h1.classList.remove(`background`);

// 11a
const h4 = document.createElement(`h4`);
document.createElement(`h4`);
console.log(h4);

// 11b
// document.querySelector(`h4`);
h4.innerText = `CHICAGO: A great place to eat!`;
// console.dir(h4);
// console.log(h4);

// 11c
document.querySelector(`body`);
h1.prepend(h4);
// console.dir(h4);

// 12a
const h5 = document.createElement(`h5`);
document.createElement(`h5`);
// console.dir(h5);
console.log(h5);

// 12b
h5.innerText = `See you in the Windy City Sometime`;

// 12c
const aTag = document.querySelector(`h5`);


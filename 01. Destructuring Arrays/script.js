'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Destructuring Returned value
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Array Destructuring
let [first, second] = restaurant.categories;
console.log(first, second);

// Skipping value
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Swapping values
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Destructuring Returned value
const [starter, mainCurse] = restaurant.order(2, 0);
console.log(starter, mainCurse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

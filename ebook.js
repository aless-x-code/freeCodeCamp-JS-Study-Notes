//_______________________________________________________________
// OBJECTS

let house = {
  // curly brackets
  rooms: 5,
  state: "NY",
  crimeCapita: 4.3,
};

// ACCESS OBJECTS
house.state;
house[rooms];
// ADD PROPERTIES
house.color = "blue";
house.sqMeters = {}; // An empty property

//_______________________________________________________________
// ARRAYS

let ages = [4, 45, 66, 24, 1]; // brackets

ages[0]; // start counting at 0
ages.length; // 5
ages[ages.length - 1]; // last element
ages[6] = 99; // new element
ages[6] = 79; // alter an element

// Array of objects
let data = [
  { x: 55, y: 25 },
  { x: 87, y: 30 },
];

// Object of arrays
let trials = {
  trial1: [
    [1, 2],
    [3, 4],
  ],
  trial2: [
    [2, 3],
    [4, 5],
  ],
};

//_______________________________________________________________
// OPERATORS

let data1 = [
  { x: 55, y: 25 },
  { x: 87, y: 30 },
];
data1[1].y - data1[0][1]; // = 5

"3" + "2"; // 32. Concatenate strings

// Boolean operations
let x = 5,
  y = 8;

false == x < y; // true

"two" > "three"; // true, tw is alphabetically greater than th

!(x > y); // true. ! inverts the boolean value false=>true, and viceversa

//_______________________________________________________________
// FUNCTIONS

let meter = 3;

function plus1(a) {
    return a += 1;
}

plus1(meter) // 4

let square = function(a) {
    return a * a;
}

square(plus1(a)) // 16. plus1() will run first, then square

// Prev functions as arrow functions



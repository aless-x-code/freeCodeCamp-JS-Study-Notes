// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

// ES5
const user = { name: "John Doe", age: 34 };
/*
const name = user.name;
const age = user.age;
*/

//ES6
const { name, age } = user;
console.log(name); // = name from user (user.name) = John Doe
console.log(age); // age from user (user.age) = 34

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES;
//new var name
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

//Deconstruct nest objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {
  today: { low: lowToday1, high: highToday1 },
} = LOCAL_FORECAST;

// DECONSTRUCTURING ARRAYS
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

// a is asigned first value, b is assigned second value
// [1, 2]

const [x, y, , , z] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z);

// [1, 2, 5]

let f = 8,
  g = 6;

[f, g] = [g, f];

/////____________
const [r, t, ...w] = [1, 2, 3, 4, 5, 7];
console.log(r, t); // 1 2
console.log(x); // [3, 4, 5, 7]

////___________
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  const [, , ...arr] = list; // remove first two
  return arr;
}

console.log(removeFirstTwo(source));
////__________
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
};

const profileUpdate1 = ({ name, age, nationality, location }) => {};

///________________
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ min, max }) => (max + min) / 2.0;

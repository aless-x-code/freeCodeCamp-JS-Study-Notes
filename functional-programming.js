//____________________________________________________________
// Funtional Prgramming is a coding approach
// it steers toward writing code that has ..
/*
Isolated function, meaning, function that are local, and don't affect global scopes. Modifying global varibales could have a cascading effect on the whole program and result
*/

// example, using splice changes the original array, thereafter it will be a different array. However, using slice, it will only make a working copy of the array

// It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

// in programming, a change or alteration is called a mutation, and its results is called the side effect. In functional programming, we focus on using pure functions, meaning, it doesn't cause side effects

//____________________________________________________________
// declaring dependencies
// A function might take a global variable, if that varibales changes, so will the function's output
// to fix function, you can locally declare their dependencies
// The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.
// This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

// The global variable
let fixedValue = 4;

function incrementer(fixedValue) {
  fixedValue = 4; // declaring depencies
  let incrementResult = fixedValue + 1;
  return incrementResult;
}
console.log(incrementer(fixedValue));
// function will now only return 5, even if the global "fixedValue" changes

//____________________________________________________________
// Use the map Method to Extract Data from an Array
// Array.prototype.map(), or more simply map
// .map iterates through each item in an array an returns a new array with the results
// return a new array, no mutation of original array (pure function)

const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

const titleAndRatings = watchList.map((item) => ({
  title: item["Title"],
  rating: item["imdbRating"],
}));

//____________________________________________________________
// Use the filter Method to Extract Data from an Array

// filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true
// Like map, it does this without needing to modify the original array.

const strain = watchList.filter((item) => Number(item.imdbRating) >= 8.0); // filtering list, converting string to number, and it being greater or equal to 8

let filteredList = strain.map((item) => ({
  // mapping filtered list
  title: item["Title"],
  rating: item["imdbRating"],
}));

console.log(filteredList);

//____________________________________________________________
// Manually creating .filter, to undersdand it better

const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // prototype method of an Array
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    // iterating through array
    if (callback(this[i]) === true) {
      // if callback is true
      newArray.push(this[i]); // push item
    }
  }
  return newArray;
};

const new_s = s.myFilter(function (item) {
  // function that verifies remainder
  return item % 2 === 1;
});

console.log(new_s);

//____________________________________________________________
// Splice
// mutates original array

// first argument, where to begin splicing
// second argument, how many items to splice
// if no second argument, default is to splice until the end

//____________________________________________________________
// .concat
// join items end to end

//____________________________________________________________
// .reduce

function getRating(watchList) {
  let christopherNolan = watchList.filter(
    (movie) => movie.Director == "Christopher Nolan"
  ); // filters only the movies that have Christopher Nolan as director
  let averageRating = christopherNolan.reduce(
    (sum, movie) => sum + Number(movie.imdbRating / christopherNolan.length),
    0
  ); // average rating of Christopher Nolan movies
  return averageRating;
}

console.log(getRating(watchList));

//____________________________________________________________
// only square positive and whole numbers

const squareList = (arr) => {
  let positiveIntergers = arr.filter(
    (number) => number >= 0 && number % 1 == 0
  ); // filters array for positive numbers, and that are whole
  let square = positiveIntergers.map((num) => num * num);
  return square;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//____________________________________________________________
// .sort method
// JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items

function alphabeticalOrder(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// condition ? T : F

//____________________________________________________________
// .sort method, functional programming

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let newArr = [...arr];
  return newArr.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}

console.log(nonMutatingSort(globalArray));

//____________________________________________________________
// The split method splits a (string) => (array of strings)
sampleArray.split(""); //< "delimiter"

// if delimeter is a space => split into words
// if delimiter is empty => split in characters

const str = "Hello World";
const bySpace = str.split(" ");
["Hello", "World"];

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
["How", "are", "you", "today"];

function splitify(str) {
  return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code"));
["Hello", "World", "I", "am", "code"];

//____________________________________________________________
// join
// unites a array

function sentensify(str) {
  let words = str.split(/\W/);
  return words.join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));

//____________________________________________________________
// URL Slug
// turn a string into a url blueprint
// how to learn JS => how-to-learn-js

function urlSlug(title) {
  let trim = title.trim(); // trim whitespace from beggining and at end
  let words = trim.split(/\W+/); // string into an array of words, eliminating extra whitespaces
  let lowerCase = words.map((word) => word.toLowerCase()); // lowercase words
  return lowerCase.join("-"); // join lowerCase by -
}
console.log(urlSlug(" Winter Is  Coming"));

//____________________________________________________________
// every method check if ALL the elements passes a test, return true if all meet, false if 1 or more not pass

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function (currentValue) {
  return currentValue < 10; // only if all numbers are less than 10
});
// false

function checkPositive(arr) {
  return arr.every(function (num) {
    return num >= 0; // only if numbers are positive
  });
}
checkPositive([1, 2, 3, -4, 5]);
// false

//____________________________________________________________
// .some method
// check if at ONE or more, at the least, pass the test

function checkPositive(arr) {
  return arr.some(function (num) {
    return num >= 0;
  });
}
checkPositive([1, 2, 3, -4, 5]);
// positive

//____________________________________________________________
// Currying and Partial Application in functions

// arity of a function means the arguments it requires to complete
function sample(x, y) {}
// here, arity would be 2 arguments, x and y

// Currying a function means to convert a function of X arity into functions of 1 arity
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function (y) {
    return x + y;
  };
}
curried(1)(2);

// this is useful when you can't yet supply all arguments to a function of +1 arity
// rather, you can store the a function in a varibale and supply the next function arity when available

const funcForY = curried(1); // first argument, and stored
console.log(funcForY(2)); // run with second argument [first argument is already stored]

// PARTIAL application function has more than 1 arity, but, you apply a partial arguments, then run it will full arguments

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13

// example currying

function add_currying(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(add_currying(10)(20)(30));
// 60

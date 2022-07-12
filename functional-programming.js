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
//

/// testingggg

function add(bookList, bookName) {
  bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae",
  ];
  bookList.push(bookName);
  return bookList;

  // Change code above this line
}
console.log(add("A Brief History of Time"));

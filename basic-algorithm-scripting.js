//_____________________________________________________
// Reverse a String

function reverseString(str) {
  let convert = [...str];
  let reverseConvert = convert.reverse();
  let final = reverseConvert.join("");
  return final;
}
console.log(reverseString("hello"));

//_____________________________________________________
// Factorialize a Number

function factorialize(num) {
  let factoring = 1; // carrying variable, set at 1
  for (let i = 1; i <= num; i++) {
    // iterate, starting at 1, adding 1, until less or equal to num
    factoring = factoring * i; // carrying = 1(factoring intial)*1(i), 1*2(i+1), 2*3, 5*4, 20*5
  }
  return factoring; // return carrying variable
}
console.log(factorialize(5));

//_____________________________________________________
// find the lenght of the longest word

function findLongestWordLength(str) {
  let myArray = str.split(" ");
  let wordLength = [];
  for (let i = 0; i < myArray.length; i++) {
    wordLength.push(myArray[i].length);
  }
  let findMax = Math.max(...wordLength);
  // let longestNumberIndex = wordLength.indexOf(findMax); (to return the longest word itself)
  return findMax; // return myArray[longestNumberIndex]; (to return the longest word itself)
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

//_____________________________________________________
// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let maxes = [];
  for (let i = 0; i < arr.length; i++) {
    let findMax = Math.max(...arr[i]);
    maxes.push(findMax);
  }
  return maxes;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

//_____________________________________________________
// Confirm the Ending

function confirmEnding(str, target) {
  let targetCharacter = new RegExp(target + "$");
  let test = targetCharacter.test(str);
  if (test == true) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));

//_____________________________________________________
// Repeat a String

function repeatStringNumTimes(str, num) {
  let answer = "";
  while (num > 0) {
    answer += str;
    num--;
  }
  return answer;
}

console.log(repeatStringNumTimes("abc", 3));

//_____________________________________________________
// Return first elements that passes a function's "truth test"

function findElement(arr, func) {
  // a function that takes an array and a function
  for (let i = 0; i < arr.length; i++) {
    // iterating throught the array
    if (func(arr[i]) == true) {
      // if the function, taken the iteration element as paramerter, is true
      return arr[i]; // return that element
    }
  }
}
console.log(findElement([3, 5, 8], (num) => num % 2 === 0));

//_____________________________________________________
//check if its a boolean or not

function booWho(bool) {
  // function that takes a bool parameter
  if (bool === false) {
    // if paramter is false itself, return true(its a boolean)
    return true;
  } else if (bool === true) {
    // if parameter is true itself, also return true
    return true;
  } // anything besides true or false, return false(not a boolean)
  else return false;
}
console.log(booWho(false));

//_____________________________________________________
// Title Case

function titleCase(str) { // 
  str = str.toLowerCase().split(" "); 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

//_____________________________________________________
// Copy one array into another, beggining at index n

function frankenSplice(arr1, arr2, n) { 
  let clone = [...arr2]; // cloning arr2 so it goes unmodified globally
  clone.splice(n, 0, ...arr1) // splice(starting index, delete # elements, what to add) (... for it to copy as 1, 2, 3, rather than [1, 2, 3])
  return clone;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
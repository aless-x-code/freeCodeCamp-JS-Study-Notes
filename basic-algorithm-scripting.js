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

function titleCase(str) {
  //
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
  clone.splice(n, 0, ...arr1); // splice(starting index, delete # elements, what to add) (... for it to copy as 1, 2, 3, rather than [1, 2, 3])
  return clone;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//_____________________________________________________
// Falsy Bouncer
// check for boolean value, primitive
console.log(Boolean(x));
console.log(!!x);

// function that bounces false items
function bouncer(arr) {
  let answerArray = []; // working array
  for (let i = 0; i < arr.length; i++) {
    // iterate through array elements
    if (!!arr[i] == false) {
      // if element false, delete
      delete arr[i];
    } else {
      answerArray.push(arr[i]); // if true, push to working array
    }
  }
  return answerArray;
}
console.log(bouncer([7, "ate", "", NaN, false, 9]));

//_____________________________________________________
// Where does an element belong chronologically, (index wise)

function getIndexToIns(arr, num) {
  // function that returns the index where a numbers belong chronologically (if [40, 60], 50 belongs at = [1])
  arr.splice(0, 0, num); //arr.push(num); // adding num to the array
  arr.sort(function (a, b) {
    // BLUEPRINT: number sorting function
    return a - b;
  });
  return arr.indexOf(num); // once sorted, return index of where element belonged
}
console.log(getIndexToIns([40, 60], 50));

//_____________________________________________________
// compare 2 strings in an array, return true if first words has all the characters of word 2

function mutation(arr) {
  let word0 = arr[0].split("");
  let word1 = arr[1].split(""); // array into 2 words; word0 and word1

  const word0Lower = word0.map((word0) => word0.toLowerCase());
  const word1Lower = word1.map((word1) => word1.toLowerCase()); // lower casing word, for standarization

  let matchingCharacters = []; // basket of matching characters
  for (let i = 0; i < word0Lower.length; i++) {
    // iterating through word0
    if (word1Lower.indexOf(word0Lower[i]) >= 0) {
      // if word0 characters are in word1 ....
      matchingCharacters.push(word0Lower[i]); // push matching characters into basket
    }
  }
  console.log(matchingCharacters); // matching characters

  const containsAll = word1Lower.every((element) => {
    // if all elements of word1 are in matchign character's basket, return true
    return matchingCharacters.indexOf(element) !== -1;
  });
  return containsAll;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

//_____________________________________________________
// Chunky Monkey

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

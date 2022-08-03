//____________________________________________________________
// Sum All Numbers in a Range

function sumAll(arr) {
  arr.sort(function (a, b) {
    // arr will now be sorted
    return a === b ? 0 : a > b ? 1 : -1;
  });
  let sumArray = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    // return arr[0] - arr[1] range
    sumArray.push(i);
  }
  return sumArray.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll([10, 5]));

//____________________________________________________________
// asymmetric difference between arrays

function diffArray(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    // iterating through arr1
    if (arr2.indexOf(arr1[i]) == -1) {
      // checking arr1 vs arr2
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    // iterating through arr2
    if (arr1.indexOf(arr2[i]) == -1) {
      // checking arr2 vs arr1
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//____________________________________________________________
// delete from array, the given paramenters

function destroyer(arr) {
  let array = arguments[0]; // our array
  let deleteItems = []; // what items to delete
  for (let i = 1; i < arguments.length; i++) {
    // iterate and push delete arguments
    deleteItems.push(arguments[i]);
  }
  return array.filter((number) => deleteItems.indexOf(number) == -1); // filter each item of array. if delete items has an index of number, don't return
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//____________________________________________________________
// from collection, return source's full object

function whatIsInAName(collection, source) {
  let pairs = Object.entries(source);
  return collection.filter((object) =>
    pairs.every(([key, value]) => object[key] === value)
  );
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

//____________________________________________________________
// url slug

function spinalCase(str) {
  let sentence = str.replace(/([a-z])([A-Z])/g, "$1 $2"); // turns a camel case string into a sentence: grab (lower case character) followed by a (upper case character), e.g. sI, all of the cases (g), and return () space () = ..s I..
  let words = sentence.split(" "); // grab a normal sentence into a array of words
  let lowerCase = words.map((word) => word.toLowerCase()); // lowercase words
  let spinalTap = lowerCase.join("-"); // join by dashes
  let finalTouch = spinalTap.replace(/_/g, "-"); // if at this point the string has _, replace it by -
  return finalTouch;
}

console.log(spinalCase("The_Andy_Griffith_Show"));
// the-andy-griffith-show

//____________________________________________________________
//
/*

1. if word starts with consonant, consonant(s) to the end + "ay"

1. if word starts with vowel, add "way" to the end

*/

function translatePigLatin(str) {
  let vowel = /^[aeoiu]/; // defining a word that starts with a vowel
  let consonant = /^[^aeoiu]/; // defining a word that doesn't start with a vowel

  if (vowel.test(str)) {
    // if vowel test is true ...
    return str.concat("way"); // attach "way" to the end
  } else if (consonant.test(str)) {
    // if consonant test is true ...
    return str.replace(/(^[^aeoiu]+)(.*)/, "$2$1").concat("ay");
    // replace regex: begginng at (consonants of 1 or more)(and IF ANY following characters that weren't in the cluster), with putting cluster at the end, swapping positions, and then attach "ay"
  } else {
    return "value not accepted";
  }
}

console.log(translatePigLatin("rhythm"));

// rhythmay

//____________________________________________________________
// replace a string word with a given word, mindind case sensitivity

function myReplace(str, before, after) {
  let wordArray = after.split(" "); // split into array for lowercasing
  let afterLower = wordArray.map((letter) => letter.toLowerCase()).join(); // lowercasing / standarizing replacement word

  let titleCase = /^[A-Z]/; // defining a title case word

  function toTitleCase(str) {
    // titlecasing function
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  if (titleCase.test(before)) {
    // if word to be replace is titlecase ...
    var afterTitleCase = toTitleCase(afterLower);
    return str.replace(before, afterTitleCase); // make replacement titlecase
  } else {
    return str.replace(before, afterLower); // if word to be replace is lowercase, swap it by replacement
  }
}

console.log(myReplace("His name is Tom", "Tom", "john"));
// His name is John
// case sensitive

//____________________________________________________________
// return DNA pairs

function pairElement(str) {
  let dnaArray = [...str]; // dna string paramenter into array

  let pairs = []; // pair storage

  for (let i = 0; i < dnaArray.length; i++) {
    // iterating through dna bases argument
    if (dnaArray[i] == "A") {
      // if base is X,
      pairs.push([dnaArray[i], "T"]); // push [base, respective pair]
    } else if (dnaArray[i] == "T") {
      // other base cases
      pairs.push([dnaArray[i], "A"]);
    } else if (dnaArray[i] == "C") {
      pairs.push([dnaArray[i], "G"]);
    } else if (dnaArray[i] == "G") {
      pairs.push([dnaArray[i], "C"]);
    } else {
      return "not a valid input";
    }
  }

  return pairs;
}

console.log(pairElement("ATCGA"));
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

/*

 A T
 T A

 G C
 C G

*/

//____________________________________________________________
// find missing letter of abc strand

function fearNotLetter(str) {
  let abc = "abcdefghijklmnopqrstuvwxyz".split(""); // an array of the alphabet
  let input = str.split(""); // array of alphabet strand

  let startR = input[0]; // first letter of alphabet strand
  let endR = input[input.length - 1]; // last letter of alphabet strand

  let officialStrand = abc.slice(
    abc.indexOf(input[0]),
    abc.indexOf(input[input.length - 1]) + 1
  ); // target offical alphabet strand, from first letter and last letter range of input

  for (let i = 0; i < officialStrand.length; i++) {
    // iterate throught offical strand
    if (input.indexOf(officialStrand[i]) >= 0) {
    } else if (input.indexOf(officialStrand[i]) == -1) {
      // if input strand letter does not matches offical, return the missing letter
      return officialStrand[i];
    }
  }
}

console.log(fearNotLetter("abcdefghjklmno"));

//____________________________________________________________
// return unique values between N array(s)

function uniteUnique(arr) {
  let values = [];
  for (let i = 0; i < arguments.length; i++) {
    values = values.concat(arguments[i]); // iterate through arguments and concate them into one array
  }
  return [...new Set(values)]; // return only unique values
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//____________________________________________________________
// convert characters into HTML slang

function convertHTML(str) {
  let characters = str.split(""); // make arguments into an array of its characters

  let htmlArray = [];
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] == "&") {
      htmlArray.push("&amp;");
    } else if (characters[i] == "<") {
      htmlArray.push("&lt;");
    } else if (characters[i] == ">") {
      htmlArray.push("&gt;");
    } else if (characters[i] == '"') {
      htmlArray.push("&quot;");
    } else if (characters[i] == "'") {
      htmlArray.push("&apos;");
    } else {
      htmlArray.push(characters[i]);
    }
  }

  return htmlArray.join("");
}

console.log(convertHTML("Dolce & Gabbana"));

//____________________________________________________________
// sum all off fibonacci numbers
// fibonnaci is an array that starts with ... [1, 1, n]
// and then sums the previous two numbers
// fibonacci range 7 = [1, 1, 2, 3, 5, 8, 13]
// return the sum of fibonacci numbers that are <= to num, and that are odd

function sumFibs(num) {
  let fibonacci = [1, 1]; // initial fibonacci set up
  for (let i = 0; i <= num; i++) {
    // iterate throught 0-num
    fibonacci.push(fibonacci[i] + fibonacci[1 + i]); // push index i and i+1, so previous 2 numbers sum, until equal or less than number
  }

  let fiboOdd = [];
  for (let i = 0; i < fibonacci.length; i++) {
    if (fibonacci[i] % 2 != 0 && fibonacci[i] <= num) {
      // if fibonacci is odd and less or equal to num, push it to odd storage
      fiboOdd.push(fibonacci[i]);
    }
  }

  let fiboOddSum = 0;
  for (let i = 0; i < fiboOdd.length; i++) {
    fiboOddSum += fiboOdd[i]; // sum odd storage
  }

  return fiboOddSum;
}

console.log(sumFibs(1));

//____________________________________________________________
// find least common multiple LCM of a given array

function smallestCommons(arr1) {
  let sorted = arr1.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1; // sort the parameter in order
  });

  let range = [];
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    // print the range of numbers between arguments
    range.push(i);
  }

  function gcd(a, b) {
    // GCD (greates common divisor) for LMC formula
    if (b == 0) return a;
    return gcd(b, a % b);
  }

  function findLCM(arr) {
    let lcm = arr[0];
    // initializing answer

    for (let i = 1; i < arr.length; i++) {
      // iterate through range of paramters
      // after i'th iteration,
      lcm = (arr[i] * lcm) / gcd(arr[i], lcm);
    }
    return lcm;
  }

  return findLCM(range);
}

console.log(smallestCommons([13, 1]));
// log 360360

//____________________________________________________________
// flatten an array

function steamrollArray(arr) {
  console.log(...arr); // returns the array as nested elements => 1 [ 2 ] [ 3, [ [ 4 ] ] ]
  let flat = [].concat(...arr); // return array, and attach to it the ...arr array
  let superFlat = [].concat(...flat); // do the same, but deeper
  let hyperFlat = [].concat(...superFlat); // do the same, but deeper
  return hyperFlat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
// [1, 2, 3, 4]

//____________________________________________________________
// binary code to english

console.log(parseInt("01000001", 2)); // parseInt converts string to binary number (65), parameters: string, radix
console.log(String.fromCharCode(65)); // String.fromCharCode is an inventory of characters, in this case 65 = A

function binaryAgent(str) {
  let words = str.split(" "); // split into an array of binary words

  let secrets = words.map((item) => String.fromCharCode(parseInt(item, 2))); // maps items and convert them into words
  return secrets.join(""); // join array
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

//____________________________________________________________
// check if certain values are ===true for all properties
// in this case: check if name is true for all objects

function truthCheck(collection, pre) {
  // predicade
  let values = []; // storage of predicade values
  for (let i = 0; i < collection.length; i++) {
    // iterate throght collection
    values.push(collection[i][pre]); // push collection[0][names]
  }
  let positivity = values.every((item) => !!item); // are all values true? => !!element
  return positivity; // true
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ], // collection
    "name" // test property
  )
);

//____________________________________________________________
// optional arguments, if 2 arguments, sum them, if 1 argument, return a function that sums it with a later argument (topic: currying)

function addTogether(x) {
  if (
    arguments.length == 1 && // if only 1 arguments is provided
    typeof x === "number" && // and it is a number
    Array.isArray(x) != true // and it is not an array
  ) {
    return function (y) {
      // run a function with the second argument
      if (Array.isArray(y) != true) {
        // only if that argument is not an array
        return x + y; // return first argument + second argument
      }
    };
  } else if (
    //
    arguments.length == 2 && // if 2 arguments are provided
    typeof arguments[0] === "number" &&
    typeof arguments[1] === "number" && // and both are numbers
    Array.isArray(arguments[1]) != true // and second arguments is not an array
  ) {
    return arguments[0] + arguments[1]; // return their sum
  } else {
    return undefined; // else, undefined
  }
}

console.log(addTogether(2)([7]));

//____________________________________________________________
// Name changer

const Person = function (firstAndLast) {
  //  object constructor, parameter is first and last name
  let fullName = firstAndLast; // our global variable

  this.getFullName = function () {
    return fullName; // return full name
  };
  this.getFirstName = function () {
    return fullName.split(" ")[0]; // split name to first and last, and return first
  };
  this.getLastName = function () {
    return fullName.split(" ")[1]; // split name to first and last, and return last
  };
  this.setFirstName = function (first) {
    fullName = first + " " + this.getLastName(); // modify global variable, to input(first) + the lastNameFunction();
  };
  this.setLastName = function (last) {
    fullName = this.getFirstName() + " " + last;
  };
  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast; // set global variable to new argument
  };
};

const bob = new Person("Bob Ross"); // new object; parameter first and last name
bob.setFirstName("Haskell"); // run function to change first name
console.log(bob.getFullName()); // run function to get full name => Haskell Ross

//____________________________________________________________
// 

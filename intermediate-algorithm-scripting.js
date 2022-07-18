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
//


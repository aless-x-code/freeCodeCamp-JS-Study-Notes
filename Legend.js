// inline comment
/* multi-line comment */

/*

JavaScript provides 8 different data types:

undefined = no value assigned
null = one value, null, boolean=false, intentional abscene/void of value
boolean = logical, true or false
string = between quotes
symbol =
bigint =
number = numeric data
object =

*/

var catName = "Oliver"; // var values might be mistakenly changed, var won't give any error
var catSound = "Meow!";

let catName = "Oliver"; // using let allows only one variable to use that value (introduced in ES6, major JS update)
let catSound = "Meow!";

const FCC = "freeCodeCamp"; // const = constant value (no update/re-declare), read only(cannot be overwritten or assigned to)
let fact = "is cool!";
fact = "is awesome!"; // let can be updated, but not re-declared
console.log(FCC, fact); //

let x = 87;
myVar = myVar + 1; // increment 1 to the variable
myVar++; // shorthand ++ (increment one to the variable)
myVar += 1

const myDecimal = 10.9; //decimals = floats. computer, due to space and data, have a finite precision on long long decimal, may skew mathematical operations

let y = 17 % 2; // remainder, the remaining per sei, 17/2 = 8 quotient, 8 * 2 = 16 = 1 remainder
y = 48 % 2; // remainder 48/2=24, 24*2=48, =0 remainder

let w = 9;
w = 5 + w; // = 14

let p = 9;
p += 5; // shorthand = 14

const myStr = 'I am a "double quoted" string inside "double quotes".'; // to use literal quote marks inside strings, use \"_____\"  [ \ is the escape key]

const bb = '<a href="http://www.example.com" target="_blank">Link</a>'; // when " or ' meet with a naked alike, it will close, prevent this by using \ escape
const cc = '<a href="http://www.example.com" target="_blank">Link</a>'; // or, manipulate " or ' marks

/* other escape keys:
\'	single quote
\"	double quote
\\	backslash ____LOL, literally escpaing the backslash itself
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/

const dd = "FirstLine SecondLine Thirdline";
/* 
instead of FirstLine SecondLine Thirdline, we want

FirstLine
    \SecondLine
ThirdLine

*/
const ee = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

const fd = "This is the start. " + "This is the end."; // + = concatenate operator on strings
let dfg = "This is the first sentence. ";
dfg += "This is the second sentence.";

const myName = "Alessandro";
const mysent = "My name is " + myName + "and I am well!";

const someAdjective = "exiting!";
let ppol = "Learning to code is ";
ppol += someAdjective;
// Learning to code is exiting!

// .lenght gives you the lenght of a string (Aida = 4)
// counts from 1 and onward (nor zero based)
// x = "Aida my love"
// x.lenght = 12

// [] allows us to find a character in a tring, starting at 0
// in JS, you can't change a string character, you'd have to re-assign a value to the variable
// x = "Jello World"
// x[0] = "H" (Not allowed)

// Last character

const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
// e

const pedo = "Lovelace";
const secondToLastLetterOfLastName = pedo[pedo.length - 2];
// c (0 is not counted, because zero is only when counting from the begging)

const myArray = ["VTSAX", 1]; //arrays [] can store multipe values

const teams = [
  ["Bulls", 23],
  ["White Sox", 45],
]; //multiple arrays in one; multi-dimensional array

const kk = [50, 60, 70]; // access arrays with indexes, same as characters
const myData = kk[0];

const m = [18, 64, 99];
m[0] = 45; // In strings, you can't re-declare values. But on arrays, you can, even if name const
// [45, 64, 99]

const arr = [
  // multidimensional array = an array of arrays (List of items)
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

arr[3]; // [[10, 11, 12], 13, 14]
arr[3][0]; // [10, 11, 12]
arr[3][0][1]; // [11]

const kol = [
  ["John", 23],
  ["cat", 2],
];
kol.push(["dog", 3]); //append data at the end of an array
// ["John", 23]["cat", 2]["dog", 3]

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop(); // .pop() removes the last element from an array, and you can store it another variable

console.log(oneDown); // [6]
console.log(threeArr); // [1, 4]

// If you want to the same thing with the first data point, use .shift
// If you want to add a element at the front, you can use .unshift

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // remove Stimpson
ourArray.unshift("Happy"); // add at front Happy
// "happy" "j" "cat"

function x() {
  // giving x function a part
  console.log("Hi World");
}

x(); // re-using X

function yh(param1, param2) {
  // parameter are placeholders
  console.log(param1 + param2);
}
yh(1, 1); // inputs are arguments

function timesFive(num) {
  return num * 5; // return argument with the condition
}
timesFive(5);

function fun1() {
  secretcode = 5; // variables declared without let or const will appear global scope, rather than local
}
// secretcode: 5 (GLOBAL SCOPE)

function myTest() {
  const loc = "foo"; // declared variables inside a funtion will have LOCAL SCOPE within the function
  console.log(loc);
}

myTest(); // will work = "foo"
console.log(loc); // will not work, varible is within function

// Local varibles will preceed global varibales
const outerWear = "T-Shirt";

function outfit() {
  const outerWear = "Sweater";
  return outerWear;
}
oufit();
// Sweater

let sum = 0; // sum = 0

function addFive() {
  //function name addFive()
  sum += 5; // variable sum add 5
}
// undefined (functions with no "return" or direction will be undefined)

let processed = 0; // let declared can be updated
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7); // processed = 2

function q(canditateQualifies) {
  if (canditateQualifies) {
    return "Canditate qualifies";
  }
  return "Candidate does not qualify";
}
q(true); // "Candidate qualifies". if statements will only execute when argument is true
q(false); // "Candidate does not qualify". if statement will not execute when argument is false

// == represents equaility, when equal=true, when not equal=false
/*
1   ==  1  // true
1   ==  2  // false
1   == '1' // true  Type conversion
"3" ==  3  // true  Type conversion


1 = true
0 = false


*/

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
equalityTest(13);
// false

// === strict equality
// no type conversion
// "3" === 3 False

// != not equal
// "3" != 1 true
// "3" != 3 false

// !== strictly not equal ( no type conversions)
// 3 !== 2 true
// 3 !== "3" true
// 3 !== 3 false

// if true and only if true = execute
// if &&(and) if
function test(num) {
  if (num > 5) {
    if (num < 10) {
      // this also applies as &&
      return "Yes";
    }
  }
  return "No";
}

// &&

function kiwi(num) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
}

// logical operator or =  ||
function xyz(num) {
  if (num > 10) {
    return "No"; // "or"
  }
  if (num < 5) {
    return "No"; // "or"
  }
  return "Yes";
}

function xyxx(num) {
  if (num > 10 || num < 5) {
    return "No";
  }
  return "Yes";
}

function iop(num) {
  if (val > 5) {
    // if true execute code
    result = "Bigger than 5";
  } else {
    // if not true, execute alternative
    result = "5 or Smaller";
  }
}

// else if is an alternative to be run when true, followed by else, an  alterantive to false else if
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    // alternatively, if val < 5
    return "Smaller than 5";
  } else {
    // alternatively ...
    return "Between 5 and 10";
  }
}

/* you can chain various if, else if, else statements 

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

*/
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change Me";
  }
}
testSize(17);
// "Large"

//  switch statement can be easier to write than many chained if/else if statements
// switch and cases
function caseInSwitch(val) {
  let answer = "";
  switch (
    val // switch tests an argument and executes the matched case
  ) {
    case 1:
      answer = "alpha";
      break; // stop execution here, otherwise keep executing
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
caseInSwitch(1);
// alpha

// you can use default as a case that will execute if no case is matches, similar to final else statement

// Objects, similar to arrays, but here you store data in properties / variables
const cat = {
  name: "Whiskers",
  "legs or feet": 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
  86: "sympathy",
};
// JavaScript will typecast all properties as strings
// You don't have to use quote marks for single word properties within the array

//You can access objects with [] like in arrays, or with (.)
const x = cat.enemies[("Water", "Dogs")];
// If the property has a space, you'll have to use []
const yjk = cat["legs or feet"];

const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
const playerNumber = 16;
const player = testObj[playerNumber]; // testObj[value of playerNmber(16)]

// ________________________________

const someObj = {
  // we are giving this variable/object ..
  propName: "John", // this property and value
};

function propPrefix(str) {
  // creating a function called propPrefix that takes a string
  const s = "prop"; // creating a var with a "prop" value
  return s + str; // return s value "prop" + the string argument of the function
}

const someProp = propPrefix("Name"); // a new var called someProp which contains the function propPrefix with the string argument "Name"; which gives us "prop"+"Name"="propName"
console.log(someObj[someProp]); // from someObj object var, take someProp = "propName" = "John"

// change a object property
const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog["name"] = "Happy Coder";
// another way to do it is
myDog.name = "happy Coder";
// add objects and properties
myDog.bark = "woof";
// delete them
delete myDog.tails;

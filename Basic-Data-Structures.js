// Splice()
// takes a range parameter to delete elements from an array
// counts from zero

let array = ["I", "am", "feeling", "really", "happy"];
let newArray = array.splice(3, 2);
//  ['really', 'happy']

//____________________________________________
// Adding items using splice()

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

// ( index at which beging deleting items, how many items, and what to add)
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
[10, 11, 12, 13, 14, 15];

//____________________________________________
//

function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

// console
["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"];

//____________________________________________
// slice()
// copies elements from an array to another, leaving original array untoched
// take only 2 parameters. Beggining range, and ending range (won't copy the ending range index)

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather = ['snow', 'sleet']

//____________________________________________
// copy ALL elements from  an array with the spread operator ( ... )

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

//____________________________________________
// Combine arrays with spread operator
// can add it at any index

let thisArray = ["sage", "rosemary", "parsley", "thyme"];
let thatArray = ["basil", "cilantro", ...thisArray, "coriander"];

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}
console.log(spreadOut());

//____________________________________________
// Check for an element with indexOf()
// returns index (position) of element, or -1 if it doesn't exist

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
fruits.indexOf("dates"); // -1
fruits.indexOf("oranges"); // 2
fruits.indexOf("pears"); // 1

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) == -1) {
    return false;
  } else {
    return true;
  }
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//____________________________________________
// objects
//  key-value pairs

let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};
nestedObject.data.onlineStatus.busy = 10;

//____________________________________________
// Iterate Through the Keys of an Object with a for...in Statement
// object KEYS don't have an order (or index [x]) like arrays do

let users0 = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

for (let user in users0) {
  console.log(user);
}
// variable user will be reset after end of iteration

// count online users
const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  let usersOnline = 0;
  for (let user in users) {
    if (usersObj[user].online == true) {
      usersOnline += 1;
    } else {
      usersOnline += 0;
    }
  }
  return usersOnline;
}

console.log(countOnline(users));


//____________________________________________
// 
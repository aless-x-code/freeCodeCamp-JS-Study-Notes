var myConcat = function (arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// arrow function
const myConcat = (arr1, arr2) => arr1.concat(arr2);

var magic = function () {
  return new Date();
};

// arrow 
const magic = () => new Date();


// arrow                   //default
const greeting = (name = "Anonymous") => "Hello " + name;


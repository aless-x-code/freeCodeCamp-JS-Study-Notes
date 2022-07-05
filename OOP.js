//_______________________________________________________
// object constructor
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

function Dog(name, color) {
  // constructor function that takes parameters
  this.name = name; // this = parent object
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Richard", "Black and White"); // creating a new object terrier, using new Dog object, and its parameters

console.log(terrier);

//_______________________________________________________
// verify origin, instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(2);

console.log(myHouse instanceof House); // true

//_______________________________________________________
// Own properties and how to verify them

function Bird(name) { // constructor w/ parameters
  this.name = name; // own/original properties
  this.numLegs = 2;
}

let canary = new Bird("Tweety"); // new object, name canary
let ownProps = []; // where we will store the propertie retrived

for (let property in canary) { 
  if (canary.hasOwnProperty(property)) { //iterates throught it properties
    ownProps.push(property); // push to storage
  }
}

console.log(ownProps); // print storage

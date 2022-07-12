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

function Bird(name) {
  // constructor w/ parameters
  this.name = name; // own/original properties
  this.numLegs = 2;
}

let canary = new Bird("Tweety"); // new object, name canary
let ownProps = []; // where we will store the propertie retrived

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    //iterates throught it properties
    ownProps.push(property); // push to storage
  }
}

console.log(ownProps); // print storage

//_______________________________________________________
// prototype properties to reduce duplicade code

function Dog(name) {
  this.name = name; //own property
}
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4; // prototype
// all dogs we add will all have the same key and value of legs and 4. Instead of using up space for millions of dog object having the leg variable, we use assign the prototype, it remains hidden, and called when using ( object.prototype )

console.log(beagle);
console.log(beagle.numLegs);

//_______________________________________________________
// print own properties and prototpies ones

let ownProps2 = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps2.push(property);
  }
}

console.log(ownProps, prototypeProps2);

//_______________________________________________________
// check origin with .constructor

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    // if the object constructor's os Bird == true
    return true;
  } else {
    return false;
  }
}

//_______________________________________________________
// creating prototype properties

Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log("chow chow");
  },
  describe: function () {
    console.log("This dog is called " + this.name);
  },
};

//_______________________________________________________
// overriding .constructor

// after manually setting properties with Dog.prototype, the .constructor will be overwritten

beagle.constructor == Dog; //false

// However, instaceof, will not

beagle instanceof Dog; // true

// to fix this, add a line of property to the prototype creatior funtion

constructor: Dog; // (not semicolon, but comma)

//_______________________________________________________
// Inheriting prototypes

// new objects will inheret the prototypes of their parent's, when used as constructors

let salchica = new Dog("Jack");
//inherits Dog's prototypes

Dog.prototype.isPrototypeOf(salchicha);
// is Dog's prototypes a property of salchicha?
// true

//_______________________________________________________
// Prototype chain of command

// all objects in JS have a prototype
// prototype themselves are object, thus, they themselves have protottypes
typeof Dog.prototype;
//=
Object.prototype;

Object.prototype.isPrototypeOf(Any.prototype);
// true

object; // supertype to all
Dog; // supertype to constructs
beagle; // subtype of the constructor base

//_______________________________________________________
// Don't Repeat Yourself (DRY)

// so you can change multiple lines of code at the same time

function Cat(name) {
  // object constructor function
  this.name = name;
}

Cat.prototype = {
  // cat's prototype constructor function, all cat's constructs will have it embedded and hidden
  constructor: Cat,
  /* eat: function() {
    console.log("nom nom nom");
  }
  */
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  /* eat: function() {
    console.log("nom nom nom"); 
  } */
};

function Animal() {} // another constructor formula, will be store "eat" property

Animal.prototype = {
  // prototype proterty of Animal constructor
  constructor: Animal, // permanently linking constructor
  eat: function () {
    console.log("nom nom nom");
  },
};

//_______________________________________________________
// Assigning prototypes to objects

let beagle1 = Object.create(Animal.prototype); // we are making an object COPY of the animal.prototype property and assigning it a variable

// setting the animal.prototype to an object

// first, assign it to the supertype

Dog.prototype = Object.create(Animal.prototype);

// now, the subtype object inherits it

let beagle3 = new Dog();

//_______________________________________________________
// prototype inherited constructors

// when you create a subtype from a supertype with a prototype constructor, it will inherit that as a constructor, e.g.

console.log(beagle.constructor);
// Animal

// to reset it ...

Dog.prototype.constructor = Dog;
// supertype.prototype's constructors = supertype
// you can write that in the open

//_______________________________________________________
// Adding own methods to objects
// besides inherited prototypes, you can assign objects their own

Dog.prototype.bark = function () {
  console.log("Woof!");
}; // it will only embebbed in Dog constructs, as bark

//_______________________________________________________
// overriding inherited methods

// you just create another method for that object, using the inherited protperty name

Dog.prototype.eat = function () {
  return "gulp gulp";
};

//_______________________________________________________
// Adding selected methods to unrelated objects, avoiding inheriting all properties
// Mixin

let flyMixin = function (obj) {
  // Mixin function takes an object and gives it the fly method / property
  obj.fly = function () {
    // then, object's property should = console.log ...
    console.log("Flying, wooosh!");
  };
};

flyMixin(bird); // giving fly property to bird object

console.log(bird.fly()); // Flying, wooosh!

let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("sssshiiiissss, oooouuuuuuu");
  };
};

glideMixin(bird);
glideMixin(boat);

console.log(bird.glide(), boat.glide());

//_______________________________________________________
// Preventing values inside object from being modified

// values inside object can be modified externally, e.g.
user1.password = "its_now_my_password_buahahaha";
// this are called public properties, since it can be accessed and changed from the outside

function Passwords() {
  //constructor
  let password = 1234; // key and value

  this.getPassword = function () {
    // this will be used in this exercise to return the local variable
    return password;
  };
}
let user745Password = new Passwords(); // new object using constructor
user745Password.password = 1111; // attempting to change password
console.log(user745Password.getPassword()); // 1234
// usucssesful becuase can't access local/private varibale


//____________________________________________________________
// Understand the Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("Chirp, chirp!");
})();

// this will console.log immediatly
// the specific point at which it runs is at the double parentesis at the very end of the function "()"

// it will be runnned, without being defined, or assigned a varibale
// without a variable, it will be an annonymus function

//____________________________________________________________
// 



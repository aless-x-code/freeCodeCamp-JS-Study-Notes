// CONSTRUCTOR FUNCTION (objects)
let SpaceShuttle = function (targetPlanet) {
  // varibale "SpaceShuttle" has a function called "targetPlanet", that take a planet as parameter
  this.targetPlanet = targetPlanet; // this code create a new object (this.x as property, and = y as value)
};
let zeus = new SpaceShuttle("Jupiter"); // we create NEW object with property targetPlanet and value Jupiter. [use the new keyword to instantiate an object]
console.log(zeus);
// { targetPlanet: 'Jupiter' }

//_________________________________________________
let ChelseaPlayers = function (newPlayer) {
  this.newPlayer = newPlayer;
};
let season2022 = new ChelseaPlayers("Neymar");
console.log(season2022);

//_________________________________________________
// CLASS AND CONSTRUCTOR
class SpaceShuttle1 {
  // class = a function named SpaceShuttle1
  constructor(targetPlanet) {
    // PROPERTY
    // constructor = is a method for creating a new object
    this.targetPlanet = targetPlanet; // this.property = value;
  }
}
const zeus1 = new SpaceShuttle1("Jupiter"); // we call SpaceShuttle1 function with Jupiter
//_________________________________________________

class ChelseaWomensPlayers {
  constructor(newPlayerFemale) {
    this.newPlayerFemale = newPlayerFemale;
  }
}
let season2023 = new ChelseaWomensPlayers("Tammy");
console.log(season2023);

//________________________________________
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter (hides property, returns value)
  get writer() {
    return this._author;
  }
  // setter (hides property, returns value)
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("Socrates"); // create new object element _author = Socrates
console.log(novel.writer); // get function = Socrates
novel.writer = "Homer"; // set function, modifies the value of a property
console.log(novel.writer); // Homer


//________________________________________

// Array  of objects
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) { 
    for (let i = 0; i < contacts.length; i++) { // iterates throught parent, i(0 1 2 3)
      if (contacts[i].firstName === name) { // A: if position i.firstName = name.... then....
        if (contacts[i].hasOwnProperty(prop)) { // B: does it have the property, if so, if not ...
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact"; // A: if not, it won't run and "No such contact"
  }
  
  console.log(lookUpProfile("Sherlock", "number"));
  
  
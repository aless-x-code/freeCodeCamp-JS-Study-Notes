//  Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

// .test()
//______________________________________________
// .test() grabs the regex and test it wihtin a string, if a match true, if not false
// .test() is case sensitive

let myString = "Hello, World!";
let myRegex = /Hello/; // regular expression
let result = myRegex.test(myString); // true

//______________________________________________
// .test with or |
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result1 = petRegex.test(petString);

//______________________________________________
// upper or lower case, the i flag
let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // i flag
let result2 = fccRegex.test(myString1);

//______________________________________________
// Extract with .match()

"My name is Alessandro".match(/Alessandro/); // ["Alessandro"]

let address = "3866 Jameson St, Atlanta, NG";
let regExpre = /Atlanta/;
let findings = address.match(regExpre); // ["Atlanta"]
// notice the difference with .test() == let result = myRegex.test(myString);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result3 = extractStr.match(codingRegex);

//______________________________________________
// previous regex synthax allows only to find once
// use g flag to find all matches

let worldCupWinners = "France, Italy, Italy, Germany, US, Italy";
let italy = /Italy/g;
console.log(worldCupWinners.match(italy));
// [Italy. Italy, Italy]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result4 = twinkleStar.match(starRegex);

//______________________________________________
// . wildcard
// match all words start with a character(s)

let exampleStr = "run, sun, fun, pun, nun, and bun";
let unRegex = /un./;
let result5 = unRegex.test(exampleStr);
// will match all of them

//______________________________________________
// [] match certain characters only

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result9 = quoteSample.match(vowelRegex);
/*
[ 'e',
'a',
'e',
'o',
'u',
'i',
'e',
'a',
'o',
'e',
'o',
'e',
'I',
'a',
'e',
'o',
'o',
'e',
'i',
'o',
'e',
'o',
'i',
'e',
'i' ]
*/

//______________________________________________
// ( - ) range of characters

let bgRegex = /[a-e]at/;
let exampleRegex = /[a-z0-9]/gi;

let quoteSample4 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi;
let result19 = quoteSample.match(myRegex);

//______________________________________________
// characters that I don't want to match
// negated character sets

let quoteSample33 = "3 blind mice.";
let myRegex45 = /[^0-9aeiou]/gi; //
let result73 = quoteSample.match(myRegex);

////______________________________________________
// find characters that occur one or more times within a uncut string
// string of character must be consecutive

/a+/g;
// in "alpha, kilo", would return ["a"]
// in "aaaahhh", would return ["aaaa"]
// in "alphabet", would return ["a", "a"], because characters are not in a row

let difficultSpelling = "Mississippi";
let myRegex54 = /s+/gi;
console.log(difficultSpelling.match(myRegex));
// [ 'ss', 'ss' ]

//______________________________________________
// * matches characters that occur zero or more times

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
// would return ["goooooooo"], ["g"] because of "go", and null.

// Aaaaaaaaaaaaaaaarrrgh!
let chewieRegex = /Aa*/;
let result87 = chewieQuote.match(chewieRegex);

//______________________________________________
// Find Characters with Lazy Matching

/t[a-z]*i/; // default; starts with t, any character, * any times, ends with i
// titani

// /t[a-z]*?i/ lazy; start with t, any character that meets first, any times that meet first (?), ends with i
// ti

//______________________________________________
// Match Beginning String Patterns
// ^ is also used to find wheter or not a value is at the biggining of a string

let x = "Ricky like mayo";
let regex = /^Ricky/;
regex.test(x); // true

let y = "mayo is something Ricky likes";
regex.test(y); // false ("Ricky is not first")

//______________________________________________
// Match Endings

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // false

//______________________________________________
// Match ALL letters and numbers shortcut
//     \w is = [A-Za-z0-9_] (note it alos includes underscore _), and upper/lower case
/\w/g

// \w opposite is \W (all NON letters and numbers) ([^A-Za-z0-9_]) = @#$%& etc
let test = /\W/;

// all numbers = \d
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
console.log(movieName.match(numRegex).length)
// 4

// all NON numbers = \D

//______________________________________________
// restrict possible usernames








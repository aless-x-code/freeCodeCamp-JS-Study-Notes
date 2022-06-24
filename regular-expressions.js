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
// must occur 1 or more times. E.g aa+ in (aahh, alpha, amazon, amazing, aaos, aakiaak) will be true only in (aahh, aaos, aakiaak)

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
// that occurs zero or more times. eg. f* in (falcon, ballon, fake) will return true for all

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
/\w/g;

// \w opposite is \W (all NON letters and numbers) ([^A-Za-z0-9_]) = @#$%& etc
let test = /\W/;

// all numbers = \d
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
console.log(movieName.match(numRegex).length);
// 4

// all NON numbers = \D

//______________________________________________
// matching whitespace or spaces between letters, and also carriage return, tab, form feed, new line characters
// ( \s )

let phrase = "He was very smart";
let findRegex = /\s/g;
phrase.match(findRegex); // [" ", " ", " "]

// Everything expect whitespace = \S
// will not match whitespace, carriage return, tab, form feed, and new line characters

let findRegex2 = /\S/g;
phrase.match(findRegex2).lenght; // 14
phrase.match(findRegex2);
/*
["H",
"e",
"w",
"a",
.......
]
*/

//______________________________________________
// Quantity specifiers {}
// 2 numbers in the {}, for the lower and upper range of matches
// e.g. to match aaaah would be /a{3,5}h/

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/gi; // match o h(3-6 times) whitespace no (upper/lower case, as many times)
let result7 = ohRegex.test(ohStr);

// Only specificing one range {X,} or {,X}

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result55 = haRegex.test(haStr);

// Only specificing a single times it repeats {X}

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result99 = timRegex.test(timStr);

//______________________________________________
// Check for possible existence of an element with a question mark ( ? )
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/; // [ u? ] Return if it exists, or also if it doens't
// colo[]r, or colo[u]r
rainbowRegex.test(american); // true
rainbowRegex.test(british); // true

let favWord = "favorite";
let favRegex = /favou?rite/;
let result22 = favRegex.test(favWord);

//______________________________________________
// Positive and Negative Lookahead
// looks ahead in the string for matches
// Positive (?=pattern) : requires element to match a pattern, but won't return that pattern, just checking
// Negative (?!pattern) : requires pattern not to be matched

let quit = "qu";
let quRegex = /q(?=u)/;
console.log(quit.match(quRegex)); // q

let noquit = "qu";
let qRegex = /q(?!u)/; // null, it does have u
console.log(noquit.match(qRegex));

let noquit1 = "qz";
let qRegex1 = /q(?!u)/; // q, it does not have u
console.log(noquit.match(qRegex1));

let password = "abc123";
let checkPass = /(?={3,6})(?=\D*\d)/; // (it must have all characters * 3-6)(it must have non-numbers 0 or more times -- and one number)
checkPass.test(password);

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D{3}\d+)/; // Change this line
let result74 = pwRegex.test(sampleWord);

//______________________________________________
// Check for mixed groupings

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr); // TEST

let myString4 = "Franklin D. Roosevelt"; //Check for first + last name, optional middle name
let myRegex4 = /^(Eleanor|Franklin)(\s*)(.*)(\s)Roosevelt$/; // (Eleanor or Franklin)(0 or more space)(0 or more all character (D.)(Darwin))(mandatory space(will be there either way)(Roosvelt last name)) (case sensivite)
let result44 = myRegex.test(myString);

//______________________________________________
// Reuse patterns w/ Capture groups
// Capture groups can be used to find repeated strings
// constructed by enclosing the regex pattern to be captured in parentheses ()
// /(\w+)/

let repeatNum = "42 42 42";
let reRegex0 = /^(\d+) \1 \1$/; // Change this line
let result11 = reRegex.test(repeatNum);

let testString1 = "test test test";
let reRegex1 = /(test)(\s)\1\2\1/;
let result144 = reRegex.test(testString);

let testString2 = "test test test test test test";
let reRegex2 = /(test)(\s)\1\2\1/g;
let result53 = reRegex.test(testString);

// Capture groups to search and replace
let address4 = "123 James St Apt 5F, Juniper, MV 11534";
let changeText = /5F/;
console.log(address.replace(changeText, "8C"));

console.log("Suliver Susan".replace(/(\w+)\s(\w+)/, "$2 $1"));
// Susan Suliver

let str = "one two three";
let fixRegex = /(\w+)(\s)(\w+)\2(\w+)/;
let replaceText = "$4 $3 $1";
let result52 = str.replace(fixRegex, replaceText);

//______________________________________________
// Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /(\s+)(\s+)/;
let result83 = hello.replace(wsRegex, "").replace(wsRegex, "");
console.log(result);

let hello896 = "   Hello, World!  ";
let wsRegex896 = /^\s+|\s+$/g; // Change this line
let result896 = hello.replace(wsRegex, ""); // Change this line
console.log(result);

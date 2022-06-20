// do...while loop will first run code inside NO MATTER WHAT, and then continue to run the loop while the specified condition evaluates to true


const ourArray = []; 
let i = 100; 

do {
  ourArray.push(i); // push i will happen = [100]
  i++; // then i+1 will happen = 101
} while (i < 5); // and continue to run while i < 5


const myArray = [];
let a = 10;
do { 
  myArray.push(a);
  a++;
} while (a < 5);
// [10]


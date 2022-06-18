// most common type of JavaScript loop is called a for loop because it runs for a specific number of times

/* 
For loops are declared with three optional expressions separated by semicolons:

for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

1. initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

2. condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true

3. The final expression is executed at the end of each loop iteration,

*/

const ourArray = [];
for (let i = 0; i < 5; i++) {
  // we have 0, true condition, execute, then final expression, repeat
  ourArray.push(i);
}
// 0 1 2 3 4

const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
// 1 2 3 4 5

const oneArray = [];
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
// 1 3 5 7 9

const twoArray = [];
for (let i = 9; i > 0; i -= 2) {
  // grab 9. condion check (true), execute(push), substract 2(7), repeat
  myArray.push(i);
}

const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) { // grab 0, 0<5(true), print arr[0](iterate extract, first position), then add +1( =1). Then keep going until x<5==false
  console.log(arr[i]);
}

const myArr = [2, 3, 4, 5, 6];
let total = 0; 
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

/* iterate throught all elements 

let i = 0; i < myArr.length; i++
0; 0 < lenght of the array; 1
position[0]


*/

// 0 < 4
// total = total + 2 = 2
// i = 1

// 1 < 4
// total = 2 + 3 = 5
// i = 2

// 2 < 4 
// total = 5 + 4 = 9
// i = 3

// total = 20




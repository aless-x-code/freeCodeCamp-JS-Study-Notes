// The parseInt() function parses a string and returns an integer. Here's an example:
const a = parseInt("007");
// 7

Input: let n = parseInt("2018@geeksforgeeks");
Output: n = 2018
parseInt("geeksforgeeks@2018") = NaN // It returns NaN on Non numeral character
parseInt("3.14") = 3
parseInt("21 7 2018") = 21 // It returns only first Number it encounters

// Number Systems
/* 
Bundle type system of counting stacks of numbers

______________BASE 10 (Decimal)_________________________________________
      2        3        1         = 321
  Hundreds   Tens     Ones
    200   +   30   +    1

______________BASE 2 (Binary)_________________________________________
What computer use, 0 1

______________Base 8 (Octadecimal)_______________________________________
0 1 2 3 4 5 6 7

______________Base 16 (Hexadecimal)_______________________________________
0 1 2 3 4 5 6 7 8 9 A B C D E F



______________10 to 2_________________________________________
Divide by 2
      44  =  01100(2)
44 / 2 = 22  R0  (Remainder: multipling result by 2)
22 / 2 = 11  R0
11 / 2 = 5   R1
5 / 2 = 2    R1
2 / 2 = 1    R0 
              ^

______________10 to 8_________________________________________
Divide by 8

  348 =         534(8)
  348 / 8 = 43 R4
  43 / 8 =  5  R3
  5 / 8 =   0  R5


______________10 to 16_________________________________________
Divide by 16

348 =  15C(16)

348 / 16 = 21  R12  (C)
21 / 16 =  1   R5
1 / 16 =   0   R1

*/


// It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36
// Default is 10
parseInt(string, radix);

parseInte("11", 2); // string "11" is integer 11 in binary = 3 decimal





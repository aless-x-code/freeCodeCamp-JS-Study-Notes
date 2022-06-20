// can be used as a one line if-else expression

//       condition ? T : F
//        x > y    ?   "x is greater" : "y is greater or equal"

function findGreater(a, b) {
  if (a > b) {
    return "a is greater";
  } else {
    return "b is greater or equal";
  }
}

function findGreaterTernary(val1, val2) {
  return val1 > val2 ? "a is greater" : "b is greater or equal";
  //   condition ?    T                     F
}

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);

function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal" // if true
    : a > b
    ? "a is greater" // if not, another condition.. if true
    : "b is greater"; // if not
}

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);

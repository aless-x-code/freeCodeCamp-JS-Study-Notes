//____________________________________________________________
// Sum All Numbers in a Range

function sumAll(arr) {
  arr.sort(function (a, b) {
    // arr will now be sorted
    return a === b ? 0 : a > b ? 1 : -1;
  });
  let sumArray = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    // return arr[0] - arr[1] range
    sumArray.push(i);
  }
  return sumArray.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll([10, 5]));

//____________________________________________________________
// asymmetric difference between arrays

function diffArray(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    // iterating through arr1
    if (arr2.indexOf(arr1[i]) == -1) {
      // checking arr1 vs arr2
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    // iterating through arr2
    if (arr1.indexOf(arr2[i]) == -1) {
      // checking arr2 vs arr1
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//____________________________________________________________
// delete from array, the given paramenters

function destroyer(arr) {
  let array = arguments[0]; // our array
  let deleteItems = []; // what items to delete
  for (let i = 1; i < arguments.length; i++) {
    // iterate and push delete arguments
    deleteItems.push(arguments[i]);
  }
  return array.filter((number) => deleteItems.indexOf(number) == -1); // filter each item of array. if delete items has an index of number, don't return
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

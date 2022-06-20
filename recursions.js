// Recursions
// A functions that calls / repeat itself within looping elements, until meet exit condition

// Good for reaching in trees, graphs,
// Using if, else if, while. for, will be a nightmare. You'll have to input [][], and numbers

// fcc exercise

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

// print out all children
function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return;
  }
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

// COUNTDOWN_______________________

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const count = countup(n - 1);
    count.push(n);
    return count;
  }
}
console.log(countup(5));

/* 
function countUp(5) {
  if (5 < 1) {
    return [];
} else {
  const count = countUp(4);
    function countUp(4) {
      if (4 < 1) {
        return [];
      } else {
        const count = countUp(3);
          function countUp(2) {
            if (2 < 1){
              return [];
            } else {
              count = countUp(1);
                function countUp(1) {
                  if (1 < 1) {
                    return [];
                  } else {
                    count = countUp(0);
                      function countUp(0) {
                        if (0 < 1) {
                          return [];
                            // CONSOLE = []
                    count.push(1);
                    return count;
                    // CONSOLE = [1]
              count.push(2);
              return count;
              // CONSOLE = [1, 2]
              
            // so on...
            //CONSOLE = [1, 2, 3, 4, 5]
                        }
                      }
                  }
                }
            }
          }
      }
    }
}
*/

function countup(n) {
  if (n < 1) {
    return []; // 2. when false (0), an array will be returned. Then function will be exited and go back to n=1 function
  } else {
    const count = countup(n - 1); // 1. function will keep run the previous lines until false
    count.push(n); // 3. the last function (n=1) will exit prev line and continue to the next line, where it will push 1 into the array
    return count; // 4. return array
  }
}
// n=1 function will end, and return to n=2's next line; count.push(2)
console.log(countup(5));

/// COUNTDOWN in range

function rangeOfNumbers(startNum, endNum) {
  if (endNum <= startNum) {
    return [startNum];
  } else {
    const counting = rangeOfNumbers(startNum, endNum - 1);
    counting.push(endNum);
    return counting;
  }
}
console.log(rangeOfNumbers(5, 10));

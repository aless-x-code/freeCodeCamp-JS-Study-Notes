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


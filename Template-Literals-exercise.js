const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"], // PROPERTY, 3 length
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    let failureItems = []; 
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`);
      }
    // Only change code above this line
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(makeList(result.failure));
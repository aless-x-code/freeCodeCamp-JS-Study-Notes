// JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Can return a 0 but never return a 1

//

function andomFraction2() {
  return Math.random(); // it will always be 0
}

function randomWholeNum() {
  return Math.floor(Math.random() * 10); // randon number * 10, it will never be max range because of never it being 1
  // Math.floor rounds up
}

function randomWholeNumRange() {
  Math.floor(Math.random() * (max - min + 1)) + min;
  // 1. generating a random number (0.5)
  // 2. we take the min and the max, and find the working range of random numbers. E.g. 500 and 100 gives us a 400 point range. 
  // 3. We add +1 to that range, recall that rendom can never be 1, thus never 400
  // 4. We grab our random number and place it within our range ( 401 * 0.5 = 200.5)
  // 5. Our random number is 200.5 / 400
  // 6. We round it up (201)
  // 6. We add the minimum number to our random number so that it falls back into the min/max range (301)
   
}

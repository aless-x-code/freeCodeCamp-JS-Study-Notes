//_________________________________________
// PROMISE

// a function that promises to do something
// When the task completes, it either fulfill the promise or fail to do so
// Promise is a constructor function, so you need to use the new keyword to create one
// It takes a function, as its argument, with two parameters - resolve and reject
// A promise has three states: pending, fulfilled, and rejected. 

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
    if(responseFromServer) { // true 
      resolve("We got the data");
    } else {  // or false
      reject("Data not received");
    }
  });


//_________________________________________
// .THEN
// The then method is executed immediately after your promise is fulfilled with resolve

makeServerRequest.then(result => { // linked to resolve => We got the data
  console.log(result); // We got the data
});

//_________________________________________
// .CATCH
// The then method is executed immediately after your promise is rejected

makeServerRequest.catch(error => {
  console.log(error);
})
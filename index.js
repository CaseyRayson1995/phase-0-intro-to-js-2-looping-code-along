// Code your solutions in this file
//In the below code, let age = 30 is the initialization: we're creating a variable, age, that we'll use in the next three phases of the loop.
// Notice that we use let instead of const because we need to increment the value of age.
//The condition for the below loop is age < 40, or, in other words, "Run the code in the loop body until age is NOT less than 40."
// As long as the condition evaluates to true, the code in the loop body is executed, the value of age is incremented, and the condition is reevaluated. 
//As soon as the condition evaluates to false, the loop ends.

//(for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
 //}   )   

  
  //We started our counter, i, at 0 because arrays have zero-based indexes. 
  //Our condition states that we should run the code in the loop body while i is less than gifts.length (3 in the above example).
  // Our iteration, i++, increments our counter by 1 at the end of each pass through the loop.
  //CODE BELOW

//Run node inspect index.js in the terminal to enter the debugger, and cont at the debug prompt to advance to the breakpoint. You should see Wrapped teddy bear and added a bow! logged. In our loop body, we reference gifts[i]. Since i starts out as 0, during the first pass through the loop gifts[i] is gifts[0], which is 'teddy bear'. Continue stepping through the loop by entering cont at thedebug prompt and remember you can enter the REPL at any point to check the values of our variables, i and gifts[i].

//When you're done, remove the debugger(.exit in terminal)and execute the code by running node index.js. You should see the following logged to the terminal:
  
  
  
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


//✓ returns an array of thank you messages for each name provided to the function
const names = [jane, john, joe]
function writeCards(names) {
  // Create an empty array to store the thank you messages
  let messages = [];

  // Loop through each name in the names array
  for (let i = 0; i < names.length; i++) {
    // Create a thank you message for each name
    let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;

    // Add the message to the messages array
    messages.push(message);
  }

  // Return the messages array
  return messages;
}


//1) invokes console.log once for each number, counting down from the number provided to zero
//2) logs each number when counting down, starting from the number provided

function countDown(num) {
  // Loop from num down to 0
  for (let i = num; i >= 0; i--) {
      
      console.log(i);
  }
}
console.log("Homework #4 is working!");

// HOMEWORK #1
// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert

function tellStory([name, mood, activity]) {
  let story = `This is ${name}.${name} is a nice person.Today they are ${mood}.They are ${activity} all day.The end.`;
  console.log(story);
  return story;
}
tellStory(["Ana", "great", "learn programing"]);

// HOMEWORK #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number.
// If one of the numbers of the array is invalid show an error message instead of a result.

function randomNumSum([One, Two, Three, Four, Five]) {
  let resultNumSum = One + Two + Three + Four + Five;
  console.log(resultNumSum);
  return resultNumSum;
}
randomNumSum([1, 2, 3, 4, 5]);

// HOMEWORK #3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC !"

function connestionString() {
  console.log(inputArray.join(" "));
  return;
  inputArray;
}
let inputArray = ["Hello", "there", "students", "of", "SEDC", "!"];
connestionString();

//HOMEWORK #4
//Title: Looping structures
//Description:Write a loop in javascript that goes from 1-20 that will print each number in the console and add "number is even" after every even number and add "number is odd" after every odd number

for (let counter = 1; counter <= 20; counter++) {
  if (counter % 2 === 0) {
    console.log(`${counter} number is even `);
  } else {
    console.log(`${counter} number is odd `);
  }
}

//HOMEWORK #5
//Title: Looping structures
//Description: Write a JavaScript function that will return:
//The sum of the MAX and MIN numbers from an array with numbers
//Ex: arr = [3, 5, 6, 8, 11]
//Output: Max: 11, Min: 3, Sum: 14
//Bonus: Try making the function work if there are other types of items in it

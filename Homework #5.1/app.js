console.log("Homework #5.1 is working!");

//HOMEWORK PART 2

//Print all numbers from an array and the sum
//Create an array with numbers
//Print all numbers from the array in a list element, in a new HTML page
//Print out the sum of all of the numbers below the list
//Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

/*const numbers = [1, 2, 3, 4, 5];

function generateListNumbers(numArray) {
  let number = "";
  for (let i = 0; i < numArray.length; i++) {
    number += `<li>${numArray[i]}</li>`;
  }
  return number;
}

document.querySelector("body").innerHTML = `
<ul>${generateListNumbers(numbers)}</ul>
`;
*/

const numbersArray = [1, 2, 3, 4, 5];

function numberPrintAndSum(numArray) {
  let numbersList = document.querySelector("numbersList");
  let sum = 0;
}

numbersList.innerHTML = "";

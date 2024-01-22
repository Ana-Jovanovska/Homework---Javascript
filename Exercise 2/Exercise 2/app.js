console.log("Function - Exercise 2");

//Exercises

//Exercise 2

//Create 2 variables with arrow functions.
//1.First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is black.
//2.Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.
//Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ).
//Use the functions that we declared earlier and use arrow function for the event listener of the button.

const headerEl = document.querySelector("header");

const changeTextColor = (element, color = "black") => {
  element.style.color = color;
};

const changeTextSize = (element, textSize = 24) => {
  element.style.fontSize = `${textSize}px`;
};

document.querySelector("#applyChangesBtn").addEventListener("click", () => {
  const colorInputValue = document.querySelector("#colorInput").value;
  const textSizeInputValue = document.querySelector("#textSizeInput").value;

  changeTextColor("header", colorInputValue);
  changeTextSize("header", textSizeInputValue);
});

console.log("Homework #5 is working!");

//HOMEWORK PART 1
//Change the text of all paragraphs and headers with javascript
//Note:The html must not be changed

const firstDivEl = document.querySelector("#mainHeading");
firstDivEl.innerText = "Heloo !";
console.log(firstDivEl.innerText);

const firstParagraphel = document.querySelector(".paragraph");
firstParagraphel.innerText = "My name is Ana";
console.log(firstParagraphel.innerText);

const secondDivEl = document.querySelector(".second");
secondDivEl.innerText = "My last name is Jovanovska";
console.log(secondDivEl.innerText);

const textChangeEl = document.querySelector("text");
textChangeEl.innerText = "I am eighteen years old";
console.log(textChangeEl.innerText);

const divs = document.querySelectorAll("div");
const lastDiv = divs[divs.length - 1];

const headerOne = lastDiv.querySelector("h1");
const headerThree = lastDiv.querySelector("h3");

headerOne.innerText = "Thanks";
headerThree.innerText = "Bye!";

console.log(headerOne.innerText);
console.log(headerThree.innerText);

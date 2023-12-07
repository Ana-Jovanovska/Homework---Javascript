let input = prompt("Please enter your year of birth");
let numberResult = Number(input);
let zodiacNumber = (numberResult - 4) % 12;
if (numberResult === 0 || isNaN(numberResult)) {
  alert("Enter the right year!");
} else if (zodiacNumber === 0) {
  console.log("You are Rat");
} else if (zodiacNumber === 1) {
  console.log("You are Ox");
} else if (zodiacNumber === 2) {
  console.log("You are Tiger");
} else if (zodiacNumber === 3) {
  console.log("You are Rabbit");
} else if (zodiacNumber === 4) {
  console.log("You are Dragon");
} else if (zodiacNumber === 5) {
  console.log("You are Snake");
} else if (zodiacNumber === 6) {
  console.log("You are Horse");
} else if (zodiacNumber === 7) {
  console.log("You are Goat");
} else if (zodiacNumber === 8) {
  console.log("You are Monkey");
} else if (zodiacNumber === 9) {
  console.log("You are Rooster");
} else if (zodiacNumber === 10) {
  console.log("You are Dog");
} else if (zodiacNumber === 11) {
  console.log("You are Pig");
}

let input = prompt("Please enter your year of birth");
let numberResult = Number(input);
let zodiacNumber = (input - 4) % 12;
if (numberResult === 0 || isNaN(numberResult)) {
  alert("Enter the right year!");
} else if (zodiacNumber === 0) {
  ("You are Rat");
} else if (zodiacNumber === 1) {
  ("You are Ox");
} else if (zodiacNumber === 2) {
  ("You are Tiger");
} else if (zodiacNumber === 3) {
  ("You are Rabbit");
} else if (zodiacNumber === 4) {
  ("You are Dragon");
} else if (zodiacNumber === 5) {
  ("You are Snake");
} else if (zodiacNumber === 6) {
  ("You are Horse");
} else if (zodiacNumber === 7) {
  ("You are Goat");
} else if (zodiacNumber === 8) {
  ("You are Monkey");
} else if (zodiacNumber === 9) {
  ("You are Rooster");
} else if (zodiacNumber === 10) {
  ("You are Dog");
} else if (zodiacNumber === 11) {
  ("You are Pig");
}

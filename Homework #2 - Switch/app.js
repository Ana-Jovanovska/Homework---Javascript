console.log("Javascript is working!");

// Chinese Zodiac caluclation - With Switch

let input = prompt("Please enter your year of birth");
let numberResult = Number(input);
let zodiacNumber = (numberResult - 4) % 12;

switch (zodiacNumber) {
  case 0:
    console.log("You are Rat");
    break;
  case 1:
    console.log("You are Ox");
    break;
  case 2:
    console.log("You are Tiger");
    break;
  case 3:
    console.log("You are Rabbit");
    break;
  case 4:
    console.log("You are Dragon");
    break;
  case 5:
    console.log("You are Snake");
    break;
  case 6:
    console.log("You are Horse");
    break;
  case 7:
    console.log("You are Goat");
    break;
  case 8:
    console.log("You are Moonkey");
    break;
  case 9:
    console.log("You are Rooster");
    break;
  case 10:
    console.log("You are Dog");
    break;
  case 11:
    console.log("You are Pig");
    break;
  default:
    console.log("Enter valid year and try again!");
    break;
}

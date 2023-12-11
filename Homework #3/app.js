console.log("Homework #3 is working!");

// STUDENT EXERCISE - #3
// THE AGE CALCULATOR

function calculateAge(birthYear) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  console.log(`Your are ${age} years old`);
}
calculateAge(2001);
calculateAge(2002);
calculateAge(2003);

// HOMEWORK PART 1

function typeFunction(type) {
  let input = typeof type;
  console.log(input);
  return input;
}

typeFunction(null);
typeFunction(5 > 6);
typeFunction(18);
typeFunction("Iva");
typeFunction();

// HOMEWORK PART 2

function dogAge(years, type) {
  let yearDogResult = years * 7;
  let yearHumanResult = years / 7;
  if (type === "dog") {
    console.log(`This is your dog years ${yearDogResult}`);
  } else if (type === "human")
    console.log(`this is your human years ${yearHumanResult}`);
  return;
}

dogAge(8, "dog");
dogAge(30, "human");

// HOMEWORK PART 3
// Write a javasript function for an ATM

function atm(amountOfMoney) {
  let atmInput = prompt("Enter your ammount of money");
  let atmNumber = Number(atmInput);
  if (atmNumber > amountOfMoney) {
    alert("No enough money");
  } else if (atmNumber <= amountOfMoney) {
    let withdrawnAmount = amountOfMoney - atmNumber;
    alert(
      `Thank for your withdraw of ${atmNumber},money left in the your account ${withdrawnAmount}`
    );
  }
  return;
}
atm(2000);

const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrealla!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature >40) {
  console.log("Maybe going outside isn't such a great idea...");
}

if (!raining) {
  console.log("Leave your umbrealla at home!");
}

const whichSchool = function (age) {
  if (age >= 1 && age < 13) {
    return "Elementary School";
  }
  else if (age >= 13 && age <= 18) {
    return"Secondary School";
  }
  else if (age >= 19 && age <= 100) {
    return "Lighthouse Labs";
  }
}
console.log(whichSchool(8));
console.log(whichSchool(14));
console.log(whichSchool(35));

var num = 99;

while (num >= 1) {
    if (num >= 95) {
        console.log((num) + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... "+ (num-1) + " bottles of juice on the wall!");
}
num = num - 1
}
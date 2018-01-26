// Names and Input
const hacker1 = "Rakeem";
const hacker2 = prompt("What is your name?");
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Conditionals
if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both got equally long names, ${hacker1.length} characters!!`);
} else {
  hacker1.length > hacker2.length
    ? console.log(`The driver has the longest name, it is ${hacker1.length} characters.`)
    : console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
}

// Loops
// Print driver name all caps on one line
function capitalizeDriver() {
  let name = "";
  for (let i = 0; i < hacker1.length; i++) {
    name += `${hacker1[i].toUpperCase()} `;
  }
  console.log(name);
}
capitalizeDriver("Rakeem");

function reverseNavigator() {
  return hacker2
    .split("")
    .reverse()
    .join("");
}
reverseNavigator();

function alphaOrderStrings(navigator, driver) {
  const nameArray = [navigator, driver];
  nameArray.sort();
  if (navigator === driver) {
    return "What?! You both got the same name?";
  }
  return nameArray[0] === navigator ? "Yo, the navigator goes first definitely" : "The driver's name goes first";
}
alphaOrderStrings(hacker2, hacker1);

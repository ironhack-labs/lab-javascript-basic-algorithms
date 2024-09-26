// Iteration 1: Names and Input
console.log("Hello World!");
const hacker1 = "Max";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Thomas";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log(
    hacker1.length > hacker2.length
      ? `The driver has the longest name, it has ${hacker1.length} characters`
      : hacker2.length > hacker1.length
        ? `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
        : `Wow, you both have equally long names, ${hacker1.length} characters!`,
  );

// Iteration 3: Loops
const navigator = "John";
// == 3.1
function spaceUppercase(name) {
  let nameCaps = "";
  for (let i = 0; i < name.length; i++) {
    nameCaps += name[i].toUpperCase() + " ";
  }
  return nameCaps.slice(0, -1);
}
console.log(spaceUppercase(navigator));

// == 3.2
function nameReverse(name) {
    let reversed = "";
    for (let i = name.length - 1; i >= 0; i--) {
      reversed += name[i];
    }
    return reversed;
  }
  
  console.log(nameReverse(navigator));
  
  // == 3.3
  const driver = "Max";
  const nav = "Thomas";
  
  function lexiOrder(driv, navi) {
    return driv.localeCompare(navi) === -1
      ? `The driver's name goes first.`
      : driv.localeCompare(navi) === 1
        ? `Yo, the navigator goes first, definitely.
  `
        : `What?! You both have the same name?`;
    // Max < Thomas -1
    // Max > Thomas 1
    // Max === Max 0
  }
  
  console.log(lexiOrder(driver, nav));
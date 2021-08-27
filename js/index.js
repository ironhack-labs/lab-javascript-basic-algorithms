// Iteration 1: Names and Input
const hacker1 = "Pedro"
const hacker2  = "Armando"
const driver = `The driver's name is: ${hacker1}`
const navigator = `The navigator's name is: ${hacker2}`
console.log(driver)
console.log(navigator)


console.log(`${hacker2} ${hacker2.length}`);


// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
  if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
}

console.log(hacker1.toUpperCase());


let resultado = hacker1.toUpperCase()
console.log(resultado.split("",5));



// Iteration 3: Loops


function reverseString(str) {
    let splitString = str.split("");
    let reverseArray= splitString.reverse();
    let joinArray = reverseArray.join("");
    
    return joinArray;
}

console.log(reverseString(hacker1))



hacker1l = hacker1.toLowerCase();
hacker2l = hacker2.toLowerCase();

if (hacker1l > hacker2l) {
  console.log("The driver's name goes first.")
}
else if (hacker1l < hacker2l) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 


if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
  }
  else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else {
    console.log("What?! You both have the same name?")
  } 
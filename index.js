// Iteration 1: Names and Input


const hacker1 = "Bartosz";
const hacker2 = "Peter";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals


if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops 


let extendedName = "";
for (const char of hacker1) {
  console.log(char)
  extendedName = extendedName + char + " ";
}
console.log(extendedName.toUpperCase());

let hacker2Reversed = "";
for (let i = hacker2.length-1; i >= 0; i--){
  const char = hacker2[i];
  hacker2Reversed += char;
}
console.log(hacker2Reversed);

switch(hacker1.localeCompare(hacker2)) {
  case -1 :
    console.log("The driver's name goes first.");
    break;
  case 1 :
    console.log("Yo, the navigator goes first definitely.");
    break;
  default :
  console.log("What?! You both have the same name?")
}






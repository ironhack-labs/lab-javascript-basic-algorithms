let hacker1 = "Lucas"

console.log("The driver's name is" + " "+ hacker1);

let hacker2 = "Darren"

console.log("The navigator's name is" +" "+ hacker2)
console.log(hacker1.length)
console.log(hacker2.length)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
 } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }
 

console.log(hacker1.toUpperCase());

let newName = ""

for (let i = 0; i< hacker1.length; i++) {
  newName += " " + hacker1[i].toUpperCase()
}
  console.log(newName)


let newReverseName = ""

for (let i = hacker2.length-1; i >= 0; i--) {
  newReverseName += hacker2[i]
}
console.log(newReverseName)


console.log(hacker1.localeCompare(hacker2));

let firstName = hacker1.localeCompare(hacker2)
let answer = ""

switch (firstName) {
  case -1:
    answer = "The driver's name goes first";
    break;
  case 0:
    answer = "What?! You both have the same name?";
    break;
  case 1:
    answer = "Yo, the navigator goes first definitely.";
    break;
  default:
 
}
console.log(answer)
// Iteration 1: Names and Input

let hacker1 = 'Guilherme Rosa';
console.log ("The driver´s name is " + hacker1);

let hacker2 = 'Joaozinho da Silva'
console.log ("The navigator´s name is "+ hacker2);

console.log (hacker1 + " has " + hacker1.length + " characters in his name")
console.log (hacker2 + " has " + hacker2.length + " characters in his name")

if (hacker1.length > hacker2.length){
  console.log ("The driver has the longest name, he has " + hacker1.length + " characters on his name!");
}
  else if (hacker2.length > hacker1.length){
    console.log ("It seems that the navigator has the longest name, it has " + hacker2.length + " characters!");
  } 
else if (hacker1.lenght == hacker2.lenght){
    console.log ("Wow, it seems that both have equally long names, " + "they have " + hacker1.length + " characters!");
  } 
else {
    console.log ("hum, maybe there´s something wrong, take a look in the names again...")
  }


// Iteration 2: Conditionals

let hackerUp1 = ""

for (let i = 0; i < hacker1.length; i++) {
  if (i < hacker1.length - 1) {
    hackerUp1 += hacker1[i].toUpperCase() + "  ";
  }
  else {
    hackerUp1 += hacker1[i].toUpperCase()
  }
}
console.log(" ", hackerUp1)

let hackerUp2 = ""

for (let i = 0; i < hacker2.length; i++) {
  if (i < hacker2.length - 1) {
    hackerUp2 += hacker2[i].toUpperCase() + "  ";
  }
  else {
    hackerUp2 += hacker2[i].toUpperCase()
  }
}
console.log(" ", hackerUp2)

function reverseString(str){
  return str.split("").reverse().join("");
}
console.log(reverseString(hacker2));


// Iteration 3: Loops

if (hacker1.localeCompare(hacker2) < hacker2.localeCompare(hacker1)) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) > hacker2.localeCompare(hacker1)) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
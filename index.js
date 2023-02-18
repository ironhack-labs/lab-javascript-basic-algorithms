// Iteration 1: Names and Input

let hacker1 = "juan";
console.log("The Driver's name is " + hacker1);

let hacker2 = "pepe";
console.log("The Navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
  }
  else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
  }
  else {
    console.log("Wow, you both have equally long names, " + hacker1.length + "  characters!")
  }

// Iteration 3: Loops

let name = ""
for (let i = 0; i<hacker1.length; i++){
  name += hacker1[i].toUpperCase()
}
console.log(name)

let nameReversed = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
    nameReversed += hacker2[j];
}
console.log(nameReversed);

let namesArray = [hacker1, hacker2];
namesArray.sort();
console.log(namesArray);

function lexOrder(name1, name2) {
    if(name1 === name2) {
        return "What?! You both have the same name?";
    }
    if (name1 > name2) {
        return "Yo, the navigator goes first definitely.";
    }
    return "The driver's name goes first.";
}
console.log(lexOrder(hacker1, hacker2));
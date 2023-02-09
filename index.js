// Iteration 1: Names and Input

let hacker1 = "George Russell";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jean-Luc van den Heede";
console.log(`The navigator's name is  ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}
// Iteration 3: Loops
let spaceHacker = ""
for (const letter of hacker1) {
   spaceHacker+= letter.toUpperCase()+" ";
}
console.log(spaceHacker);

let reverseHacker = "";
for (const letter of hacker2) {
  reverseHacker = letter+reverseHacker;
}
console.log(reverseHacker);

var listaHackers = [hacker1, hacker2]
console.log("Lista Inicial");
console.log(listaHackers);
console.log("Lista Ordenada Alfabeticamente");
console.log(listaHackers.sort((a, b) => a.charAt(0).localeCompare(b.charAt(0))));

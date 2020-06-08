// Iteration 1 : Names and Input

const hacker1 = "Nina";
const hacker2 = "Enine";

console.log(`The driver's name is ${hacker1}`); // ==> "The driver's name is Nina"
console.log(`The navigator's name is ${hacker2}`); // ==> "The navigator's name is Enine"


// Iteration 2: Conditionals

var longdriverName = hacker1.length; // ==> 4 pour Nina driver
var longnavigName = hacker2.length; // ==> 5 pour Enine navigator

if (longdriverName > longnavigName){
  console.log(`The driver has the longest name, it has ${longdriverName} characters.`);
} else if (longdriverName < longnavigName){
  console.log(`It seems that the navigator has the longest name, it has ${longnavigName} characters`);
} else if (longdriverName === longnavigName){
  console.log(`Wow, you both have equally long names, ${longdriverName} characters!`);
} // ==> "It seems that the navigator has the longest name, it has 5 characters"


//  Iteration 3: Loops

//3.1
var ninaArr = hacker1.split(""); // ==> ["N", "i", "n", "a"]

    // BOUCLE NON REUSSIE
let newName ='';
for (i=0; i<hacker1.length; i++){
  ninaArr.splice(ninaArr[i],0,"");
}
console.log(ninaArr); // ==> FAUX !! ==> ["", "", "", "N", "i", "n", "a"]


   // Transformation array to string avec join
var ninaWithSpaces = ninaArr.join();
console.log(ninaWithSpaces); // ==> Forcément ici ca donne ",,,N,i,n,a"

    // Transformation en majuscule
var ninaUp = ninaWithSpaces;
console.log(ninaUp.toUpperCase()); // ==> ",,,N,I,N,A"


// 3.2 Print all the characters of the navigator's name, in reverse order. 
console.log(ninaArr.reverse()); // ==> ["a", "n", "i", "N"]


//3.3 Utilisation de .localeCompare() pour savoir l'ordre lexicographic
console.log(hacker1.localeCompare(hacker2)); // ===> 1 ce qui veut dire que OUI : Nina est avant Enine.

if(hacker1.localeCompare(hacker2) === 1){
  console.log(`The driver's name goes first.`)
} else if(hacker1.localeCompare(hacker2) === -1){
  console.log(`Yo, the navigator goes first definitely.`)
} else if(hacker1.localeCompare(hacker2) === 0){
  console.log(`What?! You both have the same name?`);
}

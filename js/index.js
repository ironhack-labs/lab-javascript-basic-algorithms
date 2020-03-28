// Iteration 1: Names and Input
let hacker1 = "Juli";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alba";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`Driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length){
    console.log(`Navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!!!`);
  };

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let nameCapitals;
for (let i = 0; i < hacker1.length; i++) {
  if (i === 0) {
    nameCapitals = hacker1[i] + " ";
  } else {
    nameCapitals += hacker1[i] + " ";
  }
}
console.log(nameCapitals.toUpperCase());

//3.2 Print all the characters of the navigator's name, in reverse order.
let navigatorsNameReverse = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  navigatorsNameReverse += hacker2[i] ;
}
console.log(navigatorsNameReverse);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

for(let i = 0; i < alphabet.length; i++){
  if(hacker1 === hacker2){
    console.log("What?! You both have the same name?");
    break;
  }
  if(alphabet[i] === hacker1[0]){
    console.log("The driver's name goes first.");
    break;
  } else if (alphabet[i] === hacker2[0]){
    console.log("Yo, the navigator goes first definitely.");
    break;
  }else{
    continue;
  }
};
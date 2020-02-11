// Iteration 1: Names and Input

let hacker1 = "Catarina";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "John";
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
  }else if(hacker1.length < hacker2.length){
    console.log(`The driver ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
  }else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`);
  }



// Iteration 3: Loops

let driversNameUpperCase = "";

for (let i = 0; i < hacker1.length; i++){
  driversNameUpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(driversNameUpperCase);




/* Only a test to remember the logic behind
for (let i = 100; i > 0; i--){
  console.log(i);
}
*/

//console.log(hacker2.length);

let navigatorsNameReverse = "";

for (let i = hacker2.length - 1; i >= 0; i--){
  navigatorsNameReverse += hacker2[i];
}
console.log(navigatorsNameReverse);

// Q: if hacker2.length is 4, why does the loop run 5 times and prints out "undefinednhoJ" if i don't write "hacker2.length - 1"? Shouldn't it only run 4 times?


//-------------------------------------------------------------

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

let arrNames = [];
arrNames.push(hacker1, hacker2);
let arrNamesLexicographical = arrNames.sort();
//console.log(arrNamesLexicographical);


for (let i = 0; i < arrNamesLexicographical.length; i++){
  if(i === hacker1){
    console.log("The driver's name goes first.");
  }else if(i === hacker2){
    console.log("Yo, the navigator goes first definitely.");
  }else{
    console.log("What?! You both have the same name?");
  }
}
// Iteration 1: Names and Input
// 

const HACKER1= "Hector"
console.log(`The driver name is ${HACKER1}`);

const HACKER2= "Edgar"
console.log(`The navigator name is ${HACKER2}`);

// Iteration 2: Conditionals

const HACKER1 = "Hector";
const HACKER2 = "Edgar";
if (HACKER1.length === HACKER2.length) {
      console.log(
        `Wow, you both have equally long names, ${HACKER1.length} characters!`
      );
}
else if (HACKER1.length > HACKER2.length) {
      console.log(
        `The driver has the longest name, it has ${HACKER1.length} characters.`
      );
}
else {
      console.log(
        `It seems that the navigator has the longest name, it has ${HACKER2.length} characters.`
      );
}

// Iteration 3: Loops

const HACKER1 = "Hector";
const HACKER2 = "Edgar";
let newName = ""
for (i=0;i<HACKER1.length; i++) {
   newName = newName + HACKER1[i] + " "
}
  console.log(newName);


  //

  const HACKER1 = "Hector";
const HACKER2 = "Edgar";
let newName= " " ;


for (i=HACKER2.length-1;i>=0;i--){
newName = newName + HACKER2[i];

}

console.log(newName);

//

const HACKER1 = "Hector";
const HACKER2 = "Edgar";
let newName = "";
if (HACKER1.toLocaleLowerCase() < HACKER2.toLocaleLowerCase()) {
      console.log(`The driver's name goes first.`);
} else if (HACKER1.toLocaleLowerCase() > HACKER2.toLocaleLowerCase()) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
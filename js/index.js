// Iteration 1: Names and Input

const hacker1 = 'Korok';
console.log("The driver's name is " + hacker1);

const hacker2 = 'Kilton';
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("Hacker1's name is longer")
  }
      else if (hacker1.length < hacker2.length){
        console.log("Hacker2's name is longer")
      }
      
       else {
         console.log("Both names are equally long");
       }


// Iteration 3: Loops

//1
let space = '';

for (let i = 0; i < hacker1.length; i++){
  space += hacker1.charAt(i) + ' ';
}
console.log(space.toUpperCase());

//2
let reversed = "";
for (let letters in hacker2) {
  reversed = hacker2[letters] + reversed;
}
console.log(reversed);

//3
if (hacker1.localeCompare(hacker2) === -1){
    console.log(`The driver's name goes first.`);
   
  } else if (hacker1.localeCompare(hacker2)===1){
    console.log(`Yo, the navigator goes first definitely.`);
    
  } else if (hacker1.localeCompare(hacker2)===0){
    console.log(`What?! You both have the same name?`);
  }
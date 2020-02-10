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
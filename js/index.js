console.log("I'm ready!");
// Iteration 1: Names and Input

let hacker1 = "Rubén";
let hacker2 = "Pedro";

console.log("The driver's name is", hacker1);
console.log("The driver's name is", hacker2);

// Iteration 2: Conditionals

let hacker1Lenght = hacker1.length;
let hacker2Lenght = hacker2.length;

if(hacker1Lenght > hacker2Lenght){
  console.log("The driver has the longest name, it has", hacker1Lenght, "characters.");
  } else if(hacker1Lenght < hacker2Lenght){
  console.log("It seems that the navigator has the longest name, it has", hacker2Lenght, "characters.");
  } else {
   console.log("Wow, you both have equally long names,", hacker1Lenght, "characters.");
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));
let arrayHacker2 = hacker2.split('');
let arrayNew = [];

arrayHacker2.forEach(function(e){
  arrayNew.unshift(e);
})

console.log(arrayNew.join(''))

let arrayOrden = [];

arrayOrden.push(hacker1.toUpperCase(), hacker2.toUpperCase());

arrayOrden.sort(function (a,b) {
  if (a > b) {
    console.log("The driver's name goes first.");
    return;
  } else if (a < b) {
    console.log('Yo, the navigator goes first definitely.')
    return;
  }
  console.log('What?! You both have the same name?')
  return;
});
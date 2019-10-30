// Iteration 1: Names and Input

let hacker1 = "Daniela";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "car";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ` + hacker1.length + ` characters.`);
  } else if (hacker1.length < hacker2.length){
    console.log(`Yo, navigator got the longest name, it has` + hacker2.length + `characters.`);
  } else {
    console.log(`Wow, you both got equally long names,` + hacker1.length + `characters!`);
  }


// Iteration 3: Loops

//3.1
console.log(hacker1.toUpperCase().split("").join(" "));
//3.2
console.log(hacker2.split("").reverse().join());
//3.3
if (hacker1 === hacker2) {
  console.log ("What?! You both got the same name?");
  } else if (hacker1 > hacker2){
    console.log ("The driver's name goes first.");
  } else {
    console.log ("Yo, the navigator goes first definitely.");
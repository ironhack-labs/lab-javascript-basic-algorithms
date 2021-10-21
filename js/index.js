// Iteration 1: Names and Input
// 

let hacker1 = "Bárbara";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Mauro";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } 
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)
  } 
  else {
    console.log(`Wow, you both have equally long names, ${hacker2.length}  characters!`)
  }


// Iteration 3: Loop

let nameBarbara = hacker1.split("").join(" ");
   console.log(`${nameBarbara.toUpperCase()}`);
    

var nameReverse = "";
        for (let i = hacker2.length - 1; i >= 0; i--) {
        nameReverse+= hacker2[i];
     }
       console.log(`${nameReverse}`);

       let result = hacker1.localeCompare(hacker2);
       if (result < 0) {
         console.log("The driver's name goes first")
       } else if (result > 0) {
         console.log("Yo, the navigator goes first definitely")
       } else {
         console.log("What?! You both have the same name?")
       }
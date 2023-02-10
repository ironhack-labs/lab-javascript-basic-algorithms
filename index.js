// Iteration 1: Names and Input

// Driver
let hacker1 = "Alberto";
console.log(`The driver's name is ${hacker1}`);

// Navigator
let hacker2 = "Bruno";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// if (hacker1.length > hacker2.length) {
//     console.log( `The driver has the longest name, it has ${hacker1.length} characters`)
// } else if (hacker1.length < hacker2.length) {
//     console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
// } else {
//     console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
// }


// Iteration 3: Loops


// let driverNamesUppercase = "";

// for (let i = 0; i < hacker1.length; i++ ) {
//     driverNamesUppercase += hacker1[i].toUpperCase() + " ";
// }

// console.log(driverNamesUppercase);


// let driverNameReverse = "";

// for (let i = hacker1.length - 1; i >= 0 ; i--) {
//     driverNameReverse += hacker1[i];
// }

// console.log(driverNameReverse);

// Lexicographic order:

    if (hacker1 === hacker2){
        console.log("What?! You both have the same name?")
    } else {
    for(let j = 0; j < hacker1.length; j++) {
       if (hacker1[j] < hacker2[j]) {
           console.log("The driver's name goes first");
           break;
       } else if (hacker1[j] > hacker2[j]) {
           console.log("Yo, the navigator goes first definitely.")
           break;
       }
    } 
   }




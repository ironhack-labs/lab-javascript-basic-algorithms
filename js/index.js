// Iteration 1: Names and Input

let hacker1 = "Benjamin";
let hacker2 = "Mathias";


console.log("the navigator's name is " + hacker2);


// Iteration 2: Conditionals

    if (hacker1.length < hacker2.length) {
        console.log("the navigator has the longest name, it has " + hacker2.length + " characters");
    }
    else if (hacker1.length > hacker2.length) {
        console.log("It seems that the driver has the longest name. It has " + hacker1.length + " characters.")
    }
    else {
        console.log("Wow! You both have equally long names, " + hacker1.length + " characters.")
    }


// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
    console.log(i);
}

let tryThis = hacker1.split("");
let consolePrint="";

for (let string of hacker1) {
    consolePrint+=string+" ";    
 
}
console.log(consolePrint);

// Done!
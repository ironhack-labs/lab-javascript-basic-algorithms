// Iteration 1: Names and Input
//

let hacker1 = "Patrick"
console.log("The driver's name is " + hacker1)

let hacker2 = "Antonio"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters") }

else if (hacker1.length < hacker2.length) {
    console.log("The navigator has the longest name, it has " + hacker2.length + " characters")
}

else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}


// Iteration 3: Loops
let driversName = "";
let navigatorsName = "";

for(let i=0; i < hacker1.length; i++) { driversName += hacker1[i].toUpperCase() + " "; } console.log(driversName.trim()); 

for(let i = hacker2.length - 1; i >= 0; i--) { navigatorsName += hacker2[i]; } console.log(navigatorsName); 

let hacker1Lower = hacker1.toLowerCase();
let hacker2Lower = hacker2.toLowerCase();


for (i = 0; i < hacker1.length; i++) {
    if (hacker1Lower.charCodeAt(i) < hacker2Lower.charCodeAt(i)) {
        console.log("The driver's name goes first.");
        break;
    }
    else if (hacker1Lower.charCodeAt(i) > hacker2Lower.charCodeAt(i)) {
        console.log("Yo, the navigator goes first definitely.");
        break;            
    }
    else if (hacker1.length - 1 === i) {
        console.log("What?! You both have the same name?")
    }
}



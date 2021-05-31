// Iteration 1: Names and Input
let hacker1 = "Aoão" //Driver
let hacker2 = "João"     // Navigators
let hackerLen1 = hacker1.length;
let hackerLen2 = hacker2.length;
console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`);
// Iteration 2: Conditionals

if (hackerLen1 > hackerLen2){
    console.log(`The driver has the longest name, it has ${hackerLen1} characters.`)
} else if (hackerLen1 < hackerLen2){
    console.log(`The navigator has the longest name, it has ${hackerLen2} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hackerLen1} characters`)
}


// Iteration 3: Loops
let nameHacker1 = "";
let nameHacker2 = "";
for (let i = 0; i < hackerLen1; i++){
    nameHacker1 = nameHacker1 + hacker1[i].toUpperCase() + " "
}

for (let i = hackerLen2 -1; i >= 0; i--){
    nameHacker2 = nameHacker2 + hacker2[i]
}
console.log(nameHacker1)
console.log(nameHacker2)

if (hacker1 < hacker2){ //
    console.log("The drivers name goes first")
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator comes first")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus
const lorem = ""
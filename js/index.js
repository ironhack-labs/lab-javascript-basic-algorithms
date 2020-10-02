// Iteration 1: Names and Input
let firstHacker = "Carmen";
console.log("The driver's name is", firstHacker);
let secondHacker = "Andrea";
console.log ("The navigator's name is", secondHacker);

// Iteration 2: Conditionals

if (firstHacker.length > secondHacker.length){
    console.log("The driver has the longest name " + firstHacker.length + " characters.");
    } else if (firstHacker.length < secondHacker.length){
    console.log("It seems that the navigator has the longest name, it has " + secondHacker.length + " characters.");
    }else {console.log ("Wow, you both have equally long names " + firstHacker.length + " characters");
    }

// Iteration 3: Loops
let name = "";
for (let i = 0; i < firstHacker.length; i++) {
    name += firstHacker[i].toUpperCase() + ' ';
}

console.log(name);


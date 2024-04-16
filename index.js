// Iteration 1: Names and Input

let driver = "Gianni";
console.log("The driver's name is " + driver);

let swimmer = "Pinotto";
console.log("The navigator's name is " + swimmer);

// Iteration 2: Conditionals

if (driver.length > swimmer.length) {
    console.log("The driver has the longest name, it has " + driver.length + "characters.");
} else if (swimmer.lenght > driver.length) { 
    console.log("It seems that the navigator has the longest name, it has " + swimmer.length + "characters.");
} else  {console.log("Wow, you both have equally long names, " + driver.length + " characters");
}

// Iteration 3: Loops
// 3.1

console.log(driver.toUpperCase() .split("") .join(" "));

// 3.2

let reversed = swimmer.split('') .reverse() .join('');
console.log(reversed);

// 3.3

if (driver < swimmer) {
    console.log("The driver's name goes first.");
} else if (swimmer < driver) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

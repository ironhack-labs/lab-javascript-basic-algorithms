// Iteration 1: Names and Input

let hacker1 = "Leti";

console.log("The drivers name is " + hacker1);

let hacker2 = "Diego";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
};


// Iteration 3: Loops 3.1

let driver = '';

for (let i=0; i < hacker1.length; i++) {
   driver += hacker1[i].toUpperCase() + " ";  
}

console.log(driver);

// Iteration 3: Loops 3.2

let reverseNav = '';

for (let i=hacker2.length - 1; i >= 0; i--) {
    reverseNav += hacker2[i];
}

console.log(reverseNav);

// Iteration 3: Loops 3.3

// para saber qué nombre es más largo y así poder continuar comparando si los primeros carácteres
// son iguales y uno de ellos es más largo o nombre compuesto ie. Ana o Ana María.

let longName = 0;
if (hacker1.length >= hacker2.length) {
    longName = hacker1.length;
} else {
    longName = hacker2.length;
}

// si los nombres son completamente iguales estonces salta este if, si son diferentes los compara.

if (hacker1 != hacker2) {
    for (let i=0; i < longName; i++) {
        if (hacker1[i] > hacker2[i]) {
            console.log("Yo, the navigator goes first definitely.");
            break;
        } else if (hacker1[i] < hacker2[i]) {
            console.log("The driver's name goes first.")
            break;
        }
        if (hacker1[i] == null) {
            console.log("The driver's name goes first.")
            break;
        } else if (hacker2[i] == null) {
            console.log("Yo, the navigator goes first definitely.")
            break;
        } 
    }
} else {
    console.log("What?! You both have the same name?");
}
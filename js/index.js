// Iteration 1: Names and Input
const hacker1 = "Roberto";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Gaby";
console.log(`The driver's name is ${hacker2}`);

//
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(
        `the driver has the longest name, it has ${hacker1.length} characters.`
    );
} else if (hacker2.length < hacker1.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
} else {
    console.log(
        `Wow, you both have equally long names, ${hacker2.length} characters!.`
    );

}

// Iteration 3: Loops


let upperCase = "";
for (let i = 0; i < hacker1.length; i++) {
    const char = hacker1.charAt(i);
    upperCase += char.toUpperCase() + " ";
}
console.log(upperCase);



let reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverse += hacker2.charAt(i);
}
console.log(reverse);



let team = [hacker1, hacker2];
let alf = team.sort();
console.log(alf);

if (alf[0] === hacker1) {
    console.log("The driver's name goes first.");
} else if (alf[0] === hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

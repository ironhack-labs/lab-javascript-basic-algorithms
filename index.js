// Iteration 1: Names and Input
hacker1 = "Jorge";
hacker2 = "Anderson";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
let hacker1long = hacker1.length;
let hacker2long = hacker2.length;

if (hacker1long > hacker2long) {
    console.log(`The driver has the longest name, it has ${hacker1long} characters`);
} else if (hacker2long > hacker1long) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2long} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1long} characters!`);
}



// Iteration 3: Loops

let hacker1Upper = "";

for (let i = 0; i < hacker1.length; i++) {
    hacker1Upper += hacker1[i].toUpperCase() + " ";

}
console.log(hacker1Upper);

let hackerReverse="";
for(let i = hacker2.length -1; i >= 0; i--){
    hackerReverse += hacker2[i];
}
console.log(hackerReverse);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first");
}
    else if (hacker2 < hacker1) {
        console.log("Yo, the navigator goes first, definitely.");
    }
    else {
        ("What?! You both have the same name?");
    }









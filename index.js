
// Iteration 1: Names and Input
let hacker1 = "Anna"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alexis"
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length ) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}`)
 }
// Iteration 3: Loops
let result = "";
for(let i = 0; i < hacker1.length; i++) { 
    if(i !== hacker1.length - 1) {
    result += hacker1[i] + ' ';
    } else result += hacker1[i];
}
console.log(result.toUpperCase());
let result1 = "";
for(let i = hacker2.length -1; i >= 0; i--) {
    result1 += hacker2[i];

}
console.log(result1);


if (hacker1.toLowerCase() == hacker2.toLowerCase()) {
    console.log("What?! You both have the same name?");
}
else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log("Yo, the navigator goes first, definitely.");
}
else if(hacker1.toLowerCase() < hacker2.toLowerCase()){
    console.log("The driver's name goes first.");
} 

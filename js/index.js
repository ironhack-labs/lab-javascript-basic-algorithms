// Iteration 1: Names and Input

let hacker1 = "João"
let hacker2 = "Fabrício"

console.log(hacker1)
console.log(hacker2)
// Iteration 2: Conditionals

if (hacker2.length > hacker1.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker2.length < hacker1.length) {
        console.log(`The navigator has the longest name, it has ${hacker1.length} characters.`);
} 
else 
{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let spaceBetween1 = ""
let spaceBetween2 = ""

for (let i = 0; i <= hacker1.length-1; i++) {
    spaceBetween1 += hacker1[i].toUpperCase() + " ";
}
console.log(spaceBetween1);

for (let i = 0; i <= hacker2.length-1; i++) {
    spaceBetween2 += hacker2[i].toUpperCase() + " ";
}
console.log(spaceBetween2);


let reverse1 = ""
for (let i = hacker1.length-1; i >= 0; i--) {
   reverse1 += hacker1[i];
}
console.log(reverse1);


let reverse2 = ""

for (let i = hacker2.length-1; i >= 0; i--) {
    reverse2 += hacker2[i];

}
console.log(reverse2);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

















/*console.log(hacker1.toUpperCase().split("").join(" "));
console*.log(hacker2.toUpperCase().split("").join(" "));

function reverseStr(str) {
    let reverse = ""
    for(let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse; 
}
console.log(reverseStr(hacker1));
console.log(reverseStr(hacker2));*/
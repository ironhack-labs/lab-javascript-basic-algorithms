// Iteration 1: Names and Input
let hacker1 = "Houssame";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Zerouali";
console.log(`The navigator's name is ${hacker2}`);

console.log('-------------------------------------------------------------------')

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console,console.log(`The driver has the longest name,it has ${hacker1.length} characters`);
}else if (hacker1.length < hacker2.length) {
    console,console.log(`The navigator has the longest name,it has ${hacker2.length} characters`);
}else {
    console,console.log(`Wow you have the equally long names, ${hacker2.length} characters !`);
}

console.log('-------------------------------------------------------------------')

// Iteration 3: Loops
for (letter in hacker1) {
    
    console.log(`${hacker1[letter].toUpperCase()}`)
}

console.log('-------------------------------------------------------------------')

for (let i = hacker1.length-1; i >= 0; i--) {
    console.log(hacker1[i])
    
}

console.log('-------------------------------------------------------------------')

if (hacker1<hacker2) {
    console.log("The driver's name goes first.")
}else if (hacker1>hacker2) {
    console.log("Yo, the navigator goes first definitely.")
}else {
    console.log("What ?! You both have the same name ?")
}
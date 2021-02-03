// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops

console.log("I'm ready!");
let hacker1 = `Pauline`
console.log (`The driver's name is ${hacker1}`)
let hacker2 = `Victoria`
console.log (`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length) {
console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length) {
console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

let tmp = "";
for (let i=hacker1.length -1 ; i >= 0 ; i--) {
    tmp = hacker1[i].toUpperCase() + " " + tmp;
}

console.log(tmp);

let tmp2 = "";
for (let i=0 ; i < hacker2.length ; i++) {
    tmp2 = hacker2[i].toUpperCase() + tmp2;
}

console.log(tmp2);


// Iteration 1: Names and Input

var hacker1 = `Jorell`;
//console.log (`The driver's name is ${hacker1}`)

var hacker2 = `François`;
//console.log (`The navigator's name is ${hacker2}`)
 /*
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops

//uppercase with space
var array = []
for (let i=0; i<hacker1.length; i++) {
    const driver = hacker1.toUpperCase();
    array.push(driver[i]);
}
console.log(array.join(' '))

// reverse name
var array = []
for (let i=0; i<hacker1.length; i++) {
    array.push(hacker1[i]);
}
console.log(array.reverse().join(""))
*/

// check first letter

const firstletter1= hacker1[0]
const firstletter2 = hacker2[0]
if (firstletter1 < firstletter2) {
    console.log("The driver's name goes first.")
}
else if (firstletter2 < firstletter1) {
    console.log("Yo, the navigator goes first definitely.")
}
else if ()


// Iteration 3bis: Loops

//console.log(hacker1.toUpperCase().split("").join(" "))
//console.log(hacker1.split("").reverse().join(""))
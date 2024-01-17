// Iteration 1: Names and Input
let hacker1 = "Gav";
console.log("The driver's name is" + ' ' + hacker1);
let hacker2 = "Barbie"
console.log("The navigator's name is" + ' ' + hacker2)
 
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver's name is longer")
}
else if (hacker2.length > hacker1.length) {
    console.log("The navigator's name is longer")
}
else if (hacker2.length === hacker1.length) {
    console.log("WOW! You both have equally long names!")
}


// Iteration 3: Loops

const hacker1New = hacker1.toUpperCase();
    console.log(hacker1New);

for (i = 0; i < hacker1New.length; i++) {
    console.log(hacker1New[i])
}


//for (var i = count - 1; i >= 0; i--)
for (j = hacker2.length-1; j >= 0; j--) {

    console.log(hacker2[j])
}
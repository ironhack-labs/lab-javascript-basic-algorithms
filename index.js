// Iteration 1: Names and Input
const hacker1 = "valentin";
console.log("The drivers name is " + hacker1);
const hacker2 = "hugo"
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name it has ${hacker1.length} characters.` );
} else if ( hacker2.length > hacker1){
    console.log(`The navigator has the longest name it has ${hacker2.length} characters.` );
} else {
    console.log(`Both have equally long names!!!: ${hacker2.length}`)
}


// Iteration 3: Loops
let hacker1wierd = "";
for(char of hacker1) {
    hacker1wierd = hacker1wierd + char.toUpperCase() + " ";
}
console.log(hacker1wierd);

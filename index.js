//Iteration 1: Names and Input
let hacker1 = "Agnes"
console.log(`The drivers name is ${hacker1}`);
let hacker2 = "Julia"
console.log(`The navigator’s name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
 else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
 }
// Iteration 3: Loops
let newHack = "";
for (let i = 0; i<hacker1.length; i++ ) {
         newHack += hacker1[i].toUpperCase() + " "
}
console.log(newHack);
let backwards = "";
for(let i= hacker2.length-1; i>=0; i--){
    backwards += hacker2[i]
};
console.log(backwards);
let alNum = hacker1.localeCompare(hacker2)
    if(alNum === -1){
        console.log("The driver’s name goes first.");
    } else if(alNum === 1){
    console.log("Yo, the navigator goes first, definitely.")
    } else {
    console.log("What?! You both have the same name?")
}



// Iteration 1: Names and Input

let hacker1 = "Guillaume";
let hacker2 = "Louis";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters.")   
}
else if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has "+ hacker2.length + " characters.")
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}


// Iteration 3: Loops


let hacker1Spaced = "";
for (let i = 0; i < hacker1.length ; i++) {
    hacker1Spaced += hacker1[i] +  " ";
}

console.log(hacker1Spaced.toUpperCase());


let hacker2Reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reversed += hacker2[i];

}

console.log(hacker2Reversed);



if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);

} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}


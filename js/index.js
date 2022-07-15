// Iteration 1: Names and Input

hacker1 = "Eurípedes";
hacker2 = "Yume";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

} else {
    console.log(`Wow, you both have equally long names, it has ${hacker2.length} characters!`);
}


// Iteration 3: Loops

//UpperCase

// Adicionando espaço em todas as letras, ajustar para no final não ter espaço (ultima letra sem espaço)
let UpperCaseDriverName = "";

for(let i=0; i <hacker1.length; i++){

    UpperCaseDriverName += hacker1[i].toUpperCase() + " "; 
}
console.log(UpperCaseDriverName);

//Reverse
let ReverseNavigator = "";


for(let i=hacker2.length-1; i >= 0; i--){

    ReverseNavigator += hacker2[i]; 
}

console.log(ReverseNavigator);

//Lexicographic Order

if (hacker1.localeCompare(hacker2) > 0) {

    console.log("Yo, the navigator goes first definitely.");

} else if (hacker1.localeCompare(hacker2) < 0 ) {

    console.log("The driver's name goes first.")
 
} else {

    console.log("What?! You both have the same name?")    
}


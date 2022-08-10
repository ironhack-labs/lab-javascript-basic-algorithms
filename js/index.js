// Iteration 1: Names and Input
//
let hacker1 = "José"
console.log(`The driver's name is: ${hacker1}`)
let hacker2 = "Daniela"
console.log(`The navigator's name is: ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let spaceName ="";
for(let i = 0; i < hacker1.length; i++){
    spaceName += hacker1[i];
    spaceName += " ";
}
console.log(spaceName.toUpperCase());

let reverse = "";
for(let i = hacker2.length -1; i >= 0 ; i--){
    reverse += hacker2[i]
}
console.log(reverse);

let ironNames= hacker1.localeCompare(hacker2);


if(ironNames == -1){
    console.log(`The driver's name goes first.`)
} else if(ironNames == 1){
    console.log(`Yo, the navigator goes first definitely.`)
} else{
    console.log(`What?! You both have the same name?`)
}


console.log("Im ready!")

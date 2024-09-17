// Iteration 1: Names and Input
let hacker1="Joao Carlos";
let hacker2="Esmael";

console.log("The driver's name is"+" "+ hacker1);
console.log(`The navigator's name is ${hacker2}` );


// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length<hacker2.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else { 
console.log(`Wow, you both have equally long names, XX character`)
}


// Iteration 3: Loops
let newWord = "";
for(let i = 0; i < hacker1.length; i++) {
    newWord += hacker1[i]+" "

}

console.log(newWord.toUpperCase());


let newWord1 = "";
for(let i=hacker1.length-1;i>=0; i--) {
    newWord1 += hacker1[i]+" "

}

console.log(newWord1.toUpperCase());

if(hacker1.localeCompare(hacker2) === 1){
    console.log("The driver's name goes first")
}
else if(hacker2.localeCompare(hacker1)===1){
    console.log("Yo, the navigator goes first, definitely")
} else{
    console.log("What?! You both have the same name ?")
}




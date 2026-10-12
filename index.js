// Iteration 1: Names and Input
const hacker1 = "Jason";

console.log(`the driver's name is ${hacker1}`);

const hacker2 = "Momoa";

console.log(`the navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker2.length > hacker1.length){

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else if (hacker2.length === hacker1.length){

    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops
let newStr = "";

for (let i=0; i < hacker1.length; i++){

    newStr += hacker1[i].toUpperCase() + " ";
};

console.log(newStr);

let newStr2 = "";

for (let i= hacker2.length - 1; i > -1 ; i--){
    
    newStr2 += hacker2[i];
}

console.log(newStr2);

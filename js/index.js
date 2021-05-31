// Iteration 1: Names and Input
 const hacker1="Tiago";
 console.log(`The driver name is ${hacker1}`);

 const hacker2="Victor";
 console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let result="";
const driver=hacker1;
for (let i=0 ; i<driver.length; i++){
    result=result+driver[i]+ " ";
}
console.log(result.toUpperCase())

let result2="";
const navigator= hacker2;
for (let i=navigator.length -1; i>=0; i--){
    result2=result2+navigator[i]+ " ";
}
console.log(result2)


if (driver<navigator) {
    console.log("The driver's name goes first.")
} else if (driver>navigator){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}
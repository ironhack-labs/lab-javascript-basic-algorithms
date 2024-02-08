// Iteration 1: Names and Input
let hacker1="Juan";
let hacker2="Dustin";
console.log(`The driver\'s name is ${hacker1}.`);
console.log(`The navigator\'s name is ${hacker2}.`);


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length)
{
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else if(hacker1.length == hacker2.length){
console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
let capsHacker1 =[];
for (let i = 0 ; i <= hacker1.length-1 ; i++)
{
    capsHacker1+= hacker1[i].toUpperCase() + " "
}

console.log(capsHacker1);
let revHacker1 =[];
for (let i = 0 ; i <= hacker1.length-1 ; i++)
{
    revHacker1+= hacker1[(hacker1.length-1)-i]
}
console.log(revHacker1)
console.log(hacker1.localeCompare(hacker2))
console.log(hacker2.localeCompare(hacker1))
console.log(revHacker1)

if(hacker1.localeCompare(hacker2) > 1)
{    console.log(`The driver's name goes first.\n`)
}else if(hacker2.localeCompare(hacker1)){
    console.log(`Yo, the navigator goes first, definitely.\n`)
}else if(hacker2==hacker1){
    console.log(`What?! You both have the same name?\n`)

    

}



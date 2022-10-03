// Iteration 1: Names and Input

let hacker1 = "Elidiane";
let hacker2 ="Nathalie";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
let result1 = ''
for(let i = 0; i <= hacker1.length; i++){
    result1 += hacker1.charAt(i) + ' '

}
console.log(result1.toUpperCase());



console.log(hacker2.reverse());
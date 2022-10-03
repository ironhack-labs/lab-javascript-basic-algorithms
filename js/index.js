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
let upperCaseHacker1 = ''
for(let i = 0; i <= hacker1.length; i++){
    upperCaseHacker1 += hacker1.charAt(i) + ' '

}
console.log(upperCaseHacker1.toUpperCase());

let reversehacker2 = '';
for(let i = hacker2.length - 1; i >= 0 ; i--){
    reversehacker2 += hacker2[i];
}
console.log(reversehacker2);


if (hacker1.localeCompare(hacker2) === -1){
    console.log(`The driver's name goes first.`)
}else if (hacker1.localeCompare(hacker2) === 1){
    console.log(`Yo, the navigator goes first definitely.`);
}else{
    console.log(`What?! You both have the same name?`);
}
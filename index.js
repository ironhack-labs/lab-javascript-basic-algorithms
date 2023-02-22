// Iteration 1: Names and Input
let hacker1= "Thomas";
console.log(`The driver's name is ${hacker1}`);

let hacker2= "Bruno";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops

let upperSpace = hacker1.toUpperCase();
console.log(upperSpace.split('').join(' '));

let reverse = [];
for(let i=hacker2.length -1; i >= 0; i--){
    reverse.push(hacker2[i]);
}
console.log(`${reverse}`);

if(hacker1[0]<hacker2[0]){
    console.log(`The driver's name goes first.`);
}
else if(hacker1 === hacker2){
    console.log(`What?! You both have the same name?`)
}
else{
    console.log(`Yo, the navigator goes first definitely.`)
}

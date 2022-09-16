// Iteration 1: Names and Input
let hacker1 = 'Lloyd';
print(`The driver's name is ${hacker1}`);

let hacker2 = 'Ines';
print(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    print(`The driver has the longest name, it has ${hacker1.length} characters.`);
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length){
    print(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    print(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1
let capitalHacker1 ='';
for(i=0; i<hacker1.length; i++){
capitalHacker1 = capitalHacker1 + hacker1[i].toUpperCase() + ' ';
}
print(`${capitalHacker1}`);

//3.2
let reverseHacker2 = '';
for(i=hacker2.length - 1;i>=0; i--){
    reverseHacker2 = reverseHacker2 + hacker2[i];
}
print(`${reverseHacker2}`);
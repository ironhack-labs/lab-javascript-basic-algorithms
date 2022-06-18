// Iteration 1: Names and Input
let hacker1 = 'Renata Inojosa';
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Gabriel Oliveira';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
    // dúvida sobre o que colocar nesse último template string 
}
// Iteration 3: Loops
// 3.1:
let driversName = ' '
for (let i = 0; i < hacker1.length; i++) {
    driversName += hacker1[i] + ' '
}
console.log(driversName.toUpperCase());

//3.2: 
let navigatorsName = ''
for (let i = hacker2.length - 1; i>=0; i--) {
navigatorsName += hacker2[i]
}
console.log(navigatorsName);

//3.3

for (let i = 0; i > hacker1.length; i++) {
    if (hacker1[i]<hacker2[i]) {
        console.log('The driver\'s name goes first.') 
        break;
    } else if (hacker2[i]< hacker1[i]) {
        console.log('Yo, the navigator goes first definitely.') 
        break;
    } else if (hacker1[i] === hacker2[i]) {
        console.log('What?! You both have the same name?') 
    }
}


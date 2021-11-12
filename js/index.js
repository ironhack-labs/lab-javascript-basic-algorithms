// Iteration 1: Names and Input

let hacker1 = 'Lucas';

let hacker2 = 'Alexandre';

console.log(`"The driver's name is ${hacker1}"`);

console.log(`"The navigator's name is ${hacker2}"`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let resultString1 = '';
let resultString2 = '';

for(let i = 0; i < hacker1.length; i += 1) {
    
    if(i === (hacker1.length - 1)) {
        resultString1 += `${hacker1[i].toLocaleUpperCase()}`
        break
        }
    else {
     resultString1 += `${hacker1[i].toLocaleUpperCase()} `;
    }
        
}

for(let i = (hacker2.length - 1); i >= 0; i -= 1) {
    resultString2 += hacker2[i];
}

console.log(resultString1)
console.log(resultString2)

if (hacker1 < hacker2) {
    console.log('The driver\'s name goes first.');
} else if (hacker1 > hacker2) {
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log('What?! You both have the same name?');
}




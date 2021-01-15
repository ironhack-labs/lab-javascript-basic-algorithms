// Iteration 1: Names and Input

const hacker1 = 'Tahaís';

console.log(`The driver's name is ${hacker1}.`)

const hacker2 = 'Thaís';

console.log(`The navigator's name is ${hacker2}.`)



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name: it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name: it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, with ${hacker1.length} characters.`)
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '))

console.log(hacker2.split('').reverse().join(''))

const whitchNameFirst = (name1, name2) => {
    let shortestName = name1.length <= name2.length ? name1 : name2;

    let firstInAlphabet = shortestName;
    
    for (let i = 0; i < shortestName.length; i++) {
        if (name1[i] !== name2[i]) {
            if (name1[i].charCodeAt() < name2[i].charCodeAt()) {
                firstInAlphabet = name1;
                break;
            } else {
                firstInAlphabet = name2;
                break;
            }
        } else {
            continue;
        }        
    }

    return firstInAlphabet;
}

if (hacker1 === hacker2) {
    console.log('What?! You both have the same name?')
} else if (whitchNameFirst(hacker1, hacker2) === hacker1) {
    console.log(`The driver's name goes first.`)
} else {
    console.log(`Yo, the navigator goes first definitely.`)
}


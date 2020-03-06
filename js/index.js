// Iteration 1: Names and Input
let hacker1 = 'Damaris'
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = 'Damaris'
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops


console.log(hacker1.split('').join(' ').toUpperCase())


    // let space = ' ';
    // for(let i=0; i<hacker1.length; i++){
    //     space += i + ' '; 
    //     console.log(space.trim())    
    //  }
        

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString(hacker2);


// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

function lexicheck (a, b) {
    if(a === b) {
        console.log('What?! You both have the same name?');
    }

     else if (a < b) {
        console.log(`The driver's name goes first`);
    } else if (a > b) {
        console.log('Yo, the navigator goes first definitely.')
    }
}

lexicheck(hacker1,hacker2)
// Iteration 1: Names and Input
let hacker1 = 'Juan';

console.log(`The driver's name is ${hacker1}`);

let hacker2= 'Vanessa';

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length<hacker2.length) {

    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else { 
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
// 3.1 

function capitalCharacters(str){

    let nameCaps='';

    for (let i = 0; i < str.length; i++) {
        nameCaps = nameCaps + str[i].toUpperCase() + ' ';
    }
    nameCaps = nameCaps.substring(0, nameCaps.length - 1);

    str = nameCaps;

    return str; 
}

console.log(capitalCharacters(hacker1))

// 3.2 

function printReverse(myName){


    const reversedName = myName.split('').reverse().join('')
    return reversedName



}

console.log(printReverse(hacker2))


function lexicographic(myName1,myName2){
    if (myName1.localeCompare(myName2)=== 1) {

        console.log(`The driver name's goes first.`)
    } else if (myName1.localeCompare(myName2)=== -1) {
    
        console.log (`Yo, the navigator goes first definitely.`)
    } else { 
        console.log (`What?! You both have the same name?`)
    }
}

lexicographic(hacker1,hacker2)
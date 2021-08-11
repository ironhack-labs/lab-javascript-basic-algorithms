// Iteration 1: Names and Input
let hacker1= "Dario";
let hacker2= "Michael";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log('The driver has the longest name, it has ${hacker1.length} characters.')
    }
    
    else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
    }
    
    
    else if(hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
    }
    console.log(`${hacker1[0].toUpperCase()} ${hacker1[1].toUpperCase()} ${hacker1[2].toUpperCase()} ${hacker1[3].toUpperCase()} ${hacker1[4].toUpperCase()}`)
    
    console.log(`${hacker2[6]} ${hacker2[5]} ${hacker2[4]} ${hacker2[3]} ${hacker2[2]} ${hacker2[1]} ${hacker2[0]}`)

// Iteration 3: Loops
if(hacker1[0] < hacker2[0]){
console.log(`The driver's name goes first.`)
}
else if(hacker1[0] > hacker2[0]){
console.log(`Yo, the navigator goes first definitely.`)
}
else if(hacker1[0] == hacker2[0]){
console.log(`What?! You both have the same name?`)
}
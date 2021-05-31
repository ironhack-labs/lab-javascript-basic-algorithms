// Iteration 1: Names and Input

const hacker1 = "gigi"
console.log(`the driver's name is ${hacker1}`);


const hacker2 = "ben"
console.log(`the navigator's name is ${hacker2}`);


// Iteration 2: Conditionals



if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops

for (let i = 0; i<= 0; i++) {
    console.log(...hacker1.toUpperCase());
}

for (let i = hacker2.length -1; i >= 0; i--) {
   console.log(hacker2[i])
}


let hackers = [hacker1, hacker2]
hackers.sort();

if (hackers[0] == hacker1) {
console.log("gigi's name goes first")
} else if ( hacker1 === hacker2) {
    console.log("you both have the same name") 
} else {
    console.log("ben now goes first")
}

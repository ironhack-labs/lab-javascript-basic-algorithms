

//Iteration 1
let hacker1 = 'Corentine'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Adam'

console.log(`The navigator's name is ${hacker2}`)


//Iteration 2
if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} 

else if (hacker1.length < hacker2.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)  
}

else { 
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

//Iteration 3
//3.1
let result = '';

for (let i=0; i<hacker1.length; i++) {
    result += hacker1[i].toUpperCase() + ' ';
}
console.log(result)

//3.2.
let result2 = '';

for (let i=hacker1.length-1;  i>=0 ; i--) {
    result2 += hacker1[i];
}
console.log(result2);

//3.3
let hackers = [hacker1, hacker2];
const sortedArray = hackers.sort());

console.log(sortedArray);

if (hackers[0] === hacker1 && hacker1 !== hacker2) {
    console.log(`The driver's name goes first.`);
} 
else if (hackers[0] === hacker2 && hacker1 !== hacker2) {
   console.log(`Yo, the navigator goes first definitely.`) ;
}
else {
    console.log(`What?! You both have the same name?`)
}

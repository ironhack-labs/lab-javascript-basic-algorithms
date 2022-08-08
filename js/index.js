// Iteration 1: Names and Input

let hacker1 =  'Malte'; 
console.log(`The drivers name is ${hacker1}`);


let hacker2 =  'Jean'; 
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else if (hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops
let newDriverName = '';
for (let i = 0; i < hacker1.length; i++){
    newDriverName = newDriverName + hacker1[i].toUpperCase() + ' ';
}
hacker1 = newDriverName;
console.log(hacker1)

let newNavigatorsName = '';
for (let j = hacker2.length-1; j > -1; j--){
    newNavigatorsName = newNavigatorsName + hacker2[j];
    console.log(j)

}
console.log(newNavigatorsName)

let driver = 'malte'
let navigator = 'jean'


if (driver[0]< navigator[0]) {
    console.log(`The driver's name goes first.`)
}else if (navigator[0]< driver[0]){
    console.log(`Yo, the navigator goes first definitely.`)
}else{
    console.log(`What?! You both have the same name?`)
}

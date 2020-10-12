// Iteration 1: Names and Input
const hacker1 = "Jack";
const hacker2 = "Jack is also the Navigator"
console.log(`The driver's name is ${hacker1}, surprisingly ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`the driver has the longest name, it has ${hacker1.length}`)
} else {
    if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
        if (hacker1.length = hacker2.length)
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
}

// Iteration 3: Loops
let iterator = 0;
let hackerCount = '';
let hackerSwitch = '';
for(let iterator = 0; iterator < hacker1.length; iterator++) {
        switch (iterator) {
        case 0:
            hackerSwitch = 'J';
        break;
        case 1:
            hackerSwitch = 'A'; 
        break;
        case 2:
            hackerSwitch = 'C';
        break;
        case 3:
            hackerSwitch = 'K';   
    } 

   hackerCount += hackerSwitch + " ";
   
} 

console.log(hackerCount);

//console.log(hacker1[i]);

hackerCount= '';
for(let iterator = hacker1.length - 1; iterator >= 0; iterator--) {
    hackerCount += hacker1[iterator];
} 

console.log(hackerCount);

if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.");
} else {
    console.log("What?! You both have the same name?");
}

//finished! on to bonus questions
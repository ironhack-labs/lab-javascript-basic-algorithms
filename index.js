// Iteration 1: Names and Input

const hacker1 = "Otto";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Otto";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if(hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length>hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let capitalName = "";

for (let i of hacker1) {
    capitalName += `${i.toUpperCase()} `;
}
console.log(capitalName);


let reversedName = "";

for (let j = hacker2.length-1;j>=0;j--) {
    reversedName+= hacker2[j];
}
console.log(reversedName);


let smallestIndex = Math.min(hacker1.length,hacker2.length);

for (let k = 0; k < smallestIndex; k++) {
    if (hacker1[k]<hacker2[k]) {
        console.log("The driver's name goes first.");
        break;
    } else if (hacker1[k] > hacker2[k]) {
        console.log("Yo, the navigator goes first, definitely.");
        break;
    } 
    else {
        console.log("What?! You both have the same name?");
        break;
    }
}
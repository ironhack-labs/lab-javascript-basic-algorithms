// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops


let hacker1 = `Peter`;
console.log(`The driver's name is ${hacker1}`);
let hacker2 = `John`;
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}

console.log(hacker1.toUpperCase().split('').join(' '));

function reverseString(hacker2) {
    let splitString = hacker2.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
    }
 
console.log(reverseString(hacker2));

let a = hacker1;
let b = hacker2;


function strcmp(a, b) {
    if(a === b) {
        return `What?! You both have the same name?`;
    }

     if (a > b) {
        return `The driver's name goes first.`;
    }

    return `Yo, the navigator goes first definitely.`;
}



let arr = [hacker1 , hacker2];
arr.sort(function(a, b) {
    return a.localeCompare(b);
});
console.log(strcmp(a,b));
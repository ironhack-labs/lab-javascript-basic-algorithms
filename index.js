// Iteration 1: Names and Input
const hacker1 = "richard";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "arichad";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
{
 console.log(`The driver has the longest name, it has ${hacker1}, ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
 console.log(`It seems that the navigator has the longest name, it has ${hacker2}, ${hacker2.length} characters.`)   
} else {
 console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`) 
}


// Iteration 3: Loops

for(i = 0; i < hacker1.length; ++i){
   
   let capName = hacker1[i].toUpperCase()
    console.log(capName);
};



function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(`Reversed string is : ${reverseString(hacker1)}`)



/*var arr = [hacker1, hacker2];
arr.sort(function(a, b) {
    return a.localeCompare(b);
});


if (arr[0] === hacker1) {
     console.log("The driver's name goes first.");
} else if (arr[0] === hacker2) {
     console.log("Yo, the navigator goes first, definitely.");
} else if (arr[0] === arr[1] ) {
     console.log("What?! You both have the same name?");
} else {
     console.log("do nothing");
} */

var arr = [hacker1, hacker2];

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// A simple way to do the comparation

//Bonus Time!
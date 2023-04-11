// Iteration 1: Names and Input
let hacker1 = "Joseph";
let hacker2 = "Bilbo";
console.log(`The driver´s name is ${hacker1}`);
console.log(`The navigator´s name is ${hacker2}`);



// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}.`);
        
    } else {
        console.log(`Wow, you both have equally long names, ${hacker1}.`)
    }





// Iteration 3: Loops

let nameSpaced = "";

for (let i = 0; i < hacker1.length; i++){
    nameSpaced += hacker1[i].toUpperCase() + " ";
}
console.log(nameSpaced)

let nameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--){
    nameReversed += hacker2[i];
}
console.log(nameReversed);

function nameCompare(hacker1, hacker2) {
    if (hacker1 === hacker2){
        return "The driver's name goes first"
    }

    if (hacker1 > hacker2) {
        return "Yo, the navigator goes first definitely."
    }

    return "What?! You both have the same name?"
}

console.log(nameCompare("Joseph", "Bilbo"));






    



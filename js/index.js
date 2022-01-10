console.log("i'm ready!")

// Iteration 1: Names and Input

let hacker1 = "Niko"

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Gabe"

// Iteration 2: Conditionals

console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

let newName = ""
for (i=0; i < hacker1.length; i++) {
    newName += hacker1[i] + " ";
}
console.log(newName.toUpperCase())

let reverseName = ""
for (i=hacker1.length-1; i>=0 ; i--) {
    reverseName += hacker1[i]
}
console.log(reverseName) 

let lengthToGo = 0;

if (hacker1.length >= hacker2.length){
    lengthToGo = hacker2.length;
} else if (hacker1.length <= hacker2.length){
    lengthToGo = hacker1.length;
}

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

let picked = false;
for (let i = 0; i < lengthToGo; i++){
    if (hacker1[i] > hacker2[i]){
        console.log("Yo, the navigator goes first definitely.")
        picked = true;
        break;
    } else if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.")
        picked = true;
        break;
    } 
}

if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
}
else if (picked === false) {
    if (hacker1.length > hacker2.length) {
        console.log("Yo, the navigator goes first definitely.")
    } else {
        console.log("The driver's name goes first.")
    }
}

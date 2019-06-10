// Names and Input
let hacker1 = `Billy`
console.log(`The driver's name is ${hacker1}`)

let hacker2 = `Gulfiya`
//("Enter the navigator's name: ");
console.log(`The navigator's name is ${hacker2}`)


//Conditionals
if (hacker1.length>hacker2.length){
   console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if(hacker1.length<hacker2.length){
   console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
   console.log(`Wow, you both got equally long names, ${hacker1.length} characters!!`);
}

let spaceName = "";
for (i=0; i<hacker1.length; i++) {
 spaceName = spaceName + hacker1[i] + " ";
 console.log(spaceName.toUpperCase())
}

let reverseName = hacker2.split("").reverse()
 console.log(reverseName.join(""));

let lexiOrder = hacker1.localeCompare(hacker2)
console.log(lexiOrder)

if (lexiOrder === 1) {
 console.log(`The driver's name goes first`);
} else if (lexiOrder === -1) {
 console.log(`Yo, the navigator goes first definitely`);
} else {
 console.log(`What?! You both got the same name?`);
}

// Lorem ipsum generator

// Iteration 1: Names and Input
console.log("I'm ready!")

let hacker1="Oriane";
console.log(`The driver's name is ${hacker1}`);

let hacker2="Oezge";
console.log(`The Navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}characters.`);
}

else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops

let i=0;
let stringName = ''
for(i=0; i< hacker1.length; i++) {
  stringName = stringName + ` ` + hacker1[i]
  }

console.log(stringName.toUpperCase())

//3.2
let y;
let stringName2 = ''
for(y=hacker2.length-1; y >= null; y--) {
  stringName2 = stringName2 + hacker2[y]
  }
console.log(stringName2)

//3.3

 
const arrayNames = [hacker1, hacker2];
arrayNames.sort();
console.log(arrayNames);

if(arrayNames[0] == "Oezge" && arrayNames[1] == "Oriane") {
  console.log(`The driver's name goes first.`)
} else if (arrayNames[0] == "Oriane" && arrayNames[1] == "Oezge") {
  console.log(`Yo, the navigator goes first definitely.`)
} else if (arrayNames[0] === arrayNames[1] ) {
  console.log(`What?! You both have the same name?`)
}


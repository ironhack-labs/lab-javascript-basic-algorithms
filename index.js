// Iteration 1: Names and Input
let dev1 = "Salva"
console.log("The driver's name is " + dev1)

let dev2 = "Xavi"
console.log("The navigator?s name is " + dev2)

// Iteration 2: Conditionals
if (dev1.length > dev2.length) {
    console.log("the dev1 has the longest name, it has " + dev1.length + " characters.");
} else if (dev2.length > dev1.length) {
    console.log("It seems that dev2 has the longest name, it has " + dev2.length + "characters.")
} else {
    console.log("Wow, you both have equally long names, " + dev1.length + " characters!")
}

// Iteration 3: Loops
let spacedName = "";

for (let i = 0; i < dev1.length; i++) {
    spacedName += dev1[i].toUpperCase() + " ";
}
console.log(spacedName.trim());

//----------------------

let reversedName = "";

for (let i = dev2.length - 1; i >= 0; i--) {
    reversedName += dev2[i];
}
console.log(reversedName)

//-----------------------

if (dev1 < dev2) {
    console.log("the driver's name goes first.");
} else if (dev1 > dev2) {
    console.log("The navigator goes first definitely");
} else {
    console.log("What?! You both have the saame name?")
}
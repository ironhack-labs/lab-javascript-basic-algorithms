// Iteration 1: Names and Input

const haker1 = "Esther";
console.log(`The driver´s name is ${haker1}`);
const haker2 = "Sara";
console.log(`The navigator´s name is ${haker2}`);




// Iteration 2: Conditionals

if (haker1.length > haker2.length) {
    console.log(`The driver has the longest name, it has ${haker1.length} characters.`);
} else if (haker1.length < haker2.length) {
    console.log(`The navigator has the longest name, it has ${haker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${haker1.length} characters!`);

}

// Iteration 3: Loops

let capitalSeparatedName = "";

for (let i = 0; i < haker1.length; i++) {
    const char = haker1[i].toUpperCase();

    capitalSeparatedName += `${char} `;
}

console.log(capitalSeparatedName.trim());


let reverseName = "";

for (let i = haker2.length -1; i >= 0; i--) {
    const char = haker2[i];
    reverseName += char;
}

console.log(reverseName);

let counter = 0;
isFound = false;

while (haker1[counter] != undefined && haker2[counter] != undefined && !isFound){
    
    const char1 = haker1[counter].toLowerCase();
        
    const char2 = haker2[counter].toLowerCase();

    if (char1 < char2) {
    console.log("The driver´s name goes first");
        isFound = true;
    } else if( char2 < char1) {
        console.log("Yo, the navigator goes first definitely");
        isFound = true;

    } else {
        counter ++;
    }
 }

 if (!isFound) {
    if(haker1.length < haker2.length) {
        console.log("The driver´s naame goes first");

    } else if(haker1.length > haker2.length) {
        console.log("Yo, the navigator goes first definitely");

    } else {
        console.log("What?! You both have the same name?");
    }
 }

let number = haker1.localeCompare(haker2)

if (number === -1) {
    console.log("The driver´s naame goes first");
} else if (number === 1) {
    console.log("Yo, the navigator goes first definitely");
} else if (number === 0) {
    console.log("What?! You both have the same name?");
}
    
// Iteration 1: Names and Input

const hacker1 = "john";
console.log(hacker1);

const hacker2 = "john";
console.log(hacker2);

// Iteration 2: Conditionals

// First way

if(hacker1.length > hacker2.length){
    let totalChar = hacker1.length;
    console.log(`The driver has the longest name, it has ${totalChar} characters.`);
}
else if(hacker1.length < hacker2.length){
    totalChar = hacker2.length;
    console.log(`It seems that the navigator has the longest name, it has ${totalChar}.`);
}
else{
    console.log(`Wow, you both have equally names, ${hacker1.length} characters!`);
}

// Second way

hacker1.length > hacker2.length ? console.log(`The driver has the longest name, it has ${hacker1.length} characters.`) : hacker1.length < hacker2.length ? console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}.`) : console.log(`Wow, you both have equally names, ${hacker1.length} characters!`);

// Third way

// Something wrong

switch(hacker1){
    case hacker1.length > hacker2.length:
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
        break;
    case hacker1.length < hacker2.length:
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}.`);
        break;
    default:
        console.log(`Wow, you both have equally names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
let newWord1 = "";

for(let i = 0; i < hacker1.length; i++){
    newWord1 += hacker1[i].toUpperCase() + " ";
}
console.log(newWord1);

let newWord2 = "";

for(let i = hacker2.length - 1; i >= 0; i--){
    newWord2 += hacker2[i];
}
console.log(newWord2);

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let firstWordP = 0;
let secondWordP = 0;

for(let i = 0; i < alphabet.length; i++){

    for(let x = 0; x < hacker1.length; x++){

        if(hacker1[x] === alphabet[i]){
           
            firstWordP += alphabet.indexOf(alphabet[i]);
    }
    }
    for(let x = 0; x < hacker2.length; x++){

        if(hacker2[x] === alphabet[i]){
           
            secondWordP += alphabet.indexOf(alphabet[i]);
    }
    }
    
}

if(firstWordP > secondWordP){
    console.log("The driver's name goes first.");
}
else if(firstWordP < secondWordP){
    console.log("Yo, the navigator goes first, definitely.");
}
else{
    console.log("You both have the same name?");
}

// Stiil need to complete the bonus

const longText = "Nam eget neque tincidunt,eleifend eros sollicitudin,ultricies metus.Aliquam pharetra lectus convallis dui elementum,sed consequat turpis luctus.Sed leo purus,consequat vitae dui ut,ornare cursus nisl.Etiam est arcu, iaculis eget convallis a, fermentum quis nisl. Pellentesque eros massa, tempor viverra vehicula non, lacinia id nunc.";

console.log(longText);

let totalWords = 0;

for(let i = 0; i < longText.length; i++){

    if(" " === longText[i] || longText[i] === "." || longText[i] === ","){
        totalWords++;
    }
    else if(" " === longText[i] || longText[i] === ". " || longText[i] === ", "){
        totalWords++;
    }
}

console.log(`The paragraph has ${totalWords} words.`);
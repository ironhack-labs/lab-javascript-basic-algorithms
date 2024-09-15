
// Iteration 1: Names and Input
let hacker1 = "Filipa";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Manuel";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator  has the longest name, it has ${hacker2.length} characters.`);
}
else{
    console.log(`Wow you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let nameDriver = "";
for (let i = 0; i < hacker1.length; i++){
    
    nameDriver += hacker1[i].toUpperCase() + " ";
}
console.log(nameDriver)

let nameNavigator = "";
for (let i = hacker2.length-1; i >= 0; i--){
    nameNavigator += hacker2[i];
}
console.log(nameNavigator);

// lexicographic order
if (hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.");
}
else if (hacker1.localeCompare(hacker2) === -1){
    console.log("Yo, the navigator goes first, definitely.");
}
else{
    console.log("What?! You both have the same name?");
}




// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, erat sit amet cursus hendrerit, ex ipsum accumsan libero, at consequat augue ex sit amet velit. Aenean imperdiet tincidunt imperdiet. In cursus ullamcorper metus. Suspendisse nec felis ut erat facilisis elementum at eu odio. Sed at venenatis turpis. Praesent et enim sit amet libero porta gravida quis nec lacus. Etiam aliquam vehicula egestas. Nam imperdiet quam massa, consectetur pharetra urna dignissim eget. Nunc pretium sodales cursus. Donec eget tempor ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc aliquet turpis ac mauris dignissim, mollis porta purus consectetur. Nunc interdum nunc quis arcu consectetur pharetra. Cras a efficitur ante, vel hendrerit nunc. Duis hendrerit fermentum ex, id ornare neque blandit quis. Aenean turpis nisi, imperdiet ac justo in, fermentum fermentum ipsum. Proin at dapibus metus. Aliquam et hendrerit purus, vel interdum erat. Vivamus eu faucibus nibh. Morbi orci augue, aliquet congue quam at, consequat sollicitudin ex. Mauris quis nibh libero. Integer sollicitudin feugiat velit et venenatis. Vivamus vitae rhoncus elit. Donec lobortis dui sed odio mollis commodo. Donec consequat dapibus urna, eu volutpat libero. Duis eu interdum odio. Phasellus dolor arcu, pellentesque sit amet sapien ut, pretium ultricies dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus eu nisi ligula. Morbi eu velit sed quam pellentesque placerat. Ut ullamcorper neque sit amet porta viverra. Aliquam quis aliquam massa, sit amet sollicitudin felis. Aenean convallis auctor sagittis."

// OPTION 1
let arrayWords = longText.split(' ');
console.log(arrayWords.length);
let countEt1 = 0;
for (let i = 0; i < arrayWords.length; i++){
    if (arrayWords[i] === "et"){
        countEt1++;
    }
}

console.log(`The string has ${arrayWords.length} words`);
console.log(arrayWords);
console.log(`The string has ${countEt1} et's`);


// OPTION 2

let countSpace = 0;

for (let i = 0; i < longText.length; i++){
let countWords=0;
    if (longText[i].includes(" ")){
        countSpace++ 
    }
}
console.log(`Number of words is ${countSpace +1}`);

let countEt2 = 0;
for (let i = 0; i < longText.length; i++){
    if (longText[i-1] === " " && longText[i] === "e" && longText[i+1] === "t" && (longText[i+2] === " " || longText[i+2] === "." || longText[i+2] === "," )){
        countEt2++
    }
}
console.log(`Number of et words is: ${countEt2}`);


// BONUS 2
let phraseToCheck1 = "A man, a plan, a canal, Panama";
let phraseToCheck2 = "Amor, Roma";
let phraseToCheck3 = "race car";
let phraseToCheck4 = "stack cats";
let phraseToCheck5 = "step on no pets";
let phraseToCheck6 = "taco cat";
let phraseToCheck7 = "put it up";
let phraseToCheck8 = "Was it a car or a cat I saw?";
let phraseToCheck9 = "No 'x' in Nixon";


function checkPalidrome(string){
    let newString = string.replaceAll(/[^a-zA-Z]/g, "").toLowerCase;
    let midpoint = Math.floor(newString.length/2);    
   
    for (let i = 0; i < midpoint; i++){
        if(newString[i] !== newString[newString.length-1-i]){
            return false; 
        }
    }

    return true;
}

console.log(checkPalidrome(phraseToCheck1));
console.log(checkPalidrome(phraseToCheck2));
console.log(checkPalidrome(phraseToCheck3));
console.log(checkPalidrome(phraseToCheck4));
console.log(checkPalidrome(phraseToCheck5));
console.log(checkPalidrome(phraseToCheck6));
console.log(checkPalidrome(phraseToCheck7));
console.log(checkPalidrome(phraseToCheck8));
console.log(checkPalidrome(phraseToCheck9));
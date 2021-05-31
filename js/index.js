// Iteration 1: Names and Input
let hacker1 = "Danilo";
console.log(`The driver name is: ${hacker1}`);

let hacker2 = "Tiago";
console.log(`The navigator's name i: ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverName = "";

for ( let i = 0; i < hacker1.length; i++){
    driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigatorName = "";

for  (let i = hacker2.length - 1; i >= 0; i--){
    navigatorName += hacker2[i];
}
console.log(navigatorName);

//3.3 Depending on the lexicographic order of the strings, print:
//The driver's name goes first.
//Yo, the navigator goes first definitely.
//What?! You both have the same name?

if (hacker1 > hacker2){
    console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?");
}

//BONUS
//Generate 3 paragraphs. Store the text in a variable type of string.
//Make your program count the number of words in the string.
//Make your program count the number of times the Latin word et appears.

const text = "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eu metus eu lorem pharetra finibus. Aenean mauris massa, gravida eu rhoncus eu, scelerisque eget nulla. Sed viverra facilisis metus, a elementum erat laoreet id. Vestibulum vestibulum tortor tortor, sit amet egestas augue pretium consectetur. In eu accumsan turpis. Sed dictum tortor neque, vitae vehicula nibh consectetur eget. Mauris vestibulum suscipit ligula, eget auctor nisl ullamcorper eget. Etiam tincidunt tincidunt dui, ac viverra nunc tristique quis.";

let numWords = 0; //counter

// Loop through the text and count spaces in it 
for(let i = 0; i < text.length; i++){
    let currentCharacter = text[i];

    // Check if the character is a space
    if (currentCharacter === " "){
        numWords += 1;
    }
}

// Add 1 to make the count equal to the number of words 
console.log(numWords +1);



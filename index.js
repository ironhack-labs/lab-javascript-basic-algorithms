// Iteration 1: Names and Input
let hacker1 = "Intel"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Chrome"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}
// Iteration 3: Loops

//3.1
for (let i = 0; i < hacker1.length; i++){
    console.log(hacker1[i].toUpperCase());
}
//3.2
for (let i = 0; i < hacker1.length; i++){
    console.log(hacker1[hacker1.length-i-1]);
}

//3.3 
if (hacker1 == hacker2){
    console.log("What?! You both have the same name?")
}
else{
    for (let i = 0; i < hacker1.length; i++){
        if (hacker1[i] < hacker2[i]){
            console.log("The driver's name goes first.")
            break;
        }
        else if(hacker1[i] > hacker2[i]){
            console.log("Yo, the navigator goes first, definitely.")
            break;
        }
    }
}

// Bonus 1
let longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

// Count the number of "et" occurrences (case sensitive, as a whole word)
const etMatches = longText.match(/\bet\b/g);
const etCount = etMatches ? etMatches.length : 0;
console.log(`Number of "et" occurrences: ${etCount}`);

let phraseToCheck = "A man, a plan, a canal, Panama"
let cleaned = phraseToCheck.replace(/[^a-z0-9]/gi, '').toLowerCase();

// get halve of the length
let middle = Math.floor(cleaned.length / 2)
let length = cleaned.length
let palindrom = true

for (let i = 0; i < middle; i++) {
    if (cleaned[i] != cleaned[length - 1 - i]) {
        palindrom = false;
        break;
    }
}

if (palindrom){
    console.log("It's a palindrom")
}
else{
    console.log("not a palindrom")
}
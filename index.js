// Iteration 1: Names and Input
const hacker1 = "Julius";
const hacker2 = "Julius";

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}


// Iteration 3: Loops
let driver = "";
let navigator = "";

for (let i = 0; i <= hacker1.length -1; i++){
    driver += ` ${hacker1[i]}`;
}
console.log(driver);

for (let i = hacker2.length -1; i >= 0; i--){
    navigator += `${hacker2[i]}`;
}
console.log(navigator);

if (driver < navigator){
    console.log("The driver's name goes first.");
} else if (driver > navigator){
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Iteration Bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lacinia enim. Morbi quis massa quam. Praesent quis vehicula ante, ac posuere tellus. Quisque ac lacinia sapien, non elementum massa. Curabitur libero quam, gravida vestibulum dictum a, posuere at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam suscipit mi pulvinar nisl fermentum, eu dignissim dolor dictum. Quisque quis gravida nibh. Vivamus aliquet hendrerit vestibulum. Vestibulum quam ex, tincidunt eu tortor eu, ultrices tincidunt magna. In est est, luctus ut quam a, lobortis elementum turpis. Nunc eget tincidunt diam, ac commodo mauris. In mauris risus, congue a facilisis ut, finibus eu nunc. Nulla iaculis ipsum mauris, vitae tristique velit sodales vitae. Donec eget cursus arcu. Proin sollicitudin nec quam vel varius. Etiam magna lorem, feugiat id nisl id, auctor volutpat felis. Etiam aliquet dui vitae purus semper venenatis. Nulla elementum malesuada turpis bibendum congue. Proin nec erat nibh. Duis ornare mauris a urna convallis ultricies. Donec quis leo posuere, malesuada tortor nec, cursus massa. Aliquam in malesuada leo, eu dapibus risus. Aenean tincidunt maximus luctus. Morbi eu malesuada urna."

function countWords(str) {
    const wordsArr = str.split(' ');
    const numberOfWords = wordsArr.length;
    console.log(numberOfWords);

    let etCount = 0;
    for (let word of wordsArr) {
        if (word.includes('et')) etCount++;
    }
    console.log(etCount);
}

countWords(longText);

// Iteration Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
let forwards = "";
let backwards = "";

for (let i = 0; i <= phraseToCheck.length - 1; i++){
    if (phraseToCheck[i] === ',' || phraseToCheck[i] === ' ' || phraseToCheck[i] === '!' || phraseToCheck[i] === '?' || phraseToCheck[i] === "'") {
        continue;
    }
    forwards += phraseToCheck[i];
    
}
console.log(forwards);
let resultForwards = forwards.toLowerCase();

for (let i = phraseToCheck.length - 1; i >= 0; i--){
    if (phraseToCheck[i] === ',' || phraseToCheck[i] === ' ' || phraseToCheck[i] === '!' || phraseToCheck[i] === '?' || phraseToCheck[i] === "'") {
        continue;
    }
    backwards += phraseToCheck[i];
    
}
console.log(backwards);
let resultBackwards = backwards.toLowerCase();

if (resultForwards === resultBackwards){
    console.log("This is a Palindrome!")
} else {
    console.log("This is NOT a Palindrome! I repeat NOT a Palindrome!")
}
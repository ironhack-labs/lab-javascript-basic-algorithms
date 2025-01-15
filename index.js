// Iteration 1: Names and Input
const hacker1 = "Gwendal";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Sebastien";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}
else { console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) }

// Iteration 3: Loops
let hacker1UpperCase = ""
for (let i = 0; i < hacker1.length; i++) {
    hacker1UpperCase += hacker1[i].toUpperCase() + " "
}
console.log(hacker1UpperCase);

let reverseName = "";
for (let j = hacker2.length; j > 0; j--) {
    reverseName += hacker2[j - 1];
}
console.log(reverseName);
//bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar venenatis dictum. Sed libero felis, gravida vitae scelerisque nec, semper ut nisl. Vivamus semper dui justo, in placerat turpis posuere vel. Aenean molestie fringilla arcu. Sed pretium porttitor arcu a faucibus. Proin velit est, rhoncus eu ante ut, sodales laoreet magna. Suspendisse commodo, felis a pretium tristique, ipsum urna sollicitudin enim, eu dapibus dui velit sit amet quam. Donec dapibus libero non ligula elementum, sit amet euismod sapien rhoncus. Nunc finibus ligula vitae condimentum consequat. Quisque imperdiet purus eros, et ultricies quam tempus quis. Ut lacinia vel quam eu suscipit. Vivamus aliquam felis sed convallis bibendum. Integer a ex quam. Aenean nec lorem mattis, placerat leo ac, aliquam ex. Donec volutpat ante vitae sapien dignissim, eget vehicula quam aliquam. Aenean eget pretium ligula. Suspendisse fermentum tristique ultrices. Donec varius lectus nec ante dapibus consequat. Phasellus porta neque sapien, at eleifend enim sodales eu. Integer a dolor sed metus condimentum lobortis a vel orci. Cras volutpat nisi elit, et egestas eros dignissim sed. Quisque quis mattis elit. Etiam sed felis posuere, dapibus nulla nec, pulvinar lorem. In luctus eu nisi malesuada condimentum. Donec eget justo elit. Morbi eu justo porttitor, mollis eros id, ultricies nisi. Integer vestibulum luctus molestie. Quisque dictum dapibus dui, quis feugiat orci ultrices eget. Etiam feugiat, odio ut volutpat dignissim, dui dui pellentesque lectus, ut tempus erat nisi vel risus. Fusce tincidunt nulla quis nulla porta tincidunt. Sed volutpat ex sit amet nunc auctor, eu varius nibh auctor. Proin mollis massa eget molestie vulputate. Nullam facilisis est sollicitudin, pharetra lacus vitae, consectetur lorem."
let wordCounter = 0;
for (let i = 1; i < longText.length; i++) {
    if (longText[i] === " ") {
        wordCounter++
    };
}
console.log(wordCounter);

let etCounter = 0;
for (let j = 0; j < longText.length; j++) {
    if ((longText[j] + longText[j + 1] + longText[j + 2] + longText[j + 3]).includes(" et ") || (longText[j] + longText[j + 1] + longText[j + 2] + longText[j + 3]).includes(" Et ") === true) {
        etCounter++
    }
};
console.log(etCounter)

//bonus 2
const phraseToCheck = "Amor, Roma";
let cleanPhraseToCheck = "";
let reversedPhrase = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    if (phraseToCheck[i] === " ") {
        continue;
    }
    else if (phraseToCheck[i] === ",") {
        continue;
    }
    else {
        reversedPhrase += phraseToCheck[i].toLowerCase;

    }
}

for (let j = 0; j < phraseToCheck.length; j++) {
    if (phraseToCheck[j] === " ") {
        continue;
    }
    else if (phraseToCheck[j] === ",") {
        continue;
    }
    else { cleanPhraseToCheck += phraseToCheck[j].toLowerCase };

}

if (reversedPhrase === cleanPhraseToCheck) {
    console.log(`${phraseToCheck} is a palindrome`);
}

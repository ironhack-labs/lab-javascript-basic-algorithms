// Iteration 1: Names and Input
const hacker1 = "László";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Vibeke";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`${hacker2} has the longest name.`);
}
else {
    console.log(`They have equally long names.`);
}


// Iteration 3: Loops
let capitalizedHacker = "";

for (let i = 0; i < hacker1.length; i++) {
    capitalizedHacker += `${hacker1[i]} `;
}
console.log(capitalizedHacker.toUpperCase());

let backwardHacker = "";

for (let j = hacker2.length-1; j >= 0; j--) {
    backwardHacker += `${hacker2[j]}`;
}
console.log(backwardHacker);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
}
else if (hacker2.localeCompare(hacker1) === -1) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}


// Bonus 1:
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a sem nisl. Nam in rutrum ligula, at sagittis ex. Ut non leo libero. Donec enim eros, blandit non congue eget, porta vel mauris. Sed bibendum, enim in consectetur tincidunt, elit augue varius tellus, et tristique odio orci vel enim. Curabitur commodo leo condimentum mi blandit imperdiet. Maecenas a fringilla erat. Fusce ut vulputate est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque cursus lorem sed sodales luctus. Praesent quis faucibus ante. Suspendisse lacinia varius tempor.

Nullam condimentum id libero vel bibendum. Ut malesuada sapien vitae leo lobortis dictum. Fusce ut erat at purus venenatis blandit mattis eu velit. Aenean tristique eros sem, ut finibus velit consequat nec. Morbi pharetra fringilla pretium. In dictum lectus eget diam dignissim porta. Nulla ut eleifend erat. Donec magna metus, posuere vel varius at, porttitor vel massa. Nunc at fermentum nisl. Proin faucibus, diam at viverra semper, leo nisl fringilla ex, mattis interdum turpis lorem sit amet leo. Duis mi ipsum, fringilla sit amet massa eget, pretium elementum velit. Morbi tristique, turpis et ultricies lacinia, velit felis molestie diam, eu placerat quam sem sed sem. Donec non magna nec lacus porta ultricies ac id augue. Nam sed nunc et sapien feugiat cursus.

Donec tincidunt mauris at massa finibus consectetur. Nunc cursus et felis a congue. Aliquam purus ante, facilisis in justo id, gravida finibus tortor. Vivamus id tortor a libero venenatis tempor. Mauris et tristique nibh, et vehicula ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eu lacus eget purus finibus eleifend. Integer ornare ornare risus eget sodales. Maecenas auctor faucibus molestie. Vivamus eu ex enim. Pellentesque sit amet tempor mauris, quis pretium nulla. Duis porta vulputate lectus sed bibendum. Nam vitae neque vitae lectus vulputate sollicitudin. Vivamus vitae pulvinar leo. Mauris congue venenatis leo at luctus.`;

let wordCount = 0;

for (k = 0; k < loremIpsum.length; k++) {
    if (loremIpsum.charAt(k) === " ") {
        wordCount++;
    }
}

console.log(`The number of words is: ${wordCount}.`);

let etCount = 0;
const etSplit = loremIpsum.split(" et ");

for (let l = 0; l < etSplit.length-1; l++) {
    etCount++;
}

console.log(`The number of \"et\" words is: ${etCount}.`);

//Bonus 2:
const phraseToCheck = "Abba";
let phraseToBackwards = "";

for (let m = phraseToCheck.length-1; m >= 0; m--) {
    phraseToBackwards += `${phraseToCheck[m]}`;
}
if (phraseToCheck.toLowerCase() === phraseToBackwards.toLowerCase()) {
    console.log("It's a palindrome");
}
else {
    console.log("It's not a palindrome.");
}
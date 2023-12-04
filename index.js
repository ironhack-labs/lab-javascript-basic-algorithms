// Iteration 1: Names and Input

const hacker1 = "Alex";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Alejandro";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let hacker1UpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1UpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1UpperCase);

let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum a turpis ut vestibulum. Sed eu blandit purus, ullamcorper finibus velit. Curabitur commodo rutrum ligula, et pulvinar ante imperdiet sed. Fusce tempor ante ut gravida lobortis. Nullam porttitor placerat lacus, ut facilisis odio lacinia a. Sed felis lectus, tincidunt vitae dictum vel, maximus maximus quam. Nam non vestibulum sem. Integer maximus, nisi sed sagittis eleifend, orci dui facilisis enim, eget tincidunt magna urna tincidunt lorem. Maecenas rhoncus vehicula nulla nec viverra. Sed volutpat consequat elit in aliquet. Etiam rhoncus tristique neque quis mattis. Nam eros ante, euismod non tortor quis, finibus interdum nulla. Suspendisse potenti. Praesent aliquet nisi a urna placerat, eget vulputate ex mollis. Ut et aliquam ex. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nunc in enim fermentum laoreet ac ac sapien. Suspendisse non ex rutrum, gravida metus a, placerat dui. Sed neque justo, sodales non metus vel, euismod luctus nulla. Nullam feugiat tellus eget elit consequat, nec vulputate odio molestie. Aliquam faucibus enim id sem tincidunt fringilla. Fusce varius viverra blandit. Suspendisse tincidunt porttitor eros faucibus imperdiet. Fusce pellentesque leo quis nunc auctor aliquet. Nunc vitae molestie nulla, vel egestas felis. Nunc mi lacus, accumsan ut consequat id, egestas ut risus. Suspendisse posuere cursus risus, et tempus ex suscipit ut. Fusce blandit lacinia metus, pellentesque hendrerit nisl fermentum ut. Nunc consectetur massa orci, eget fermentum dolor lacinia blandit. Phasellus massa ante, ullamcorper a sollicitudin eget, aliquet sed neque. Cras vitae aliquet erat. Integer massa orci, maximus sit amet fermentum mattis, ultricies nec nunc. Aenean rutrum quis enim ac tincidunt. Quisque vulputate, mi ut convallis porttitor, ante nunc commodo risus, a dapibus ante diam sit amet dui. Duis nec sapien quis mi pulvinar vulputate facilisis vel magna. Vestibulum sit amet tempus ex. Nunc tristique mauris eu mauris tincidunt consectetur. Nam ut dui lacus.";
let countWords = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        countWords++;
    }
}
console.log(`The number of words in the string is ${countWords + 1}`)

let countEt = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText.slice(i, i + 4) === " et ") {
        countEt++;
    }
}
console.log(`The number of times the Latin word "et" appears is ${countEt}`);

// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseModified = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] !== " " && phraseToCheck[i] !== "," && phraseToCheck[i] !== "?" && phraseToCheck[i] !== "!" && phraseToCheck[i] !== "'") {
    phraseModified += phraseToCheck[i].toLowerCase();
  }
}

let phraseReverse = "";
for (let i = phraseModified.length - 1; i >= 0; i--) {
  phraseReverse += phraseModified[i];
}

if (phraseModified === phraseReverse) {
  console.log(`${phraseToCheck} ===> It's a palindrome`);
} else {
  console.log(`${phraseToCheck} ===> It's not a palindrome`);
}
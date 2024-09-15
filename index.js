// Iteration 1: Names and Input

let hacker1 = "Andrei";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Kübra";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

let hacker1Formatted = "";

for (i=0;i<hacker1.length;i++) {
  hacker1Formatted += hacker1[i].toUpperCase() + " ";
}

hacker1Formatted = hacker1Formatted.trim();

console.log(hacker1Formatted.trim());

let hacker2Formatted = "";

for (i=hacker2.length-1;i>=0;i--) {
  hacker2Formatted += hacker2[i];
}

console.log(hacker2Formatted);

if (hacker1Formatted < hacker2Formatted) {
  console.log("The driver's name goes first.")
} else if (hacker1Formatted > hacker2Formatted) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit sit amet ante pretium egestas. Nullam dictum, lectus convallis accumsan elementum, odio odio porttitor dolor, sit amet iaculis lectus dolor ac urna. Sed at euismod eros, at ornare purus. Sed a erat ac nunc imperdiet fermentum luctus non nibh. Nunc non laoreet metus. Suspendisse in accumsan diam, ut tristique lectus. Nullam tincidunt ipsum ultricies tincidunt lacinia. Vestibulum eget lacus rhoncus, finibus est fringilla, pretium risus. Phasellus blandit gravida purus, id molestie mi varius vitae. Curabitur ultrices venenatis nibh nec dictum. Nam facilisis justo quis mi consectetur, id finibus mauris lobortis. Maecenas vitae sagittis velit, varius tincidunt quam. Donec volutpat nec libero rutrum rutrum. Fusce ornare purus id dolor cursus viverra at sit amet elit. Aenean volutpat eros a accumsan iaculis. Nulla vel libero vel quam rhoncus ullamcorper.

Maecenas non viverra ligula. Nullam lorem tortor, consequat nec dictum vel, viverra vitae tellus. Suspendisse vel posuere arcu. Ut ultricies sem sodales, feugiat lacus sed, tristique sem. Curabitur feugiat mi quis mattis placerat. Cras sodales rhoncus nibh, ut luctus lectus dictum sed. Duis iaculis volutpat elit, id congue ligula efficitur et. Donec interdum auctor leo, ac pretium augue. Phasellus libero purus, iaculis quis ex in, commodo lobortis nulla.

Maecenas auctor, tellus nec faucibus ultrices, augue augue porttitor arcu, a vehicula arcu neque sed orci. In hac habitasse platea dictumst. Morbi in egestas mi, in tincidunt libero. Etiam vitae sapien dictum lectus rutrum egestas. Nullam euismod quis velit in placerat. Vivamus porttitor, lectus nec eleifend malesuada, quam mi sagittis magna, ac consectetur odio metus sed ligula. Praesent ac pulvinar odio, in facilisis ante. Praesent fermentum eros at sollicitudin fermentum. Nulla bibendum laoreet felis non faucibus. Vivamus a fermentum mauris.`;

let wordCount = 0;
let inWord = false;

for (let i = 0; i < longText.length; i++) {
  const char = longText[i];
  if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    if (!inWord) {
      wordCount++;
      inWord = true;
    }
  } else {
    inWord = false;
  }
}

console.log(wordCount);

let etCount = 0;

for (i=0;i<longText.length;i++) {
  if (longText[i] + longText[i+1] + longText[i+2] === " et") {
    etCount++;
  }
}

console.log(etCount);

// Bonus 2

let phraseToCheck = "No 'x' in Nixon";
let phraseToCheckFormatted = "";
let phraseToCheckReversed = "";

for (i=phraseToCheck.length-1;i>=0;i--) {
  if ((phraseToCheck[i] >= 'a' && phraseToCheck[i] <= 'z') || (phraseToCheck[i] >= 'A' && phraseToCheck[i] <= 'Z')) {
    phraseToCheckReversed += phraseToCheck[i];
  }
}

for (i=0;i< phraseToCheck.length;i++) {
  if ((phraseToCheck[i] >= 'a' && phraseToCheck[i] <= 'z') || (phraseToCheck[i] >= 'A' && phraseToCheck[i] <= 'Z')) {
    phraseToCheckFormatted += phraseToCheck[i];
  }
}

if (phraseToCheckFormatted.toLowerCase() === phraseToCheckReversed.toLowerCase()) {
  console.log(`Hooray! The phrase "${phraseToCheck}" is definitely a palindrome`);
} else {
  console.log(`Nope, the phrase "${phraseToCheck}" is not a palindrome`);
}
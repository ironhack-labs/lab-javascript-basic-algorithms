// Iteration 1: Names and Input

let hacker1 = "Luca";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Ola";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1. Print all the characters of the driver's name, separated by a space and in capitals

let hacker1Capital = "";
for (i = 0; i < hacker1.length; i++) {
  if (i === 3) {
    hacker1Capital += `${hacker1[i].toUpperCase()}`;
  } else {
    hacker1Capital += `${hacker1[i].toUpperCase()} `;
  }
}

console.log(hacker1Capital);

// 3.2. Print all the characters of the navigator's name, in reverse order

let hacker2Reverse = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}

console.log(hacker2Reverse);

// 3.3. Depending on the lexicographic order of the strings, print the right sentence

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?");
} else {
  console.log("Something went wrong, check your code!");
}

// Bonus 1
// Count the number of words in the string

loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus tempor sem sit amet malesuada. Fusce pulvinar orci vitae ante viverra, eu accumsan enim viverra. Sed laoreet tellus vel mattis sagittis. Pellentesque leo odio, hendrerit eu felis eu, euismod commodo urna. Fusce molestie, ex et suscipit mollis, purus sem fermentum ligula, et bibendum neque libero a dui. Sed pretium odio ac arcu egestas, et placerat dolor luctus. Aenean consequat lacus non ante suscipit ornare. Etiam cursus nulla eget tortor pellentesque efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus.Fusce tristique quam eu pellentesque vestibulum. In non finibus leo. Fusce eget pretium arcu. Integer hendrerit volutpat felis id varius. Curabitur varius mi dolor. Integer tempus facilisis mi, non feugiat diam blandit non. Mauris congue semper luctus. Praesent quis nibh in mauris gravida fringilla.Praesent auctor blandit ultrices. Sed sapien ante, ultricies eu aliquam et, porta sit amet tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas aliquam elit eu ligula facilisis finibus. Vestibulum non laoreet justo. Sed vitae fermentum ex. Aliquam erat volutpat.";

let wordsCounter = 0;
for (i = 0; i < loremText.length; i++) {
  if (loremText[i] === " " || i === loremText.length - 1) {
    wordsCounter += 1;
  }
}
console.log(wordsCounter);

// Count the number of times the Latin word et appears.

let etCounter = 0;
for (i = 0; i < loremText.length; i++) {
  if (loremText[i] === "e" && loremText[i + 1] === "t") etCounter++;
}

console.log(etCounter);

// Bonus 2

let phraseToCheck = "Amor, Roma!";

//Step 1: removing non-letter characters from the string

let phraseToCheckLettersOnly = "";

for (i = 0; i < phraseToCheck.length; i++) {
  switch (phraseToCheck[i]) {
    case " ":
      break;
    case ".":
      break;
    case ",":
      break;
    case "!":
      break;
    case "?":
      break;
    case ":":
      break;
    case ";":
      break;
    default:
      phraseToCheckLettersOnly += phraseToCheck[i].toLowerCase();
      break;
  }
}

// Step 2: Analysing the new string

if (phraseToCheckLettersOnly.length % 2 !== 0) {
  console.log(
    "Sorry, your string phraseToCheck is not a palindrome because it has uneven number of letters. Too bad!"
  );
} else {
  let halfLength = phraseToCheckLettersOnly.length / 2;

  let firstHalf = phraseToCheckLettersOnly.slice(0, halfLength);

  let firstHalfReversed = "";
  for (i = firstHalf.length - 1; i >= 0; i--) {
    firstHalfReversed += firstHalf[i];
  }

  let isPalindrome = phraseToCheckLettersOnly.endsWith(firstHalfReversed);

  if (isPalindrome === true) {
    console.log("Yeah! Your string phraseToCheck is a palindrome! Lucky you!");
  } else {
    console.log(
      "Sorry, your string phraseToCheck is not a palindrome. Try another phrase!"
    );
  }
}

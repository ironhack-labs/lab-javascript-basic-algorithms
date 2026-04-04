// Iteration 1: Names and Input

let hacker1 = "Michelle";
console.log("The driver's name is " + hacker1);

let hacker2 = "Alex";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let driverLength = hacker1.length;
let navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log("The driver has the longest name, it has " + driverLength + " characters.");
} else if (navigatorLength > driverLength) {
  console.log("It seems that the navigator has the longest name, it has " + navigatorLength + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + driverLength + " characters!");
}

// Iteration 3: Loops

let driverNameInCaps = hacker1.toUpperCase();
let driverWithSpaces = "";

for (let i = 0; i < driverNameInCaps.length; i++) {
  driverWithSpaces = driverWithSpaces + driverNameInCaps[i] + " ";
}

console.log(driverWithSpaces);


let reversedNavigatorName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigatorName = reversedNavigatorName + hacker2[i];
}

console.log(reversedNavigatorName);


if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1: Lorem ipsum generator

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non rhoncus felis. Sed aliquet libero sed libero malesuada, vel auctor nisl vulputate. Aliquam tincidunt ultricies tellus, sit amet rutrum turpis luctus id. Maecenas quis neque nisi. Pellentesque elementum risus non consectetur viverra. Pellentesque lobortis lacus enim, quis aliquet lacus maximus sit amet. Duis vehicula ullamcorper nisi, vitae blandit est egestas eu.

Quisque efficitur dolor magna, et hendrerit quam porta sed. Aenean dapibus lacinia velit. Donec suscipit ex eu elit malesuada consequat. Sed in leo lectus. Nulla sed nisl vel velit consequat iaculis eget suscipit velit. Nullam est nulla, fermentum et convallis sit amet, viverra in arcu. Donec consectetur iaculis ex quis viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Proin id dignissim odio. Praesent accumsan ornare felis. Ut aliquet euismod ante. Pellentesque blandit ex eu velit interdum, in tempor sem ultrices. Nam sollicitudin, mauris eu ultrices tincidunt, purus erat malesuada augue, vitae egestas nisi nunc a ligula. Curabitur eu rhoncus enim, in auctor sapien. Proin sed rhoncus ligula. Etiam sed erat turpis. Sed ut feugiat nulla, at finibus felis. Suspendisse hendrerit eros ligula, et fringilla dolor pulvinar ut. Aliquam tincidunt sem iaculis, eleifend justo vel, sodales nisl. Praesent non erat eu elit eleifend accumsan a et ligula. Donec tempus metus at lectus convallis dignissim.`;
let words = longText.split(" ");
console.log("Number of words: " + words.length);

let countEt = 0;

for (let i = 0; i < words.length; i++) {
  let currentWord = words[i].toLowerCase();

  if (currentWord === "et") {
    countEt++;
  }
}

console.log("Number of times 'et' appears: " + countEt);

// Bonus 2: Palindrome checker

let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  let currentCharacter = phraseToCheck[i].toLowerCase();

  if (currentCharacter >= "a" && currentCharacter <= "z") {
    cleanPhrase = cleanPhrase + currentCharacter;
  }
}

let reversedPhrase = "";

for (let i = cleanPhrase.length - 1; i >= 0; i--) {
  reversedPhrase = reversedPhrase + cleanPhrase[i];
}

if (cleanPhrase === reversedPhrase) {
  console.log("It's a palindrome!");
} else {
  console.log("It's not a palindrome.");
}
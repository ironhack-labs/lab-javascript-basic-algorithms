//Iteration 1
var hacker1 = "Charlotte";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Ann";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2

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

//Iteration 3.1

var newDriver = " ";

for (let i = 0; i < hacker1.length; i++) {
  let letter = hacker1[i];
  newDriver = newDriver + letter + " ";
}
console.log(newDriver.toUpperCase());

//Iteration 3.2

var newNavigator = " ";

for (let i = hacker2.length - 1; i >= 0; i--) {
  let letter2 = hacker2[i];
  newNavigator = newNavigator + letter2 + " ";
}
console.log(newNavigator);

//Iteration 3.3

var a = hacker2.localeCompare(hacker1);

if (a >= 1) {
  console.log("The driver's name goes first.");
} else if (a <= -1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1

var paragraphs =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum ipsum nec porttitor facilisis. Etiam suscipit magna nec mi gravida bibendum. Ut sit amet consectetur ex. Cras augue justo, euismod ac velit ac, tempor condimentum ligula. In varius ultricies ipsum a condimentum. Quisque tincidunt feugiat massa, vel aliquet felis fermentum eu. Aenean vel enim consequat, ornare dui non, sagittis sem. Etiam vitae arcu eu diam convallis dignissim. Maecenas tempus ipsum pulvinar justo pulvinar dapibus. Vivamus eu consectetur leo. Phasellus lacus diam, facilisis non tellus id, porta fringilla ante. Curabitur condimentum risus dui, id ornare erat pharetra sed. Donec vitae erat felis. Ut efficitur purus et nulla suscipit vestibulum. Quisque viverra tincidunt quam eu pellentesque. Proin ut pulvinar turpis. Cras malesuada purus finibus tellus tincidunt, eget finibus risus gravida. Aliquam ullamcorper eleifend dui vel sagittis. Nam consectetur tempus sollicitudin. Nulla maximus et lorem sed semper. Cras id dui vitae diam vehicula laoreet sed eget arcu. Cras aliquam aliquet quam a euismod. In sollicitudin tortor ac nulla tristique, et elementum velit tincidunt. Phasellus metus massa, rutrum ut nisl vitae, consequat tincidunt dolor. Mauris non odio eleifend, rutrum nibh quis, laoreet enim. Phasellus vitae augue vitae tortor consectetur gravida a sit amet nunc. Donec eget lacinia ipsum. Fusce sapien sem, condimentum vel ornare sit amet, ultrices eu nulla. Sed facilisis ac orci eget pulvinar. Sed fermentum sed mi et mattis.";

numberOfSpaces = paragraphs.split(" ").length - 1;

console.log(`The number of words is ${numberOfSpaces + 1}.`);

numberOfElements = paragraphs.split(" et ").length - 1;

console.log(`The number of 'et' is ${numberOfElements}.`);

//Bonus 2

var phraseToCheck = "";

var check1 = "";
var check2 = "";

phraseToCheck = "Amor, Roma";

for (let i = 0; i < phraseToCheck.length; i++) {
  let letter3 = phraseToCheck[i];
  check1 = check1 + letter3.replace(/ /g, "").toLowerCase();
}

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  let letter4 = phraseToCheck[i];
  check2 = check2 + letter4.replace(/ /g, "").toLowerCase();
}

if (check1 === check2) {
  console.log("It's a palindrome !!!");
} else {
  console.log("Nope, no palindrome here");
}

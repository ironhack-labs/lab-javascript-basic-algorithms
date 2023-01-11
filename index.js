console.log("I'm ready!");

// Iteration 1: Names and Input
let driver;
driver = "gulsah";
console.log("The driver's name is", driver);

let navigator;
navigator = "tobi";
console.log("The navigator's name is", navigator);

// Iteration 2: Conditionals

if (driver.length > navigator.length) {
  console.log(
    `The driver has the longest name, it has ${driver.length} characters.`
  );
} else if (navigator.length > navigator.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigator.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${navigator.length} characters`
  );
}

// Iteration 3: Loop
// 3.1: Loop
let driverCapitalized = driver.toUpperCase();
console.log(driverCapitalized);

// 3.2: Loop
let driverCapiSpace = "";
for (let m = 0; m < driverCapitalized.length; m++) {
  driverCapiSpace += driverCapitalized[m] + " ";
}
console.log(driverCapiSpace);

// 3.2: Loop
let reversedNavigator = "";
for (let k = navigator.length - 1; k >= 0; k--) {
  reversedNavigator += navigator[k];
}
console.log(reversedNavigator);

if (navigator > driver) {
  console.log("The driver's name goes first.");
} else if (driver > navigator) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus
let longText;

longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas accumsan tortor, sed eleifend mauris tristique ac. Phasellus sed lobortis massa, eu laoreet magna. Nullam ut mi sit amet eros ornare dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed feugiat arcu augue, quis molestie turpis laoreet eu. Vivamus pharetra, turpis vel efficitur porta, mauris ligula malesuada dui, blandit dictum ante lectus eget magna. In sagittis, lectus a ornare convallis, nisl odio consectetur urna, ac mollis turpis mauris et mauris.

Ut malesuada justo ac magna sollicitudin, sed laoreet diam fringilla. Quisque pellentesque at dolor a condimentum. Praesent egestas maximus ligula ac lobortis. Nunc vel justo tempus ex tempor auctor. Donec quis eleifend ex. Nunc sem risus, vulputate sed diam vitae, cursus tincidunt nisi. In ultrices, lectus id viverra imperdiet, quam dui aliquet eros, dapibus facilisis eros mi et tellus. Nunc ut venenatis diam, vel gravida tortor. Vestibulum ac molestie elit. Nulla sed quam sed sapien bibendum dictum. Aliquam a dignissim justo, sit amet convallis turpis.

Aliquam vulputate lacus ut auctor egestas. In rutrum fringilla dui. Praesent ornare eget justo vel bibendum. Aliquam pulvinar lacus aliquam, bibendum orci non, varius dui. Pellentesque vel ex nibh. Suspendisse pulvinar nunc vel mauris porttitor, in mollis nulla euismod. Praesent euismod velit vel metus hendrerit pellentesque. Aenean pretium a neque in fermentum. Morbi cursus vel libero vitae volutpat. Curabitur posuere metus eget purus efficitur rhoncus. Suspendisse laoreet venenatis leo sit amet volutpat. Aenean quis ullamcorper mauris. Nam feugiat velit eu eros venenatis, non rhoncus enim sodales. Praesent fermentum felis eget neque interdum rhoncus. Nullam porta varius turpis vitae dapibus et n.`;

let counter = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    counter += 1;
  }
}
console.log(counter + 3);

let countEt = 0;
for (let n = 0; n < longText.length; n++) {
  if (
    longText[n] === " " &&
    longText[n + 1] === "e" &&
    longText[n + 2] === "t" &&
    longText[n + 3] === " "
  ) {
    countEt += 1;
  }
}
console.log(countEt);

let phraseToCheck;
phraseToCheck = "amorroma";

let reversePhraseToCheck = "";
for (let p = phraseToCheck.length - 1; p >= 0; p--) {
  reversePhraseToCheck += phraseToCheck[p];
}

if (phraseToCheck === reversePhraseToCheck) {
  console.log("It is a Palindrome");
} else {
  console.log("It is not a Palindrome!");
}

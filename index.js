// Iteration 1: Names and Input

const hacker1 = "Claire";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Nobody";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let loop = "";
for (let i = 0; i < hacker1.length; i++) {
  loop += `${hacker1[i].toUpperCase()} `;
}
console.log(loop);

loop = "";
for (let i = 0; i < hacker2.length; i++) {
  loop += `${hacker2[hacker2.length - i - 1]}`;
}

console.log(loop);

if (hacker1 != hacker2) {
  for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log("The driver's name goes first");
      break;
    } else if (hacker1[i] > hacker2[i]) {
      console.log("Yo, the navigator goes first, definitely.");
      break;
    }
  }
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet massa eu risus porta posuere quis ut nibh. Nunc ac blandit massa, in fermentum urna. Aenean tempus lorem quis erat tristique, vitae ultrices nulla iaculis. Curabitur sit amet sagittis elit. Pellentesque ornare eu mauris nec fringilla. Sed eleifend et augue ultricies efficitur. Fusce sagittis leo et odio bibendum fermentum. Duis maximus nisl eget tellus aliquam, id mattis turpis volutpat. Cras condimentum erat at fermentum eleifend. Maecenas egestas dui dapibus, interdum orci id, tristique ex. Pellentesque porttitor euismod tellus, quis gravida magna fringilla et. Proin vitae suscipit felis. Aliquam tellus orci, pellentesque eget ante sit amet, condimentum dignissim diam. Ut lobortis mauris orci, tempus vulputate neque aliquet vel. Sed eget elit dignissim, mollis neque id, sagittis velit. Maecenas finibus ut ipsum in maximus. Phasellus interdum, massa vitae accumsan viverra, elit lorem iaculis justo, non facilisis augue mi vitae velit. Aliquam ullamcorper, nunc sit amet vehicula auctor, erat orci mollis risus, sit amet dignissim tortor risus vitae urna. Sed vulputate massa purus, quis pellentesque urna imperdiet ut. In et blandit orci. Mauris eget lacus dolor. Proin fermentum lobortis ante vel ultricies. Vivamus eleifend dictum odio sed dapibus. Morbi est nisl, ullamcorper sed semper non, placerat sit amet urna. Pellentesque sed elit rhoncus, ultrices tellus dictum, porta ex. Aenean eu mollis mi, eget fermentum justo. Pellentesque maximus commodo purus, in pulvinar purus aliquam dapibus. Maecenas nec neque ante. Aliquam mollis erat id diam tincidunt ultrices. Nullam est leo, congue sed sem sed, lacinia faucibus velit. Nullam et augue orci. Duis lacinia tortor tortor, ut tincidunt enim sagittis sed. Maecenas vel dignissim nunc. Quisque at arcu lectus. Integer consequat dignissim nisl id elementum. In id magna diam.";

// Count the number of words in the string
let counter = 1;
let countEt = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    counter++;
  }
  if (longText[i] + longText[i + 1] === "et") {
    countEt++;
  }
}

console.log(`There are ${counter} words in the string.`);
console.log(`There are ${countEt} "et" in the string.`);

// Bonus 2

const phraseToCheck = "HANNAH";
let removeSpaces = "";
// Make all letters uppercase
let upper = phraseToCheck.toUpperCase();
// Remove spaces from phrase
for (let i = 0; i < upper.length; i++) {
  if (upper.charCodeAt(i) > 90 || upper.charCodeAt(i) < 65) {
    continue;
  }
  removeSpaces += upper[i];
}

// Check if it's a palindrome
let palCheck = 0;
for (let i = 0; i < removeSpaces.length; i++) {
  if (removeSpaces[i] != removeSpaces[removeSpaces.length - i - 1]) {
    console.log(`"${phraseToCheck}" is not a palindrome`);
    palCheck++;
    break;
  }
}
if (palCheck === 0) {
  console.log(`"${phraseToCheck}" is a palindrome`);
}

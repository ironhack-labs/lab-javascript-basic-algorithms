// Iteration 1: Names and Input

const hacker1 = "Fabio";
const hacker2 = "Goki";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

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

let capitalSpaced = "";

for (let i = 0; i < hacker1.length; i++) {
  capitalSpaced += hacker1[i].toUpperCase() + " ";
}
console.log(capitalSpaced);

let reversed = "";

for (let x = hacker2.length - 1; x >= 0; x--) {
  reversed += hacker2[x];
}
console.log(reversed);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed. Et malesuada fames ac turpis. Nibh tellus molestie nunc non blandit. Elit at imperdiet dui accumsan sit. Nulla aliquet enim tortor at auctor urna. Ipsum dolor sit amet consectetur adipiscing elit duis. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Donec ultrices tincidunt arcu non sodales neque sodales ut. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Dui nunc mattis enim ut tellus elementum sagittis. Eget duis at tellus at urna condimentum mattis pellentesque.

Orci a scelerisque purus semper eget. Amet mauris commodo quis imperdiet. Nulla facilisi cras fermentum odio eu. Nullam non nisi est sit. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Ac turpis egestas maecenas pharetra convallis. Posuere urna nec tincidunt praesent semper. Vel elit scelerisque mauris pellentesque pulvinar. Ornare aenean euismod elementum nisi. In arcu cursus euismod quis.

Id aliquet lectus proin nibh. Nisl pretium fusce id velit ut. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. A lacus vestibulum sed arcu non odio euismod. Id diam vel quam elementum pulvinar etiam non. Nec ullamcorper sit amet risus. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Et tortor consequat id porta nibh venenatis cras sed.`;

let counter = "";

for (let i = 0; i <= longText.length; i++) {
  if (longText[i] === " ") {
    counter++;
  }
}

console.log(counter + 1);

let count = 0;

for (let i = 0; i <= longText.length; i++) {
  const twoChars = longText[i] + longText[i + 1];

  if (twoChars === "et") {
    count++;
  }
}

console.log(`The text conatains the word 'et' ${count} times.`);

console.log("I'm Ready");

// Iteration 1: Names and Input
let hacker1 = "Devin";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Devinski";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
}

if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops

//pt 1.

let capsAndSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
  capsAndSpaces += hacker1[i].toUpperCase() + " ";
}

console.log(capsAndSpaces.trim());

//pt 2.

console.log(hacker2.split("").reverse().join(""));

//pt 3.

let shortest =
  hacker1.length > hacker2.length ? hacker2.length : hacker1.length;

for (let i = 0; i < shortest; i++) {
  let hacker1letter = hacker1[i].toLowerCase().charCodeAt() - 96;
  let hacker2letter = hacker2[i].toLowerCase().charCodeAt() - 96;

  if (i == shortest - 1 && hacker1letter == hacker2letter) {
    console.log("What?! You both have the same name?");
    return;
  }

  if (hacker1letter < hacker2letter) {
    console.log("The driver's name goes first.");
    return;
  }

  if (hacker2letter < hacker1letter) {
    console.log("Yo, the navigator goes first, definitely.");
    return;
  }

  if (i == shortest.length - 1 && hacker1letter == hacker2letter) {
    console.log("What?! You both have the same name?");
    return;
  }
}

// BONUS

/*
Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta, purus non fringilla consequat, mi ex fermentum nisl, ut pulvinar metus magna et risus. Morbi eleifend leo id magna dignissim, ut commodo odio pulvinar. Morbi eget ante et ipsum lobortis scelerisque eget eget dui. Aenean quis pellentesque tellus, quis finibus ante. Maecenas consequat, lacus eu molestie accumsan, mauris velit efficitur sapien, non ullamcorper eros est nec dui. Donec venenatis eros efficitur ullamcorper condimentum. Curabitur condimentum sed dui et condimentum. Nunc nulla est, faucibus eget laoreet et, tincidunt eget lorem. Curabitur facilisis id nulla sit amet laoreet.

Sed a pharetra elit. Pellentesque non ipsum nunc. Suspendisse sit amet diam arcu. Praesent maximus, quam a imperdiet rhoncus, justo velit convallis velit, ac porttitor ante lacus quis augue. Etiam eget ante sit amet mi varius porta dignissim eget tellus. Mauris egestas odio sit amet imperdiet viverra. Curabitur consequat neque at mi porta tempus ut egestas risus. Sed aliquet, elit id accumsan sagittis, eros ipsum commodo nunc, vitae mattis leo ligula id nibh. Cras ullamcorper aliquet rutrum. Praesent ullamcorper commodo est at euismod. Sed maximus sapien sed sapien gravida maximus.

Nullam id tempor nibh. Vivamus suscipit lacinia sem, sed pellentesque turpis vulputate vel. Donec suscipit eget odio sed laoreet. Ut ut lorem lorem. Nullam lorem enim, aliquet a est in, commodo consectetur erat. Nullam commodo nibh sit amet ante laoreet molestie. Integer vitae massa auctor sapien lacinia vehicula et congue justo. Aenean sed ligula in ipsum vestibulum maximus sed ultricies nisi. Vestibulum gravida malesuada nibh, ut suscipit tortor dictum non. Morbi bibendum aliquam mattis. Vestibulum et convallis velit, ut rhoncus tortor. Duis placerat non felis non sodales. Maecenas convallis elementum justo ac dapibus.`;

function lengthAndWords(sentence, specificWord) {
  sentence = sentence.replace(/[^A-Za-z0-9]/g, " ").split(" ");

  console.log(sentence);

  let totalWords = sentence.filter((word) => {
    return word.length > 0;
  }).length;

  let instancesOfWord = sentence.filter((word) => {
    return word.toLowerCase() == specificWord.toLowerCase();
  }).length;

  return [totalWords, instancesOfWord];
}

console.log(lengthAndWords(longText, "et"));

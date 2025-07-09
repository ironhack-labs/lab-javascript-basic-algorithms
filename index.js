// Iteration 1: Names and Input
const hacker1 = "Sakthi";
const hacker2 = "Ahmed";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;
if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker2Length > hacker1Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1Length} characters!`
  );
}

// Iteration 3: Loops
const driver = hacker1.toUpperCase();
let newDriverName = "";
let newNavigatorName = "";

for (let i = 0; i < driver.length; i++) {
  if (i === driver.length - 1) {
    newDriverName = newDriverName + driver[i];
  } else {
    newDriverName = newDriverName + driver[i] + " ";
  }
}

console.log(newDriverName);

for (let j = hacker2.length - 1; j >= 0; j--) {
  newNavigatorName += hacker2[j];
}
console.log(newNavigatorName);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

/* #### Bonus 1: */

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit molestie justo quis rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed consequat, tortor in iaculis porta, tortor felis iaculis nibh, non vulputate purus orci eu erat. Phasellus pharetra ante at aliquet faucibus. Maecenas eu venenatis justo, facilisis pretium nunc. Sed ante justo, molestie quis semper nec, viverra non nisi. Curabitur elementum, quam id efficitur euismod, tortor mauris porttitor enim, nec rutrum turpis diam eleifend odio. Nullam pretium imperdiet turpis in tristique. Nam dapibus dolor eros, sed imperdiet lectus luctus eget. Fusce elementum, arcu in dapibus ultrices, sem orci suscipit urna, eget imperdiet massa erat at nisi. Aliquam erat volutpat. Phasellus a ipsum in magna placerat commodo. In nec massa malesuada, aliquet lorem eget, porta dolor. In tristique, ligula non ornare dignissim, nulla nunc laoreet quam, quis interdum diam enim eu ipsum. Etiam ornare eros ornare ligula facilisis gravida.

Etiam leo velit, semper a    lectus in, ultrices luctus ex. Nam in venenatis metus. Maecenas sit amet ipsum euismod, feugiat mauris sed, condimentum nulla. Proin volutpat, lorem ut viverra tempus, odio nisi pharetra diam, mollis placerat turpis lectus et turpis. Aliquam elit ipsum, dapibus et pharetra et, lacinia sed lacus. Mauris augue velit, rutrum a nulla non, accumsan condimentum turpis. Aliquam rhoncus leo erat, dignissim tristique neque aliquet nec. Nam aliquet justo sem, quis tincidunt ante molestie at. Fusce eleifend velit varius, convallis magna non, mollis leo.

Praesent non euismod risus, eget volutpat orci. Maecenas eu dignissim diam. Aenean suscipit, urna in sollicitudin consectetur, mi sem porta urna, sit amet maximus orci tortor ut ligula. Aliquam erat volutpat. Maecenas non vulputate lorem. In scelerisque tellus lectus. Fusce eros ante, volutpat id fringilla vel, sollicitudin eu lorem. In ultricies ante venenatis tortor accumsan, eget varius felis luctus. Fusce in ullamcorper ante, ac dictum felis. Sed posuere eleifend orci at facilisis. Nullam malesuada ac nisl id sollicitudin.`;

let count = 1;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] !== " " && longText[i - 1] === " ") {
    count++;
  }
}
console.log(count);

/*#### Bonus 2: */

function palindromeCheck() {
  let newPhrase = "";
  for (let i = 0; i < phraseToCheck.length; i++) {
    if (
      phraseToCheck[i] === " " ||
      phraseToCheck[i] === "," ||
      phraseToCheck[i] === "!"
    ) {
      continue;
    } else {
      newPhrase += phraseToCheck[i].toLowerCase();
    }
  }
  for (let j = 0, k = newPhrase.length - 1; j <= k; j++, k--) {
    if (newPhrase[j] !== newPhrase[k]) {
      return false;
    }
  }
  return true;
}

const phraseToCheck = "Amor, Roma";
let result = palindromeCheck(phraseToCheck);

console.log(result);

// Iteration 1: Names and Input
const hacker1 = "Mirko";
const hacker2 = "Fabio";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has XX characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has XX characters.`
  );
} else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, XX characters!`);
}

// Iteration 3: Loops
let nameDriveLicense = "";

for (let i = 0; i < hacker1.length; i++) {
  let char = hacker1[i].toUpperCase();
  nameDriveLicense += char + " ";
}

console.log(nameDriveLicense);

let nameNavigatorName = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
  nameNavigatorName += hacker2[j];
}

console.log(nameNavigatorName);

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1

let longtext = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nisi commodo augue sodales ullamcorper. Nam hendrerit viverra massa vel viverra. Integer turpis leo, sollicitudin non lectus in, lacinia porta elit. Duis consectetur, odio nec volutpat fringilla, lectus quam hendrerit nibh, in bibendum ipsum dolor vitae leo. Nulla facilisi. Quisque a leo mattis, ullamcorper arcu eu, convallis metus. Sed viverra tellus a est mattis commodo.

Donec diam mauris, commodo vitae vulputate nec, ultricies vitae metus. Maecenas in elit nibh. Aliquam et vestibulum metus. Maecenas sit amet pretium nisl. Integer faucibus rhoncus quam, viverra molestie libero blandit vel. In ac justo nisi. Proin non molestie urna, id sollicitudin purus. Vivamus efficitur sollicitudin luctus. Cras ultrices tortor et posuere vulputate. Pellentesque facilisis sit amet sem faucibus lobortis. Integer consectetur ultrices ipsum vitae interdum.

Proin at ante vitae libero elementum efficitur vehicula ac dolor. Nunc finibus nulla non odio elementum, eget elementum neque ullamcorper. Mauris nec eleifend leo. Phasellus maximus maximus vulputate. Phasellus viverra sed est at interdum. Nam vel varius est. Vivamus vitae semper nibh. Aenean commodo in est eu cursus. Etiam sed odio metus. Donec eget est pellentesque, feugiat magna ut, ultrices sapien. Pellentesque nibh mauris, tempus vel ultricies sed, congue non augue. Quisque tincidunt sapien sit amet justo aliquet, eget sollicitudin ipsum efficitur.

Nunc iaculis tincidunt sem eget feugiat. Phasellus eget ante sit amet nisl tincidunt posuere nec a magna. Phasellus sit amet feugiat libero. Vestibulum egestas ipsum ut metus pulvinar euismod. Vivamus facilisis, lorem ac aliquet consequat, lacus nulla facilisis eros, nec tincidunt neque velit vulputate turpis. Pellentesque eget porttitor ligula. Vestibulum iaculis bibendum elit, quis facilisis nisi sodales id. Ut dapibus elementum nunc, vel accumsan arcu sollicitudin tempor. Nulla gravida ligula convallis, dignissim purus in, vestibulum turpis. Nam nec tincidunt lacus.

Aliquam pulvinar bibendum ante, eget dignissim mi vulputate a. Sed pellentesque vehicula laoreet. Phasellus metus urna, eleifend eu luctus et, dapibus vel nisi. Suspendisse tincidunt ante ac nibh blandit consequat. Cras mattis lobortis dignissim. Pellentesque euismod, odio nec interdum laoreet, magna nisl iaculis elit, in porttitor quam odio sit amet arcu. Nunc quis ex eget elit consequat porttitor nec a lectus. In faucibus est purus, id scelerisque lacus interdum semper. Curabitur sed ex condimentum, venenatis ligula sit amet, feugiat enim. Morbi porttitor elit a libero congue, id ultrices lorem iaculis. Cras mollis velit urna, et congue nisi sodales id. Nunc lacus purus, ornare sit amet erat et, euismod laoreet est. Praesent fermentum pellentesque cursus.`;

let words = longtext.match(/\S+/g);
console.log(words ? words.length : 0);

const pattern = /\bet\b/g; // Regular expression to find "et" as a whole word
const matches = longtext.match(pattern);
console.log(matches ? matches.length : 0);

//Bonus 2

// let phraseToCheck = "stack cats";

// for(let i =0; i < phraseToCheck.length; i++){

//     if(phraseToCheck[i] !== ' ' || phraseToCheck[i] !== ','){

//     }

// }

function isPalindrome(text) {
  let cleanText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let start = 0;
  let end = cleanText.length - 1;

  for (let i = 0; i < cleanText.length / 2; i++) {
    if (cleanText[start] !== cleanText[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

// Test cases
const testPhrases = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon",
];

testPhrases.forEach((phrase) => {
  console.log(`"${phrase}" is palindrome:`, isPalindrome(phrase));
});

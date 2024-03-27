// Iteration 1: Names and Input
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let hacker1modified = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1modified += hacker1[i].toUpperCase() + " ";
}
hacker1modified = hacker1modified.slice(0, -1);
console.log(hacker1modified);


let hacker2modified = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2modified += hacker2[i];
}
console.log(hacker2modified);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis, orci ut consequat feugiat, risus odio maximus magna, et efficitur nibh eros vitae augue. Aenean ornare fermentum elit, non ultricies massa auctor vitae. Sed tincidunt justo felis, sit amet auctor dolor vestibulum sit amet. Suspendisse malesuada magna urna, eu rutrum justo malesuada id. Praesent et felis nulla. Nunc tempus, tellus facilisis malesuada finibus, mauris lectus sagittis quam, sed dapibus lacus est sed mauris. Integer a metus leo. Morbi aliquam ipsum sit amet dui pretium euismod.

Donec quis faucibus est. Sed dictum lacinia massa, dictum efficitur mauris lacinia ac. Vivamus vehicula nunc diam, vitae malesuada orci mattis eu. Nullam id tristique felis. Nullam sollicitudin viverra orci, ut ultricies nisl laoreet ac. Duis luctus consequat mi. Duis aliquam egestas nibh, ut laoreet ex sagittis in. Aenean posuere lorem nunc, eu molestie odio iaculis eu. Vestibulum gravida et leo nec consequat. Phasellus ac leo eros.

Pellentesque a elit ac elit efficitur euismod in vitae nisl. Pellentesque id mollis sapien. Maecenas volutpat dapibus nunc, quis feugiat magna pretium eu. Sed felis ligula, aliquam a augue vitae, sollicitudin molestie ante. Donec ex eros, tempor interdum pulvinar et, molestie eu tortor. Sed elementum diam et dapibus scelerisque. Maecenas sit amet ultrices nisl. Aliquam vestibulum sagittis odio in efficitur. Mauris vulputate sollicitudin risus eu rhoncus. Maecenas in diam egestas, volutpat tellus id, cursus purus`;
const tragetWordCount = 227;

let wordCount = 0;
let isWord = false;
for (let i = 0; i < longText.length; i++) {
  if ((longText[i] === " " || longText[i] === "\n" || longText[i] === "\t") && isWord) {
    wordCount++;
    isWord = false;
  } else {
    isWord = true;
  }
}
wordCount++;
console.log(wordCount, wordCount === tragetWordCount);

const searchWord = "et";
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText.slice(i, i + searchWord.length) === searchWord) {
    etCount++;
  }
}
console.log(etCount);


// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!"

function isPalindrom(word) {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] != word[word.length - 1 - i]){
            return false;
        }
    }
    return true;
}

function cleanUp(phrase) {
    let result = "";
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] >= 'A' && phrase[i] <= 'z') {
            result += phrase[i].toLowerCase();
        }
    }
    return result;
}

console.log(isPalindrom(cleanUp(phraseToCheck)));

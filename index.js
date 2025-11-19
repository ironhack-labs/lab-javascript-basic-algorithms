// Iteration 1: Names and Input
const hacker1 = "Pablo";
const hacker2 = "Luis";
console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
function isLonger(hacker1, hacker2) {
  const driver = hacker1.length;
  const navigator = hacker2.length;

  if (driver === navigator) {
    return `Wow, you both have equally long names, ${driver} characters!.`;
  } else if (driver > navigator) {
    return `The driver has the longest name, it has ${driver} characters.`;
  } else if (driver < navigator) {
    return `It seems that the navigator has the longest name, it has ${navigator} characters.`;
  }
}
console.log(isLonger(hacker1, hacker2));

// Iteration 3: Loops
let resultDriver = "";
const hacker1Spaced = hacker1.toUpperCase().split("");
//console.log(hacker1Spaced)
for (let i = hacker1Spaced.length - 1; i >= 0; i--) {
  resultDriver += `${hacker1Spaced[i]} `;
}
console.log(resultDriver);

//------3.2-------
let hacker2Mirror = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Mirror += hacker2[i];
}

console.log(hacker2Mirror);

//------3.3-------

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

/************BONUS 01*******************/

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel cursus mi, sit amet cursus purus. Ut ut dapibus magna. Aenean augue nibh, dignissim vel mi sed, sodales aliquam quam. Aenean ligula nunc, feugiat vel ipsum ac, gravida tincidunt massa. Aenean tempor dapibus metus. Quisque porttitor porta dolor nec consequat. Sed consectetur ut libero sit amet semper. Nunc placerat vestibulum posuere. Nullam ac aliquam augue, at rutrum est. Nunc at quam ut mauris vestibulum fermentum. Quisque hendrerit, augue ut dapibus molestie, urna sem faucibus erat, vitae placerat justo risus vitae ante. Phasellus posuere sapien nec sapien vulputate, in luctus nisl porta. Maecenas sed arcu aliquam, rutrum nibh in, eleifend mauris. Mauris ultrices sem lacus, ac dictum nibh luctus ac. Vestibulum nec erat egestas, maximus diam id, fermentum magna. Vestibulum pellentesque mauris vel libero malesuada pulvinar. Duis sed nunc orci. Nulla eu arcu consequat, elementum massa nec,  bibendum nunc. Etiam in purus nunc. Nam ornare lacus ut est pellentesque, ac elementum purus maximus. Curabitur aliquam lectus ipsum, ut varius eros vulputate nec. Donec sed luctus tellus, nec suscipit felis. Sed nec nisi a eros aliquam ultrices. Cras maximus nec ex vitae volutpat. Integer ultricies condimentum malesuada. Donec ac commodo purus. Curabitur luctus tincidunt eleifend. Curabitur sodales justo vel hendrerit mollis. Sed nec molestie nibh, eu semper erat. Donec condimentum vitae risus id pharetra. Sed vitae dui dolor. Donec placerat purus id orci auctor, non malesuada ligula porta. Phasellus at enim eget metus vestibulum pretium id ut mi. Maecenas eget aliquam ex. Morbi laoreet laoreet fringilla. Fusce varius, erat sed tincidunt sollicitudin, eros ante feugiat sem, a rhoncus nisl nulla a purus. Cras purus sem, tempus a consequat quis, eleifend quis mauris. Quisque at interdum lacus et et et.";
///////////////////////////////////////////////////////////////////// I added three "et"s to the end of the paragraph to ensure proper verification.

const longTextChars = longText.length;

console.log(longTextChars)

let count = 0;

for(let i = 0; i <longText.length; i++){
    const twoChars = longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3];
    if (twoChars.toLowerCase() === " et " ||  twoChars.toLowerCase() === " et.") {
        count++
    }
}

console.log(count)

// /************BONUS 02*******************/2


let resultPhrase = '';
const phraseToCheck = "A man, a plan, a canal, Panama!";

let phraseToCheckJoin = phraseToCheck.toUpperCase().replace(/[^\w\s]/g, '').split(' ').join('');
console.log(phraseToCheckJoin)
for (let i = phraseToCheckJoin.length - 1; i >= 0; i--) {
  resultPhrase += phraseToCheckJoin[i];
}
//console.log(resultPhrase)
if (resultPhrase === phraseToCheckJoin){
   console.log(true)
} else {
    console.log(false)
}

// code """.replace(/[^\w\s]/g, '')"""  It was a result from Google; I need a better understanding.
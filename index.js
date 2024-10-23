// Iteration 1: Names and Input
const hacker1 = "Mélissa";
const hacker2 = "Karim";

console.log(
  `The driver name is ${hacker1}
The navigator name is ${hacker2}\n`
);

// Iteration 2: Conditionals

const getLongestName = (...names) =>
  names.sort((a, b) => b.length - a.length).at(0);

if (hacker1.length === hacker2.length)
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters !`
  );
else
  switch (getLongestName(hacker1, hacker2)) {
    case hacker1:
      console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
      );
      break;
    case hacker2:
      console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
      );
      break;
  }

// Iteration 3: Loops
const hacker1FormattedName = hacker1.toUpperCase().split("").join(" ");
const hacker2FormattedName = hacker2.split("").reverse().join("");
console.log(hacker1FormattedName, hacker2FormattedName);

const sortNames = (...names) => names.sort();
const sortedHackersNames = sortNames(hacker1, hacker2);
if (hacker1 === hacker2) console.log("What?! You both have the same name?");
else
  switch (sortedHackersNames[0]) {
    case hacker1:
      console.log("The driver's name goes first.");
      break;
    case hacker2:
      console.log("Yo, the navigator goes first, definitely.");
      break;
  }

//   Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis ante justo, eu elementum nunc faucibus et. Donec justo tortor, consectetur ac felis eget, facilisis pellentesque mauris. Morbi vitae justo velit. Aliquam id purus a metus pharetra consectetur ornare ac mi. Mauris in faucibus leo, in euismod ligula. In in tincidunt nisi, ut pharetra elit. Nunc ipsum nunc, placerat sed pharetra non, ullamcorper at ante.
In hac habitasse platea dictumst. Nam sed porta nunc. Duis eu nulla sed neque tristique sollicitudin a eu orci. Sed at neque ac sapien interdum consectetur in vel elit. Nam eu odio odio. Vivamus augue justo, gravida quis nunc sed, tempus lobortis libero. Nunc vitae nunc vitae tortor blandit mattis. Aliquam et lorem vulputate, vehicula urna eget, tempor lacus. Vestibulum a finibus eros, quis ultricies massa. Vestibulum a porttitor enim. Praesent vestibulum imperdiet nulla non placerat. Ut tincidunt ac purus id malesuada.
Nulla non sodales felis. Donec aliquam suscipit erat id sodales. Nulla convallis tincidunt lectus vel consequat. Vestibulum vitae sapien id justo placerat interdum. Vivamus volutpat augue a lectus ultricies condimentum. Suspendisse potenti. Nulla blandit nisi enim, eu feugiat dui bibendum a. Vivamus non maximus massa. Cras laoreet ligula arcu, pretium molestie nibh varius a. Aenean tristique turpis ac magna mattis, dignissim viverra lacus pharetra. Vestibulum fermentum imperdiet arcu, sit amet convallis risus fringilla quis. Maecenas varius magna sed diam tincidunt eleifend. Fusce pharetra diam tellus, quis placerat urna posuere eget.`;


const textWords = longText.split(/\s+/).length;
console.log(textWords);

// const numberOfEt = longText.split(/\s+/).reduce((acc, elem) => {
//     if(elem === 'et') acc ++;
//     return acc;
//     }, 0);

const findNumberOfOccurence = (occurenceToCheck) =>longText.replace(/[.,]/g, "").split(/\s+/).filter(elem => elem === occurenceToCheck).length;

const numberOfEt = findNumberOfOccurence('et') 
console.log(numberOfEt);

// Bonus 2

// We first get rid of all commas, points, and quotes
// Then we get rid of spaces, and we put all characters to lower case
// Finally we can compare the original string and the reverse one

const checkIfPalindrome = (phraseToCheck) => {
  const formattedString = phraseToCheck.replace(/[.,'?!]/g, '').split(' ').join('').toLowerCase();
  const reversedString = formattedString.split().reverse().join('');
  return formattedString === reversedString;
}

console.log(checkIfPalindrome('No \'x\' in Nixon'))
console.log(checkIfPalindrome('Was it a car or a cat I saw?'))


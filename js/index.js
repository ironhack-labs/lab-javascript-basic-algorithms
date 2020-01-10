console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Pip";
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = "Pip";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let driverName = "";
let navName = "";

for (let i = 0; i < hacker1.length; i++) {
  driverName = driverName + hacker1[i].toUpperCase() + " ";
}

for (let i = hacker2.length - 1; i >= 0; i--) {
  navName += hacker2[i];
}

if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The driver's name goes first. ");
  } else if (hacker2.localeCompare(hacker1) === 1) {
  console.log("Yo, the navigator goes first definitely.");
  } else {
  console.log("What?! You both have the same name?");
}
console.log("");

// -----------------------------------------------
// Bonus 1

loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum malesuada est, id auctor lectus maximus sit amet. Vivamus aliquam tellus vitae dui porttitor, quis rutrum nulla mollis. Fusce ultricies eros id viverra sodales. Nam id hendrerit nisi. Cras commodo rutrum nibh at interdum. Vivamus ac pellentesque ante, non sodales sapien. Aenean fermentum vestibulum eleifend. Nullam posuere sed lorem id hendrerit. Sed convallis ac turpis non hendrerit. Nulla iaculis eget metus a blandit. Proin rutrum at velit ac gravida. Duis finibus metus justo, non venenatis purus mollis vitae. In suscipit metus sit amet turpis dictum sagittis. Ut imperdiet convallis nulla a viverra. Nunc mattis varius est id mollis.

Praesent consequat volutpat suscipit. Mauris ut tellus suscipit, facilisis odio sed, porta urna. Duis ac pharetra ligula. In non varius nibh. Curabitur pretium ex quis neque vulputate, vitae consequat enim tincidunt. Nam in nunc in dui tincidunt rhoncus id sit amet orci. Sed efficitur magna sollicitudin, tempor nunc id, volutpat lacus. In ullamcorper egestas ipsum porta feugiat. Suspendisse egestas nec ante non varius. Nam varius lectus sit amet consectetur sodales.

Vivamus quis est massa. Vestibulum lobortis, libero nec fermentum ultrices, sem metus vulputate dolor, eget pharetra elit sapien quis velit. Nullam porta metus at iaculis hendrerit. Aliquam laoreet eros non dui venenatis dignissim. Maecenas quis metus quis arcu lobortis tempor. Sed lobortis nisi quis ligula dictum, nec consequat nisl dictum. Nullam suscipit porttitor nibh, eget varius lacus. Integer velit sapien, finibus in lorem quis, pellentesque venenatis quam. Quisque purus nunc, tincidunt et orci non, faucibus ullamcorper libero. Morbi euismod ac mauris vel ullamcorper. Aenean quis facilisis velit, vel laoreet diam. Nunc tincidunt est id nibh blandit, eget egestas mi pellentesque. Morbi accumsan et sem sed tempus. Nullam suscipit massa ac pharetra bibendum.`;

loremIpsumSplit = loremIpsum.split(" ");
console.log(`Amount of words in text: ${loremIpsumSplit.length}`);

etFullCount = 0;
etCount = 0;

for (let i = 0; i < loremIpsumSplit.length; i++) {
  if (loremIpsumSplit[i] === "et") {
    etFullCount++;
  }
}

for (let i = 0; i < loremIpsumSplit.length; i++) {
  if (loremIpsumSplit[i].indexOf("et") > 0) {
    etCount++;
  }
}

console.log(`Full word \'et\' present in text: ${etFullCount}`);
console.log(`Total amount of pieces of the word \'et\' present in the text: ${etCount}`);

// -----------------------------------------------
// Bonus 2

phraseToCheck = "A man, a plan, a canal, Panama";
firstPhrasePartClean = "";
reversePhrasePart = "";

//firstPhrasePart = phraseToCheck.replace(/,/g,'').toLowerCase().replace(/ /g,'')
//console.log(firstPhrasePart)

firstPhrasePart = phraseToCheck.toLowerCase().split(" ");

for (let i = 0; i < firstPhrasePart.length; i++) {
  firstPhrasePart[i].indexOf(",") > 0
    ? (firstPhrasePartClean += firstPhrasePart[i].substring(0, firstPhrasePart[i].length - 1))
    : (firstPhrasePartClean += firstPhrasePart[i]);
}

for (let i = firstPhrasePartClean.length - 1; i >= 0; i--) {
  reversePhrasePart += firstPhrasePartClean[i];
}

if (firstPhrasePartClean === reversePhrasePart) {
  console.log("It's a palindrome!");
} else {
  console.log("Too bad.. no palindrome..");
}

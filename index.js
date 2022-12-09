
// Iteration 1: Names and Input
let hacker1 = prompt("Write down driver's name.");
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = prompt("Write down navigator's name.");
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
hacker1 = hacker1.toUpperCase();
let hacker1UpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1UpperCase += (`${hacker1[i]} `); 
}
console.log(`${hacker1UpperCase}`);

let hacker2Reverse ="";
for (let i = (hacker2.length-1); i >= 0; i--)
  {
    hacker2Reverse += hacker2[i];
  }
console.log(`${hacker2Reverse}`);

if (hacker1.localeCompare(hacker2) === -1)
{
  console.log(`The driver's name goes first.`);
}
else if (hacker1.localeCompare(hacker2) === 1)
{
  console.log(`Yo, the navigator goes first definitely.`);
}
else if (hacker1.localeCompare(hacker2) === 0)
{
  console.log(`What?! You both have the same name?`);
}

/*Bonus 1 */
let longText = (`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat massa, efficitur nec nulla eu, interdum porta enim. Vivamus ut blandit ipsum. Integer hendrerit tempor risus at malesuada. Cras ipsum tellus, fermentum at cursus eget, pretium nec eros. Curabitur vitae porttitor ante. Proin venenatis finibus ipsum et malesuada. Nulla pulvinar aliquet magna, eu faucibus risus venenatis nec. Curabitur porta viverra pulvinar. Ut scelerisque fringilla enim. In hac habitasse platea dictumst. Nulla congue malesuada dignissim. Nunc at lectus mollis, varius elit et, sollicitudin odio.

Sed eros risus, iaculis placerat arcu id, iaculis dapibus sem. Fusce ullamcorper risus quis imperdiet pretium. Morbi id fermentum sapien, eu tempus ex. In porta quis justo et interdum. Sed vel ultrices risus. Nam eget mi felis. Nullam facilisis, metus vel euismod tristique, neque dui dapibus dolor, eget faucibus leo enim et lectus. Morbi euismod at purus in interdum. Sed sagittis elit non vestibulum dapibus. Vivamus fermentum mollis ultricies. Praesent fermentum metus in scelerisque tempor. Donec nisi nibh, dictum eu scelerisque at, maximus eu nisl. Donec finibus, lacus et pulvinar aliquet, augue lorem ultricies mauris, in pellentesque massa odio ac nisl. Ut accumsan arcu non efficitur facilisis.

Phasellus eu tempor sem. Nulla a mi ac nisl varius sollicitudin. Nulla eget fermentum tortor, et efficitur velit. Nulla nec blandit metus. Pellentesque accumsan, odio eget placerat egestas, mi odio suscipit eros, ac sollicitudin massa augue sed ante. Proin a commodo tellus. Phasellus gravida turpis et fringilla scelerisque. Curabitur tincidunt, nisi id varius dignissim, nibh tortor pharetra lectus, ut condimentum nisl ante ac urna. Maecenas enim orci, viverra sed mollis placerat, vehicula sed lectus. Sed lacinia suscipit eros, id volutpat enim. Nullam ut mi sed nulla volutpat mollis.`);
let spaceCounter = 0;
for (let i=0; i < longText.length; i++)
  {
    let spaceSymbol = longText[i];
    if (spaceSymbol == (" "))
    {
      spaceCounter += 1;
    }
  }
console.log(`There are ${spaceCounter} words in the text.`);

/*How many words "et" are there in the text? */
let wordsLongText = longText.split(' ');
let counterEt = 0;
for (i=0; i < wordsLongText.length; i++) {
  let wordContainer = wordsLongText[i];
  if (wordContainer == "et" || wordContainer == "Et" || wordContainer == "et," || wordContainer == "et." || wordContainer == "et!" || wordContainer == "et?") {
    counterEt += 1;
  }
}
console.log(`There are ${counterEt} "et" in the text.`);

/* Bonus 2 */
let phraseToCheck = (`No "x" in Nixon.`);
phraseToCheckWithoutPunctuation = phraseToCheck.replaceAll(' ','');
phraseToCheckWithoutPunctuation = phraseToCheckWithoutPunctuation.replaceAll(',','');
phraseToCheckWithoutPunctuation = phraseToCheckWithoutPunctuation.replaceAll('.','');
phraseToCheckWithoutPunctuation = phraseToCheckWithoutPunctuation.replaceAll('!','');
phraseToCheckWithoutPunctuation = phraseToCheckWithoutPunctuation.replaceAll('?','');
phraseToCheckWithoutPunctuation = phraseToCheckWithoutPunctuation.replaceAll('"','');
phraseToCheckWithoutPunctuation = phraseToCheckWithoutPunctuation.replaceAll("'","");
phraseToCheckWithoutPunctuation = phraseToCheckWithoutPunctuation.toLowerCase();
let phraseToCheckReverse = "";
for (let i = (phraseToCheckWithoutPunctuation.length-1); i >= 0; i--)
  {
    phraseToCheckReverse += phraseToCheckWithoutPunctuation[i];
  }
console.log(phraseToCheckReverse);
console.log(phraseToCheckWithoutPunctuation);
if (phraseToCheckWithoutPunctuation === phraseToCheckReverse) {
  console.log(`The phrase "${phraseToCheck}" is a Palindrome.`);
}
else {
  console.log(`The phrase "${phraseToCheck}" is not a Palindrome.`);
}
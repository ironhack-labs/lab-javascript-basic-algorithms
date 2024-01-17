/*
1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".
*/

const hacker1 = "Dmytro";
const hacker2 = "Alina";

console.log(`He driver's name is ${hacker1}`);
console.log(`She navigator's name is ${hacker2}`);

const hacker1Len = hacker1.length;
const hacker2Len = hacker2.length;

if (hacker1Len > hacker2Len)
  console.log(
    `The driver has the longest name, it has ${hacker1Len} characters.`
  );
else if (hacker1Len == hacker2Len)
  console.log(
    `Wow, you both have equally long names, ${hacker2Len} characters!`
  );
else
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Len} characters!`
  );

let newNameHacker1 = "";
let newNameHacker1Reverse = "";

for (let i = 0; i < hacker1Len; i++) {
  newNameHacker1 += `${hacker1[i].toUpperCase()} `;
  newNameHacker1Reverse += hacker1[hacker1Len - 1 - i];
}

console.log(newNameHacker1);
console.log(newNameHacker1Reverse);

if (hacker1 < hacker2) console.log(`The driver's name goes first.`);
else if (hacker1Len == hacker2Len)
  console.log(`What?! You both have the same name?`);
else console.log(`Yo, the navigator goes first, definitely!`);

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia velit nisl, nec dictum erat pulvinar tincidunt. Pellentesque gravida eros nulla, in sodales velit euismod eget. In ultricies, elit sed efficitur commodo, ligula quam pharetra purus, et molestie turpis neque sed mi. Nullam at porta erat. Cras sed gravida ipsum, in dignissim quam. Morbi at elementum mauris, vel lacinia purus. Aliquam erat volutpat. Maecenas ullamcorper nisl nec justo laoreet, sit amet aliquet mi mattis. Curabitur in purus a eros faucibus mollis. Fusce viverra lobortis lorem, non venenatis nunc malesuada sit amet. Nunc placerat ex eros, vitae hendrerit massa feugiat eu. Vestibulum interdum sem ut blandit aliquam. Nullam feugiat risus consectetur purus sollicitudin venenatis. Pellentesque hendrerit feugiat faucibus. Proin id justo turpis. Quisque malesuada, augue at mollis euismod, ex mi posuere dolor, eu feugiat urna risus eu diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque mi quam, pulvinar vel fringilla in, facilisis lacinia elit. Nulla libero ex, ornare in nibh et, efficitur volutpat velit. Phasellus euismod consequat hendrerit. Nullam gravida purus eros, at sollicitudin nibh vestibulum sed. Nulla laoreet, urna non vestibulum sodales, augue elit sagittis mi, sit amet luctus justo neque vitae ex. Duis venenatis mauris ac urna porta aliquet. Ut quis metus eget erat dapibus tristique vitae at nibh. Quisque hendrerit tortor eget sodales rutrum. Sed efficitur iaculis semper. Vestibulum mollis, felis a placerat hendrerit, magna augue facilisis lorem, ut tincidunt tortor nisl sed odio. Curabitur malesuada, lorem ac posuere bibendum, magna arcu lobortis felis, in efficitur turpis felis iaculis erat. Fusce in erat hendrerit, facilisis arcu at, porta ante. Fusce sit amet egestas mauris. Ut vel lorem urna. Donec bibendum tincidunt lectus. Nam in nibh sed ante cursus suscipit. Nam rutrum diam ac vehicula consequat. Mauris mauris augue, interdum commodo facilisis non.";

let count = 1;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") count++;
}

console.log("count of words is :", count);

let count2 = 1;
let count3 = 1;
Array.from(longText).forEach((char, index) => {
  if (char == " ") count2++;
  if (index > 0 && char + longText[index - 1] == "et") count3++;
});

console.log("count of words is :", count2);
console.log("count of et is :", count3);

let phraseToCheck = "A man, a plan, a canal, Panama!";

const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

let phraseToCheckOnlyLetters = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (englishAlphabet.includes(phraseToCheck[i].toLowerCase()))
    phraseToCheckOnlyLetters += phraseToCheck[i].toLowerCase();
}

console.log(phraseToCheckOnlyLetters);

let isStringPolindrom = true;
for (let i = 0; i < phraseToCheckOnlyLetters.length / 2; i++) {
  const char1 = phraseToCheckOnlyLetters[i];
  const char2 =
    phraseToCheckOnlyLetters[phraseToCheckOnlyLetters.length - i - 1];
  // console.log("char 1", char1);
  // console.log("char 2", char2);
  if (char1 !== char2) {
    isStringPolindrom = false;
    break;
  }
}

console.log("isStringPolindrom: ", isStringPolindrom);

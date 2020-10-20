////          Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = `Ivan`;

//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`);

//1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = `Ivan`;

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigator's name is ${hacker2}`);

////         Iteration 2: Conditionals

/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length === hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

else if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

////         Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let newHacker1 = ``;

for ( i = 0; i < hacker1.length; i++ ){
  newHacker1 += hacker1[i].toUpperCase();
  newHacker1 += ` `;
}

console.log(newHacker1);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let newHacker2 = ``;
for ( i = hacker2.length - 1 ; i >= 0 ; i--){
  newHacker2 += hacker2[i];
}

console.log(newHacker2);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

if (hacker1.localeCompare(hacker2) === 0)
{
  console.log(`What?! You both have the same name?`);
}

else if (hacker1.localeCompare(hacker2) < 0){
  console.log(`The driver's name goes first.`);
}

else { console.log(`Yo, the navigator goes first definitely.`);
}

////               Bonus 1

//Generate 3 paragraphs. Store the text in a variable type of string.

let loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis eros nec orci aliquet, eu placerat libero molestie. Proin ultrices quam ornare nisi faucibus interdum. Integer a ex varius orci semper suscipit sed semper lorem. Cras tristique fermentum libero, non sagittis nunc sodales sit amet. Phasellus velit dolor, eleifend quis volutpat nec, tempus scelerisque tortor. Vivamus maximus dignissim ligula sit amet aliquet. Aliquam nec urna elit. Sed tempor efficitur eros, in dignissim velit dapibus nec. Aenean fermentum, enim at vulputate pulvinar, lorem sapien aliquam mauris, vitae porttitor eros nisl non magna. Integer eget bibendum erat. Pellentesque sapien felis, rhoncus in porttitor ut, mattis vitae velit. Nunc eu vestibulum metus.

Mauris porttitor condimentum hendrerit. Sed quis lobortis sapien. Donec ac mi in elit vulputate placerat quis eget elit. Morbi enim neque, venenatis et tristique id, malesuada in ligula. Fusce vulputate efficitur nisl in blandit. Nunc auctor posuere mauris, eget suscipit eros rhoncus in. Suspendisse quis arcu sit amet tortor auctor feugiat id sed turpis. Sed purus mauris, placerat et gravida eget, euismod et turpis. Phasellus blandit eu arcu et tincidunt.

Praesent suscipit nulla ut urna tempus, vitae viverra eros tincidunt. Quisque rhoncus lacus erat, vel tempor dui facilisis in. Nullam condimentum ex id lacinia maximus. Curabitur sed ante risus. Phasellus sit amet volutpat dolor. Praesent vulputate quam sit amet neque ornare tempor. Sed pharetra ex magna, a blandit est ultrices nec. In cursus elit at erat sodales rhoncus. Phasellus ac rutrum arcu.`;

 //Make your program count the number of words in the string.

let wordsInText = 0;
let copyloremIpsumText = loremIpsumText;
copyloremIpsumText = copyloremIpsumText.split(` `).join(` `);

for (i = 0; i < copyloremIpsumText.length; i++){
  if (copyloremIpsumText[i] === ` `){
    wordsInText += 1;
  }
}
wordsInText += 1;

console.log(`${wordsInText} palabras`);  

//Make your program count the number of times the Latin word et appears.

let etWords = 0;

for (i = 0; i < loremIpsumText.length; i++){
  if (loremIpsumText[i] === `e` && loremIpsumText[i+1] === `t`){
        etWords += 1;
  }
}

console.log(`"et": ${etWords}`);

////               Bonus 2

/*Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"Amor, Roma"

"race car"

*/

 let phraseToCheck = `race car`;
 let regException = /[\W]/g;
 let stringToCheck = phraseToCheck.toLowerCase().replace(regException, ``);
 let stringToCheckReverse = stringToCheck;
 stringToCheckReverse = stringToCheckReverse.split(``).reverse().join(``);

 if (stringToCheck === stringToCheckReverse ) {
   console.log(`Is palindrome`)
 }

 else {
   console.log(`Is not palindrome`)
 }

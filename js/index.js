// variable
// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'yoseob';
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}""`);
// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'gregg';
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The navigator's name is ${hacker2}"`);

// conditional
// driver has longer name 
console.log(`The character numbers of the driver is ${hacker1.length}`);
// iteration
// 3.1 Print all the characters of the driver's name, 
// separated by a space and in capitals i.e. "J O H N"
let upperCasedHacker1 = hacker1.toUpperCase();
for (i = 0; i < upperCasedHacker1.length; i++) {
  console.log(upperCasedHacker1[i]);
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let splittedHacker2Array = hacker2.split('');
let reversedHacker2 = splittedHacker2Array.reverse();

for (i = 0; i < reversedHacker2.length; i++) {
  console.log(reversedHacker2[i]);
}
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
let order = hacker1.localeCompare(hacker2);
console.log(order);
if (order) {
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log('The lexicographic order can be confusing');
};

// bonus 1 baby
// Generate 3 paragraphs. Store the text in a variable type of string.
let lorem =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta, ex vel blandit ornare, eros velit volutpat dui, in dignissim tellus lorem sit amet diam. Donec quis dui diam. Morbi et congue nibh, ut cursus risus. Etiam ac sagittis ipsum, eu commodo ligula. Sed posuere egestas enim ac tempus. Nulla non dui nisi. Ut et augue id tortor consequat vulputate maximus et sapien. Praesent ornare dolor nec nisl egestas, ac viverra purus condimentum. Vivamus volutpat ipsum vel auctor volutpat. Nam sit amet bibendum magna. Morbi vitae tellus ac est tempor fringilla. Phasellus ut nibh a nunc auctor ornare a imperdiet tortor. Praesent sollicitudin sodales finibus. Nam vitae molestie purus, id gravida purus. Maecenas egestas urna laoreet dui aliquet imperdiet. Phasellus sed risus eget diam sagittis tincidunt.

Proin risus tortor, vehicula non pretium lobortis, consequat in odio. Suspendisse suscipit dui leo, non fermentum arcu elementum ut. Sed maximus ac odio ac sagittis. Maecenas eleifend augue quam, in rutrum est pharetra nec. Duis justo ligula, feugiat pellentesque mauris non, interdum tincidunt dolor. Proin in magna a felis vehicula eleifend. Suspendisse sit amet metus mauris. Aliquam justo tortor, gravida nec bibendum quis, ullamcorper ut neque. Proin nec turpis lacus. Cras aliquet nec erat non dignissim. Nulla tellus libero, condimentum sit amet dolor eu, consequat bibendum erat.

Suspendisse egestas accumsan nisl, vitae vehicula neque elementum non. Sed eu varius enim. Quisque at placerat justo. Ut a consectetur justo, in fringilla sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vitae lectus vitae odio rhoncus faucibus a at nunc. Suspendisse vel justo mi. Duis id lectus leo. Fusce facilisis purus neque, eu vestibulum orci rhoncus molestie. Cras rhoncus sem dui, eu venenatis nulla efficitur et. Quisque tempus eros id mauris iaculis tincidunt. Fusce a nunc diam. Maecenas dui massa, maximus nec pulvinar sed, semper sit amet orci. Maecenas vestibulum et elit eu lacinia. Praesent id egestas tortor.`;


// Make your program count the number of words in the string.
let word = lorem.split(' ');
let countedWordNumber = word.length;
console.log(countedWordNumber);

// for (let i = 0;i < word.length + 1; i++) {
//   console.log('counting lorem words: ' + i);
// }
// Make your program count the number of times the Latin word et appears.
let etCounter = 0;
for (let i = 0;i < word.length; i++) {
  if (word[i] === 'et') {
    etCounter += 1;
    console.log(etCounter)
  }
};

// bonus 2
// Write a code that will check if the value we assigned to this variable is a Palindrome. 
let phraseCheck = "taco cat";
let phraseInArray = phraseCheck.split('');
// reversed the phrase in string data type
let reversedPhrase = phraseInArray.reverse().join('')
// converting reversedPhrase back into original string
let certifiedPhrase = reversedPhrase.split('').reverse().join('');
// checking if both phraseCheck and certifiedPhrase are the same
if (phraseCheck === certifiedPhrase) {
  console.log(true);
}
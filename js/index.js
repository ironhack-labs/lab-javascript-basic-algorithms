// Iteration 1: Names and Input
console.log("I'm ready!");
const hacker1 = 'Friso';
console.log('The driver name is '+hacker1)
const hacker2 = 'Boris';
console.log('The navigator name is '+hacker2);

// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length ) {
console.log(`The driver has the longest name, it has ${hacker1.length}characters.`)
}
else if (hacker2.length > hacker1.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

}
else if (hacker1.length === hacker2.length) {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)

}

// Iteration 3: Loops

hacker1Uppercase = hacker1.toUpperCase()
nameWithSpaces = '';
for (let i = 0; i < hacker1Uppercase.length; i++) {
console.log(hacker1Uppercase[i] );
nameWithSpaces += `${hacker1Uppercase[i]} `;
nameReverseOrder = '';
}
console.log(nameWithSpaces);
for (let j = hacker2.length -1; j > 0; j-- ) {

nameReverseOrder += `${hacker2[j]}`;

}

console.log(nameReverseOrder);

// Lexical order


if (hacker1 === hacker2) {

console.log(`What?! You both have the same name?`);

}

else if (hacker1.localeCompare(hacker2) === -1) {
  
console.log(`The driver's name goes first`);
}
  
else if (hacker1.localeCompare(hacker2) === 1) {

console.log(`Yo, the navigator goes first definitely.`);

}


// Bonus Time! Bonus 1:

const loremIpsumString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit vitae dui in sodales. Aenean nec sem tincidunt, accumsan ipsum elementum, tincidunt urna. Phasellus dui augue, ultricies id neque id, tincidunt sagittis ante. Vivamus suscipit tempus ex eget dignissim. Praesent sed pellentesque neque. Aliquam at consequat arcu. Vivamus convallis scelerisque accumsan. Nunc mattis id sem in bibendum. Proin nec viverra urna. Donec facilisis nisl eu sodales semper. Donec odio quam, aliquam a sapien vel, porta malesuada enim. Phasellus pellentesque, magna venenatis venenatis faucibus, neque turpis pulvinar leo, finibus consectetur risus nisl a elit. Pellentesque ac risus vitae dui blandit pellentesque ac et tellus. Vestibulum eget elit finibus, blandit orci volutpat, sodales quam. Curabitur condimentum purus eget ligula rhoncus faucibus. Sed lectus sem, mollis vitae eleifend ut, elementum nec turpis. Vestibulum mattis magna ac lacus blandit, nec feugiat nibh ultricies. Donec nec libero augue. Aliquam ac turpis a ante rhoncus sodales. Mauris auctor dolor mauris, bibendum aliquam libero tristique vitae. Donec eget consequat ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed velit velit, pulvinar at iaculis ac, maximus ut risus. Proin ultrices nibh eu vulputate efficitur. Praesent libero mauris, hendrerit congue interdum id, feugiat non erat. Quisque mattis semper diam ut congue. Mauris elit mi, aliquet et volutpat at, placerat eget tortor. Nulla ut elementum ligula, sed commodo diam. Aliquam maximus, purus eu dignissim interdum, ante erat lobortis odio, nec gravida odio metus nec erat. Fusce sodales erat eros, nec aliquam lectus pellentesque elementum. Suspendisse et vestibulum leo, tempus finibus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque et dignissim enim, fermentum pharetra orci. Curabitur fermentum non tortor vitae semper. In dignissim auctor mollis. Donec commodo ultricies dignissim. Fusce non nisl aliquam, lacinia turpis quis, vestibulum velit. Aenean arcu urna, pharetra eu felis sit amet, ultrices vulputate nibh.`

console.log(loremIpsumString);
console.log(loremIpsumString.length);

let counter = 0;

for (let i = 0; i < loremIpsumString.length; i++) {

if (loremIpsumString[i] === 'e' && loremIpsumString[i+1] === 't') {

counter++

}
}
console.log(`The text has ${counter} times 'et'`);

// Bonus 2:

let  phraseToCheck = 'race car';
let  phraseUpperCase = phraseToCheck.toUpperCase();
let  phraseWithoutSpaces = '';
let  phraseReverseOrder = '';

// delete spaces from the phrase
for (let i = 0; i < phraseUpperCase.length; i++) {
if (phraseUpperCase[i] === ' ') {
} 
else {
  phraseWithoutSpaces += `${phraseUpperCase[i]}`;
}
}

// Reverse the phrase
for (let j = phraseWithoutSpaces.length -1; j > -1; j-- ) {
phraseReverseOrder += `${phraseWithoutSpaces[j]}`;
}

// Check if it is a palindrome or not

if (phraseWithoutSpaces === phraseReverseOrder) {
console.log('This is a palindrome')
}
else {
console.log('This is not a palindrome');
}
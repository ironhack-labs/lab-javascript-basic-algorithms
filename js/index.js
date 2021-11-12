// Iteration 1: Names and Input
// 
let hacker1 = 'Felipe';
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = 'Rafael';
console.log(`"The navigator name is ${hacker2}"`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length < hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}
// Iteration 3: Loops

let nameSeparated = '';

for (let i = 0; i < hacker1.length; i += 1){
   nameSeparated += `${hacker1[i].toUpperCase()} `  
}

console.log(nameSeparated);

let nameInverse = '';

for (let i = hacker2.length - 1; i >= 0; i -= 1){
  nameInverse += `${hacker2[i]}`;
}

console.log(nameInverse);

if (hacker1 < hacker2){
  console.log("The driver's name goes first.")
} else if(hacker1 > hacker2){
 console.log('Yo, the navigator goes first definitely.')
}else {
console.log('What?! You both have the same name?')
};

// Bonus 1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet velit convallis ullamcorper venenatis. Aenean elementum justo at massa tristique congue. Nulla felis eros, congue vitae dui sed, ornare lacinia dui. Phasellus sit amet lectus nec orci vulputate luctus. Aliquam et lacinia sapien, ut bibendum felis. Donec malesuada orci in justo vestibulum, a imperdiet erat aliquet. In sem elit, posuere a mauris eget, accumsan viverra mauris. Sed viverra sem a fermentum tempus. Suspendisse in nulla laoreet, luctus ante at, sollicitudin elit.
Nunc sit amet auctor lacus. Suspendisse malesuada, neque eu imperdiet interdum, nisi odio posuere nibh, non pharetra enim dui quis leo. Nulla imperdiet pulvinar velit, et blandit ipsum lobortis et. Aliquam in accumsan nunc. Nam posuere, tortor eu varius aliquet, lacus turpis bibendum ligula, ut aliquet tellus diam eu nisl. Quisque lectus urna, feugiat ac consequat nec, luctus sed libero. Integer bibendum arcu in leo iaculis, vel gravida enim rutrum. Suspendisse sit amet erat volutpat massa dictum hendrerit at vitae dui. Nunc sapien justo, facilisis in massa eu, vehicula feugiat erat. Duis mattis cursus congue. Curabitur volutpat dolor eget ante egestas, at tincidunt purus iaculis. Sed aliquam, magna et pulvinar commodo, tellus mauris faucibus metus, id imperdiet mauris turpis eget augue. Etiam venenatis, metus sit amet varius maximus, quam odio pellentesque mauris, non euismod augue ligula sed elit. Suspendisse potenti. Morbi tristique lacus nec metus placerat, a pharetra arcu porta. Suspendisse eget aliquet tellus, nec malesuada purus.
Nam volutpat, magna hendrerit ultrices elementum, orci augue facilisis risus, non ultrices lacus massa in ligula. Cras iaculis sapien non enim hendrerit, quis lobortis enim vestibulum. Cras viverra tortor a vehicula porttitor. Vestibulum sodales nisi sed commodo laoreet. Curabitur fringilla orci quis eros aliquet finibus. Duis sollicitudin tincidunt augue sed mattis. Aenean quis mattis magna, eu porta velit. Nunc fringilla quam ex, ac dignissim sem aliquam a. Vivamus ipsum eros, posuere vitae neque vitae, vulputate eleifend mauris.`

let wordCounter = 1;

// Depois de toda a palavra vai ter um espaça, exceto na última
for (let letter of loremIpsum){
  if (letter === ' '){
    wordCounter += 1;
  }
}

console.log(wordCounter)

// Bonus 2


let phraseToCheck = "No 'x' in Nixon";
let phraseToCheckOnlyLetters = '';
let phraseToCheckInverse = '';

for (let i = 0; i < phraseToCheck.length; i += 1){
  if (phraseToCheck[i] === ' ' || phraseToCheck[i] === '!' || phraseToCheck[i] === ',' || phraseToCheck[i] === '?' || phraseToCheck[i] === '"' || phraseToCheck[i] === "'"){
    continue
   } else{
    phraseToCheckOnlyLetters += phraseToCheck[i].toLowerCase()
  };
} 

for (let i = phraseToCheckOnlyLetters.length -1; i >= 0; i -= 1){
  phraseToCheckInverse += phraseToCheckOnlyLetters[i].toLowerCase()
}

if (phraseToCheckInverse === phraseToCheckOnlyLetters){
  console.log("It's a palindrome")
} else {
  console.log("It's not a palindrome")
}

console.log(phraseToCheckInverse, phraseToCheckOnlyLetters)
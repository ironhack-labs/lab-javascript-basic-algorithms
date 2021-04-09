// Iteration 1: Names and Input
let hacker1 = "Andres";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Roberto";
console.log(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let spaceAndCapitals=[];
let reversed="";

for(let i=0; i<hacker1.length; i++) {
    spaceAndCapitals+=hacker1.charAt(i);
    //Add space in between chars
    if(i !== hacker1.length-1) {
        spaceAndCapitals+=" ";
    }
}
spaceAndCapitals = spaceAndCapitals.toUpperCase();
console.log(spaceAndCapitals);

for(let i=hacker2.length-1; i>=0; i--) {
    reversed+=hacker2.charAt(i);
}

console.log(reversed);

if(hacker1>hacker2) {
    console.log("The driver's name goes first.");
}
else if (hacker2>hacker1) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}
  
// Bonus 1
let lorem = `Et ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu consectetur lacus. Praesent quis lorem lobortis, pulvinar velit a, mattis nibh. Aliquam id tincidunt orci. Etiam tempor tellus justo, ac sagittis sem sodales id. Curabitur dui purus, accumsan vitae suscipit sit amet, mattis eu odio. Quisque posuere efficitur est, sit amet condimentum erat varius nec. Morbi eu lorem tempor, semper purus eu, vehicula mi. Duis scelerisque, purus a ornare faucibus, neque lacus varius felis, eget feugiat massa ante ut urna. Etiam leo sem, iaculis a urna sagittis, consequat sodales nisi. Donec letestie est eros.

Aenean pharetra finibus let et placerat. Mauris lectus ante, bibendum eget sem a, ultrices commodo ipsum. In eros libero, ullamcorper interdum tincidunt ac, fringilla at elit. Etiam dignissim feugiat mattis. Nulla a nibh eu sem rutrum consectetur. Vestibulum semper augue orci, a fermentum lacus pretium in. Cras sed ex ut ipsum pellentesque porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed sollicitudin metus. Maecenas finibus imperdiet dapibus. Nunc sagittis ex orci. Sed lacus lectus, accumsan nec tellus eu, faucibus sodales quam. Praesent sollicitudin laoreet malesuada. Duis placerat dui vitae tortor consectetur tempor.

Duis mollis mollis leo non efficitur. Proin et massa sapien. Nulla ac lectus erat. Morbi in maximus neque. Nullam dolor sapien, ullamcorper sit amet enim dignissim, consequat posuere arcu. Vestibulum eget quam ut massa mollis vulputate eu sed mauris. Morbi eget consectetur nibh, luctus vehicula lorem. Phasellus quis nulla a mauris malesuada placerat eget nec et.`;

const loremWordCount = lorem.match(/\w+/gm).length;
const loremEtWordCount = lorem.match(/\bet\b/gmi).length;

console.log(`Lorem length: ${loremWordCount} words`);
console.log(`The "Et" word appears ${loremEtWordCount} times in the lorem`);

// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";

const phraseToCheckCleaned = phraseToCheck.replace(/\W/g,'').toLocaleLowerCase();
const phraseToCheckCleanedInverted = phraseToCheckCleaned.split('').reverse().join('');

if(phraseToCheckCleaned===phraseToCheckCleanedInverted) {
  console.log(`${phraseToCheck} is a palindrome!`);
}
else {
  console.log(`${phraseToCheck} is not a palindrome`);
}
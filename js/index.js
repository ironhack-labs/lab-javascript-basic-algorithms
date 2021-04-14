// Iteration 1: Names and Input
let hacker1 = "Aurelie";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jordan";
console.log(`The navigator's name is ${hacker2}`);
let hacker3 = "Bettina";
console.log(`The navigator's name is ${hacker3}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops

//3.1
let splitUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
  splitUpperCase += hacker1[i].toUpperCase();
  splitUpperCase += " ";
}
console.log(splitUpperCase);

//3.2
let reverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverse += hacker1[i];
}
console.log(reverse);

//3.3

if (hacker1.charCodeAt(0) < hacker2.charCodeAt(0)) {
  console.log(`The driver's name goes first.`);
} else if (hacker2.charCodeAt(0) < hacker1.charCodeAt(0)) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1

//1.1
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo posuere, lacinia leo et, blandit augue. Donec sed dui quam. Nam congue tristique mi finibus finibus. Mauris eu dolor vel tellus pharetra posuere. Vivamus nec sagittis nisi, non aliquam tellus. Cras consequat at elit eget scelerisque. Nullam convallis dui sed hendrerit molestie. Vivamus ac libero orci. Nulla eu turpis faucibus, sagittis dolor id, sollicitudin eros. Aenean eget quam ullamcorper, volutpat nisi nec, rhoncus diam. Ut pharetra neque nec dignissim sagittis. Maecenas eu arcu enim. Vestibulum tempor quam lorem, at consequat quam facilisis at. Sed ut convallis metus, in cursus ex. Donec sit amet libero id turpis accumsan egestas condimentum eget nulla. Aliquam hendrerit risus non quam ultricies posuere. Fusce eleifend mi quis suscipit laoreet. Vestibulum sed lorem nisl. Vivamus vel lorem sed magna mattis euismod in nec augue. Fusce et ultricies lorem. Vivamus nec odio vulputate purus rhoncus luctus. Nulla at metus bibendum, ultricies ligula imperdiet, semper enim. Nullam dignissim diam ut dapibus consequat. Fusce id lacinia nisl, ac semper purus. Curabitur sagittis eros in felis mollis placerat. Curabitur ex lacus, aliquam et diam id, cursus commodo nibh. Ut ac mi nec tortor semper sollicitudin. Pellentesque placerat, urna ut sodales porttitor, urna erat aliquet felis, quis blandit lorem purus in quam. Pellentesque et scelerisque eros, a faucibus velit. Suspendisse eget orci arcu. Etiam placerat, orci vel mollis pulvinar, quam diam pretium lacus, eu vestibulum sem lacus et ex. Praesent et purus ornare, tincidunt nisi at, ornare libero. Duis ut nisi id tortor porttitor interdum. Donec blandit a arcu at finibus. In non leo vel sapien porttitor posuere. Sed tempor ipsum ac venenatis suscipit.";

//1.2
let myArray = paragraph.split(" ");
console.log(`There are ${myArray.length} words in the string.`);

//1.3
countEt = 0;
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] == "et") {
    countEt += 1;
  }
}
console.log(`The Latin word et appears ${countEt} times.`);


//Bonus 2

//1.1
 let phraseToCheck = "amorroma"


    let flag = true;
    let j = 0;
     for( let i = phraseToCheck.length-1; i > phraseToCheck.length / 2; i-- )
     {
         if( phraseToCheck[i] !== phraseToCheck[j] )
         {
            flag = false;
            break; 
         }
         j++;
     }
   if( flag ) {
   console.log('the word is palindrome.');
   }
   else {
 console.log('the word is not palindrome.');
   }

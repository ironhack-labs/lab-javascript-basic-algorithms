// Iteration 1: Names and Input
let hacker1 = "Tina";
let hacker2 = "Bob";
console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditional

if ( hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if ( hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

if ( hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}




// Iteration 3: Loops

for (i = 0; i < hacker1.length; i++) {
 let newHacker = hacker1.split('').join(' ');
  console.log(newHacker.toUpperCase())
  
}

for (i = 0; i < hacker2.length; i++) {
  let newerHacker = hacker2.split('');
  newerHacker = newerHacker.reverse();
  var joinArray = newerHacker.join("");
  console.log(joinArray);
}



if (hacker1[0] < hacker2[0]) {
  console.log(`Yo, the navigator goes first definitely.`);
}

else if (hacker1[0] > hacker2[0]) {
  console.log(`The driver's name goes first.`)
}

else {
  console.log(`What?! You both have the same name?`)
}





let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in rhoncus purus. Sed consectetur in ex ac bibendum. Nulla vel elementum lectus, volutpat gravida dui. Nulla nulla felis, porta in nibh a, tempus molestie libero. Aenean dictum iaculis faucibus. Sed tincidunt nunc eu purus iaculis, non interdum sapien pulvinar. Vestibulum porta ipsum sit amet tincidunt consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Fusce eget ullamcorper ipsum. Proin molestie magna lorem. Morbi porttitor consequat ante quis sodales. Fusce porttitor arcu a risus malesuada faucibus. Morbi ultricies vel dolor eget iaculis. Proin quis elit nulla. Curabitur eget risus quis ante placerat hendrerit. Maecenas interdum elementum tellus sit amet volutpat. Maecenas ut mi fringilla, ultrices arcu semper, mattis diam. Etiam et ipsum dapibus, laoreet magna eget, aliquam orci.Fusce viverra purus urna, eu tincidunt dolor fringilla quis. Pellentesque ultrices enim ipsum. Aenean eros sapien, dictum in ullamcorper in, tempus et nisi. Morbi eu vehicula risus, eu feugiat purus. Pellentesque sit amet metus id arcu iaculis lacinia vitae ut turpis. Nam nisl ipsum, ullamcorper sit amet finibus vel, finibus eu mauris. Donec congue ante eget dignissim tempor. Morbi in ligula et sem laoreet posuere. Sed rhoncus lacus ex. Nam consectetur eleifend elit, in elementum felis. Praesent libero quam, consectetur in fermentum ut, viverra in tortor. Sed bibendum, augue nec faucibus efficitur, risus lorem condimentum diam, non feugiat nisl magna et massa. Sed ultricies luctus interdum. Aliquam posuere porta ante a iaculis."



newStr = str.split(' ');
console.log(newStr.length);

let total = [];
for (i = 0; i < newStr.length; i++) {
  if (newStr[i] === "et") {
    total.push(newStr[i])
    
    
  }
}

console.log(total.length);




let phraseToCheck = "A man, a plan, a canal, Panama!"

let newPhrase = phraseToCheck.split('');
reversePhrase = newPhrase.reverse();
joinPhrase = reversePhrase.join('');

if (joinPhrase === phraseToCheck) {
  console.log(`This is a palindrome`)
}

else {
  console.log(`This is not a palindrome`)
}








// Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
// - "A man, a plan, a canal, Panama!"
// - "Amor, Roma"
// - "race car"
// - "stack cats"
// - "step on no pets"
// - "taco cat"
// - "put it up"
// - "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// __Hint__: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as _join()_, _reverse()_, etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using `for` loop, `if-else` statements with some `break` and `continue`... Just sayin' :smiley: 

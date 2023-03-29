// Iteration 1: Names and Input
/*

// Names and Input //

let hacker1 = "Francieli"
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Hector"
console.log(`The navigator name is ${hacker2}`);


// Conditionals //

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}

else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}


// Loops //

let nameSpaced = "";
for (let i = 0; i < hacker1.length; i++){
  nameSpaced += hacker1[i] + " ";
}
console.log(nameSpaced.toUpperCase());




let nameReversed = "";

for (let j = hacker1.length - 1; j >= 0; j--){
  nameReversed += hacker1[j]
}
console.log(nameReversed);





let longestName = "";

if (hacker2.length > hacker1.length) {  
    longestName = hacker2;
} else {
  longestName = hacker1;
}

console.log(longestName); 

for (let i = 0; i < longestName.length; i++) {
  if (hacker2 === hacker1) {
    console.log(`What?! You both have the same name?`);
    break;
  } else if (hacker2[i] > hacker1[i]) { 
    console.log(`Yo, the navigator goes first, definitely.`);
    break;
  } else {
    console.log(`The driver's name goes first.`);
    break;
  }
}

*/




// Bonus 1! //

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac faucibus justo, a mattis augue. Quisque nibh ipsum, mollis eu dapibus quis, commodo ac massa. Nam dignissim elementum mauris eu fringilla. Cras ultrices dolor placerat ultricies rhoncus. Donec posuere quam non massa tempor ornare. In hac habitasse platea dictumst. Donec porta consequat massa ac tincidunt. Morbi blandit nibh aliquet turpis placerat, in lacinia nibh facilisis. Sed in arcu lectus. Donec iaculis cursus lacus, non auctor nisl interdum a. Duis non vulputate risus. Integer bibendum eros eu elit venenatis consectetur. Morbi feugiat auctor venenatis. Proin egestas nibh odio. Aliquam ipsum nisl, viverra vel velit quis, tempus tempus nunc. Duis pellentesque, metus in aliquet aliquam, nunc erat vulputate dolor, non lacinia velit enim nec leo.Aenean feugiat pharetra lorem, sit amet aliquam purus auctor nec. Sed pellentesque et ex at dapibus. Mauris hendrerit erat ullamcorper dolor dictum mattis. Donec neque magna, tempor non pharetra eu, rutrum in nunc. Mauris placerat euismod laoreet. Nulla turpis turpis, semper vel mollis non, ornare ac lacus. Etiam hendrerit euismod lacus, at gravida metus ultrices non. Pellentesque sollicitudin bibendum scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.Vivamus fringilla convallis bibendum. Vestibulum vitae volutpat elit, luctus auctor diam. Cras vitae dui vel enim scelerisque aliquam eu eget lorem. Nunc eros eros, hendrerit sit amet nisl dictum, eleifend condimentum nibh. Duis ac metus eget elit rhoncus viverra. Morbi tincidunt erat at neque mollis blandit. Vestibulum viverra, neque sed malesuada placerat, mauris lectus viverra magna, nec facilisis justo dui ut erat. Donec id dui dolor. Fusce rhoncus quam vel vulputate fermentum."

let etCount = 0;
let wordCount = 0; 


for (let i = 0; i < longText.length; i++){
  const twoChars =` ${longText[i]}${longText[i+1]} `;
  if (twoChars === " et "){ 
    etCount++;
  }
}
  
console.log(`The current text contains a total of ${etCount} 'et' and and xxxx words in total`);


// Iteration 2: Conditionals


// Iteration 3: Loops

// Iteration 1: Names and Input
// 1.1
// Create a variable `hacker1` with the driver's name.

let hacker1 = 'Natalia';

// 1.2
// Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`);

// 1.3
// Create a variable `hacker2` with the navigator's name.

let hacker2 = 'Camila';

// 1.4
//Print `"The navigator's name is YYYY"`.

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

// 2.1
//Depending on which name is longer, print:

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
     console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`); 
    } else {
      console.log(`Wow, you both have equally long names, ${hacker1.lenght} characters!`);
    }


// Iteration 3: Loops

// 3.1
// Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let uppercased = hacker1.toUpperCase();
let oneLine = "";
for ( let i = 0; i < uppercased.length; i ++) {
  oneLine +=  uppercased[i] + " ";
}
let oneLineSpaced = oneLine.trim()
console.log(oneLineSpaced);


// 3.2
// Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reversed = "";

for (let i = hacker1.length -1; i >= 0; i--) {
  reversed += hacker1[i] + " ";
}
let reversedSpaced = reversed.trim()
console.log(reversedSpaced);


// 3.3
// Depending on the lexicographic order of the strings, print:

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
  } else if (hacker1 > hacker2) {
     console.log(`Yo, the navigator goes first definitely.`); 
    } else {
      console.log(`What?! You both have the same name?`);
    }


//Bonus 1
// Generate 3 paragraphs. Store the text in a variable type of string.

let paragraphy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in enim et ligula efficitur laoreet. In et lacus ac sapien tincidunt rutrum venenatis et urna. Cras nibh leo, vehicula et mauris non, congue mollis justo. Integer vitae vestibulum nulla, sit amet efficitur arcu. Nunc ipsum dolor, placerat at urna non, rhoncus pretium mauris. Sed id augue ut tortor dignissim aliquet vitae gravida lorem. Phasellus elementum velit quis lectus condimentum, sit amet maximus purus euismod. Integer finibus tellus sed nunc finibus finibus. Ut rutrum bibendum sem vitae gravida. Duis ut eros sit amet purus accumsan faucibus sit amet porta orci. Ut finibus et dolor ullamcorper rhoncus. Sed blandit, sapien eu ultrices rutrum, sapien tortor ultricies leo, eu euismod enim enim et odio. Suspendisse imperdiet tortor ac sodales venenatis. Phasellus a massa et orci suscipit tempus molestie nec arcu. Quisque purus augue, placerat eu suscipit ac, efficitur quis eros. Morbi efficitur volutpat venenatis. \nFusce tempus lacus mollis turpis condimentum tempus. Proin id purus sed mi fermentum vehicula quis nec diam. Cras velit urna, posuere et varius id, tincidunt a elit. Vestibulum ac vulputate sem. Pellentesque bibendum ultricies mauris, in pellentesque lacus mollis in. Proin molestie tempus sem id sagittis. Integer sed vulputate erat. Vivamus porta malesuada sem, quis venenatis enim elementum semper. Nunc placerat sodales dui dapibus porttitor. Mauris sit amet lectus sed ante rutrum lobortis et nec diam. Aliquam posuere blandit ligula. Etiam blandit nisl sit amet arcu condimentum pulvinar. Maecenas sodales mi vel mi fermentum ullamcorper. Quisque a pellentesque ante. \nSed commodo feugiat tincidunt. Morbi egestas ipsum ac lacus volutpat sagittis. Morbi tristique sit amet tortor vitae hendrerit. Quisque venenatis pharetra libero non hendrerit. Duis ornare nec nisl vitae pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris varius sapien eget enim sollicitudin placerat. Donec augue quam, fringilla a laoreet sed, facilisis non metus. \nInteger ornare tincidunt sem quis molestie. Nullam consequat, elit at aliquam gravida, ex nulla egestas lorem, at varius risus mauris non tellus. Vivamus venenatis non eros eget vulputate. Fusce eu arcu augue. Ut id lacus volutpat lorem feugiat porta eget vitae nibh. Mauris quis dictum justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pharetra odio sit amet nisi semper, ac sodales leo vehicula. Sed eu sapien ac nunc imperdiet posuere. In rhoncus turpis diam, et finibus orci ultricies eget. Nunc laoreet lacinia orci vel aliquam. Curabitur ultrices nisi nulla, sed pulvinar odio luctus at. n\Nam arcu erat, imperdiet at aliquam vitae, sagittis ac sapien. Donec sed turpis congue, tempus mi eget, mollis orci. Suspendisse potenti. Quisque arcu ante, vestibulum tristique convallis ac, hendrerit sed tortor. Proin ac elementum ipsum, eu hendrerit ex. Sed convallis mauris vel sapien mollis, et scelerisque lacus pharetra. Pellentesque pellentesque id arcu quis condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam consequat nunc diam, posuere faucibus sem tristique in.'

// Make your program count the number of words in the string.

let wordCount = paragraphy.split(" ");
let counter = 0;

for (let i = 0; i <= wordCount.length; i++) {
  counter = [i] 
  i++
}

console.log(`The word count is ${counter}`);


// Make your program count the number of times the Latin word et appears.

let count = 0;

for ( let i = 0; i <= paragraphy.length; i++) {
  const char1 = paragraphy[i]
    const char2 = paragraphy[i + 1];
  const char3 = paragraphy[i + 1 + 1];
  const char4 = paragraphy[i + 1 + 1 + 1];
  
   if ((char1 === " " || char1 === "." || char1 === "," || char1 === ":") && (char2 === "e" && char3 === "t") && (char4 === " " || char4 === "." || char4 === "," || char4 === ":" )) {
      count++;
    };
}
console.log(`The number of times the Latin word 'et' appears is ${count}`);
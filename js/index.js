// Iteration 1: Names and Input
let hacker1 = "Bob1";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "John";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters`);  
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let completedString = '';

for (let letter of hacker1) {
  completedString += letter.toUpperCase();
  completedString += ' ';
}

console.log(completedString);

let completedString2 = '';

for (let i=hacker2.length-1; i>=0; i=i-1) {
  
  completedString2 += hacker2[i];
}

console.log(completedString2);


// Bonus 1
let loremText =`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris eros, mattis eu nunc vitae, vehicula rhoncus elit. Phasellus vel enim sit amet lacus efficitur ultrices. Pellentesque a magna et massa cursus volutpat. Donec dapibus ultrices felis, a molestie orci mollis vitae. Duis ut mi ac lectus luctus tempor quis nec magna. Suspendisse laoreet rutrum mi malesuada sodales. Fusce hendrerit vulputate dui, nec auctor metus pharetra in. Phasellus et turpis pulvinar diam lacinia ultrices. Sed accumsan diam sit amet iaculis tempor. Aliquam euismod urna id ex volutpat, vel rutrum dolor vehicula. Sed volutpat urna nibh, eget porta turpis tempus et.

Integer nec porta ligula. Suspendisse suscipit placerat nibh, maximus congue ex convallis ac. Vivamus egestas velit mauris, et suscipit libero auctor quis. In ac neque quis libero mollis tincidunt. Praesent pellentesque faucibus leo nec tristique. Nulla est purus, vulputate id diam id, semper fermentum metus. Fusce a tincidunt justo. Nunc eu egestas arcu, sed consectetur enim. Nulla condimentum dolor ac arcu iaculis condimentum. Pellentesque id sagittis purus. Phasellus nec libero ut dui imperdiet mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec porttitor tellus.

In diam augue, scelerisque consectetur suscipit eget, cursus a ex. Morbi volutpat blandit sem in luctus. Ut ac porttitor mauris. Phasellus vehicula tincidunt neque, in faucibus eros aliquam ac. Vivamus pretium dui tellus, vel dapibus arcu consequat vitae. Morbi ac tristique turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra urna nec purus blandit, non consequat sem ultrices. Nulla ante justo, ultricies ac dictum sed, rutrum eu elit. Mauris consequat placerat tortor quis mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla in dolor eget velit euismod suscipit quis eget urna.`;

let countWords = 1; //first word counting
let countEt = 0;
for (let i = 0; i<=loremText.length;i++) {
  if (loremText[i] === ' ') countWords++; //count the number of words in the string.

  if (loremText.substr(i, 2) === 'et') countEt++; //count the number of times the Latin word et appears.

}
console.log('Words: ' + countWords);
console.log('Et: ' + countEt);

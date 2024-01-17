//1.1
const hacker1 = "Pauline";

//1.2
console.log(`The driver's name is ${hacker1}`);

//1.3
const hacker2 = "Alastair";

//1.4
console.log(`The navigator's name is ${hacker2}`);

//2.1
if (hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length<hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// 3.1

let capitalName= '';


for (let i=0; i<hacker1.length; i++){
  capitalName += `${hacker1[i].toUpperCase()} `;

}

console.log(capitalName);

// 3.2 

let reversedName = '';
for (let i=hacker2.length-1; i>=0; i--){
reversedName += hacker2[i]; 
}
console.log(reversedName);

// 3.3

if (hacker1.localeCompare(hacker2)===-1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2)===1) {
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?")
}

// Bonus 1

const longText= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum neque ut hendrerit tempor. Aenean gravida mauris sit amet aliquam malesuada. In nec sagittis nisl, ut auctor dui. Nam luctus mi sit amet neque bibendum, sodales feugiat felis maximus. Integer consectetur magna in purus feugiat pharetra. Maecenas sodales felis sed dui molestie ultricies ut vitae purus. Aenean eget dignissim nisl. Vestibulum risus elit, tempor non fringilla sed, finibus sit amet lectus. Pellentesque id ipsum egestas, fringilla arcu tristique, egestas odio.

  Ut venenatis elementum pharetra. Duis gravida neque enim, vel tincidunt enim varius nec. Aliquam scelerisque felis velit, sit amet euismod mi tempor vitae. Integer eu dolor molestie, sodales arcu eu, ultrices velit. Nam ut massa accumsan, feugiat dui sit amet, commodo justo. Curabitur at ex dolor. Pellentesque eu nibh ac nisi tincidunt ultrices quis maximus quam. Integer id imperdiet leo. Duis at ante ut diam aliquet mattis ut vulputate augue. Sed orci sem, luctus quis pellentesque non, placerat a diam. Aliquam aliquam odio ac est consequat tempor. Cras consectetur in lacus ut pretium. Pellentesque vestibulum semper volutpat.

  Maecenas sed vestibulum ante. Mauris et pellentesque justo, vel fringilla erat. Duis tempus pharetra erat, ut luctus ligula placerat id. Suspendisse id dui placerat ligula venenatis luctus sit amet vitae est. Cras sagittis ultricies tortor quis dictum. Nulla sit amet nibh in tellus lobortis bibendum a et nibh. Sed dignissim urna suscipit pretium vehicula.`;

// B1.2
let countWords = longText.split(' ').length;
console.log(countWords);

// B1.3
let etCount = longText.split(' et ').length;
console.log(etCount)

// Bonus 2

let phraseToCheck = `A man, a plan, a canal, Panama!`

phraseToCheck = phraseToCheck.toLowerCase();

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

let newPhrase = '';

for (let k=0; k<phraseToCheck.length; k++) {
  if (alphabet.includes(phraseToCheck[k])) {
    newPhrase += phraseToCheck[k];
  }
    
}

console.log(newPhrase);

let reversedNewPhrase = '';

for (let l=newPhrase.length-1; l>=0; l--){
reversedNewPhrase += newPhrase[l]; 
}

if (reversedNewPhrase === newPhrase) {
  console.log('It is a palindrome');
} else {
  console.log('It is not a palindrome')
}
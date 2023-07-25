// Iteration 1: Names and Input
let hacker = 'Rodrigo';
console.log(`The drivers name is ${hacker}`);
let hacker2 = 'Hernandez';
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker.length} chars`)
}
else if (hacker.length<hacker2.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} chars`)
}
else{
  console.log(`Wow! you both have eqyualy long names, ${hacker.length} chars`)
}
// Iteration 3: Loops
let newString ="";
for (let i = 0; i < hacker.length; i++){
  newString += hacker[i] + " ";
}
console.log(`${newString.toUpperCase()} `);

//Print the navis name in reverse order
let anotherString = '';
for (let j = hacker2.length-1 ; j >= 0; j--){
  anotherString += hacker2[j];
} 
console.log(anotherString);

//Print 
if(hacker>hacker2){
  console.log(`The name ${hacker2} comes first in the dictionary`);
}
else if(hacker2>hacker){
  console.log(`The name ${hacker} comes first in the dictionary`)
}
else {console.log(`The names are equal`)} 

//Loem ipsum
let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis nibh nec neque laoreet volutpat. Pellentesque suscipit consectetur ante, eget molestie dolor vehicula vel. Morbi molestie rhoncus mi quis efficitur. Nunc blandit nulla in vulputate consectetur. Cras vitae tellus non justo rhoncus malesuada vel eu sem. Aliquam in sollicitudin leo, quis faucibus massa. Nullam nec ipsum non velit pharetra porttitor ac eget quam. Fusce scelerisque dui et tortor maximus tincidunt. Proin id pharetra magna, accumsan luctus erat. Curabitur ultricies molestie orci, nec auctor purus lobortis vitae. Integer elit sapien, scelerisque iaculis pharetra in, sollicitudin non justo. Integer ultrices odio neque, sit amet commodo nibh tristique sit amet. Aliquam molestie condimentum aliquet. Donec condimentum tincidunt eleifend. Nullam volutpat eget purus in scelerisque. Nulla sagittis vel neque ut tempor. Vivamus nec massa velit. Fusce varius lobortis dolor sed pulvinar. Vivamus rutrum lorem a porttitor tempus. Integer tincidunt sodales arcu, a blandit justo interdum vel. Vestibulum tempus sapien sit amet orci condimentum cursus. Proin velit metus, ultricies sed augue quis, aliquet aliquam urna. Nam vulputate et quam eu laoreet. Suspendisse eu mattis libero. Donec quis iaculis felis. Fusce elit libero, semper in nulla sit amet, scelerisque ullamcorper magna. Aenean at dui a urna blandit finibus sit amet pulvinar ipsum. Morbi libero nulla, condimentum ac sem sed, aliquam dignissim tortor. Curabitur mi libero, gravida ac congue ac, imperdiet posuere nunc. Etiam orci elit, convallis at ligula non, fringilla vulputate massa. Curabitur dignissim massa ut neque rutrum sollicitudin. In in augue fringilla, fermentum est eu, ullamcorper libero. Fusce eu purus sit amet magna rhoncus molestie. Suspendisse egestas ultricies mi, et accumsan ante pretium at. Sed pulvinar purus augue, mattis feugiat massa gravida vel. Nam vel dignissim turpis. Integer vitae porttitor ante, ut dapibus leo. Donec volutpat dignissim nibh in mollis. Proin cursus vehicula lectus, sed placerat orci placerat ut. Quisque at sapien sed elit dictum tempor a nec tellus. Aenean a mi vulputate, ullamcorper eros eu, imperdiet quam. Duis in nibh lacus. Sed dapibus ex sed erat elementum tincidunt. Nulla congue faucibus fringilla. Etiam vitae mi elementum, ornare justo at, tincidunt eros. Quisque eget felis nisi.`

let wordCounter = 0;
let etCounter = 0; 
for(let counter = 0; counter < paragraph.length; counter++){
  if(paragraph[counter] == " "){
    wordCounter+=1;
  }
  if((paragraph[counter-1]== " " || paragraph[counter-1] == "") && (paragraph[counter]== "e" || paragraph[counter]== "E") && (paragraph[counter+1]=="t" || paragraph[counter+1]=="T") && (paragraph[counter+2]== "" || paragraph[counter+2] == " ")){
    etCounter += 1; 
  }
}
console.log(wordCounter);
console.log(etCounter);

//Phrase to Check if Palindrome
let phraseToCheck="Was it a car or a cat I saw?";
//Eliminate spaces from phraseToCheck
let phraseNoSpaces="";
for(let x = 0; x < phraseToCheck.length; x++){
  if(phraseToCheck[x]== " " || phraseToCheck[x]== "," || phraseToCheck[x] == "!" || phraseToCheck[x] == '?'){
    continue;
  };
  phraseNoSpaces += phraseToCheck[x];
}``
phraseNoSpaces = phraseNoSpaces.toLowerCase()
//Turn sideways from new created string
let phraseSideWays = "";
for(let z = phraseNoSpaces.length-1; z >= 0; z--){
  phraseSideWays += phraseNoSpaces[z];
}
//Compare phrase no spaces and phrase sideways
if(phraseNoSpaces == phraseSideWays){
  console.log(`the phrase ${phraseToCheck} is a palindrome!`);
}
else {console.log(`Definetly not a palindrome!`)};
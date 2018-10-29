
/*
Create a variable hacker1 with the driver's name

Print "The driver's name is XXXX"

Create a variable hacker2 and ask the user for the navigator's name

Print "The navigator's name is YYYY"
*/
const hacker1 = "Miller";
console.log("The drive name is ", hacker1);
const hacker2 = prompt("Enter the navigator's name: ");
console.log("The navigator's name is ", hacker2);

//Depending on which name is longer, print:

const hacker1Length = hacker1.length, hacker2Length = hacker2.length;
let shortestString = '';


if(hacker1Length === hacker2Length){
console.log('wow, you both got equally long names,',hacker1Length ,'characters!!');
shortestString = hacker1;
}
else{
if(hacker1Length > hacker2Length){
console.log('The Driver has the longest name, it has',hacker1Length, 'characters');
shortestString = hacker1;
}
else{
console.log('Yo, navigator got the longest name, it has ',hacker2Length, 'characters');
shortestString = hacker2;
}
}

/*

Loops
Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

*/

const hacker1Capitals = hacker1.toUpperCase();
let hacker1Chars = "";

for(let i=0; i<hacker1Length; i++)
{
  hacker1Chars += hacker1Capitals[i] + ' ';
}
console.log(hacker1Chars.trim());

//Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
let hacker2Reversed = "";

for(let i=hacker2Length-1; i > -1; i--)
{
  hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);

//Depending on the lexicographic order of the strings, print:
let comparisonResult = '';

for (let i=0; i<shortestString.length; i++){
  if(hacker1[i] < hacker2[i])
  {
    comparisonResult = "The driver's name goes first";
    break;
  }
  else if(hacker1[i] > hacker2[i])
  {
    comparisonResult = "Yo, the navigator goes first definitely";
    break;
  }
    else
      comparisonResult = "What?! You both got the same name?";
}

console.log(comparisonResult);

// Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:

// "A man, a plan, a canal, Panama"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" 
// "No 'x' in Nixon".

const userString = prompt("Please enter a string").toLocaleLowerCase();
const userStringLength = userString.length;

for(let i = 0, j = userStringLength -1; i <= userStringLength/2; i++, j--){
  while(userString[i] === ' ' || userString[i] === '?' || userString[i] === "'" || userString[i] === ','|| userString[i] === '!')i++;

  while(userString[j] === ' ' || userString[j] === '?' || userString[j] === "'" || userString[j] === ','|| userString[j] === '!')j--;

  console.log('i, j', i, j, userStringLength/2);
  if(userString[i] !== userString[j])
  {
    console.log('Not a palindrome');
    break;
  }
  else if(i >= Math.floor(userStringLength/2))
  {
    console.log('A palindrome');    
  }
}

// Go to lorem ipsum generator and:

// Generate 3 parragraphs. Store the text in a String
// Make your program count the number of words in the string
// Make your program count the number of times the latin word et appears

const lorenString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis nunc sed id. Vitae suscipit tellus mauris a diam maecenas. Congue quisque egestas diam in arcu. Mi eget mauris pharetra et ultrices neque. Pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor nec feugiat nisl pretium. Cras tincidunt lobortis feugiat vivamus at. Euismod quis viverra nibh cras. Viverra nam libero justo laoreet sit amet cursus sit amet. Velit ut tortor pretium viverra. Dapibus ultrices in iaculis nunc sed augue lacus viverra.

Pretium fusce id velit ut. In nibh mauris cursus mattis molestie a iaculis at. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Cursus euismod quis viverra nibh cras. Elit ut aliquam purus sit. Netus et malesuada fames ac turpis egestas. Turpis egestas pretium aenean pharetra magna ac placerat. Etiam sit amet nisl purus in mollis. Eu volutpat odio facilisis mauris sit amet. Urna et pharetra pharetra massa massa ultricies. Et ultrices neque ornare aenean euismod elementum nisi. Cras ornare arcu dui vivamus arcu felis bibendum ut. Velit laoreet id donec ultrices. Amet mauris commodo quis imperdiet. Consequat interdum varius sit amet. Ullamcorper sit amet risus nullam eget felis eget. Justo donec enim diam vulputate ut pharetra sit amet. Vestibulum morbi blandit cursus risus at.

Tempor orci dapibus ultrices in iaculis nunc sed augue. Risus nec feugiat in fermentum posuere urna. Faucibus turpis in eu mi bibendum neque egestas congue. Nisi lacus sed viverra tellus in. Mollis aliquam ut porttitor leo a diam sollicitudin. Gravida dictum fusce ut placerat. Et odio pellentesque diam volutpat commodo sed egestas. Ac odio tempor orci dapibus ultrices. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Tortor id aliquet lectus proin nibh nisl condimentum id. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Habitasse platea dictumst quisque sagittis. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Leo in vitae turpis massa sed elementum. Tortor at risus viverra adipiscing at in tellus integer feugiat. Mus mauris vitae ultricies leo integer malesuada. Faucibus interdum posuere lorem ipsum dolor sit. Condimentum vitae sapien pellentesque habitant morbi.`

let wordCounter = 0, etCounter = 0;
for(let i=0; i < lorenString.length; i++){
  if(lorenString[i] === ' ')wordCounter++;
  if(lorenString[i] === 'e' && lorenString[i+1]==='t' && i < lorenString.length - 1)etCounter++;
}

console.log('NUMBER OF WORDS = ', wordCounter, 'NUMBER OF ET = ', etCounter);


// Iteration 1: Names and Input & 2.Conditionals //

console.log("I'm ready!");

const hacker1 = "John" 
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "AliceChoi"
console.log(`The navigator's name is ${hacker2}`);


const varone = hacker1.length;
const vartwo = hacker2.length;


if (varone >vartwo) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (varone < vartwo) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (varone === vartwo) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

//Iteration 3: Loops//

let newStringOne ="";

for (let i=0; i<hacker1.length; i++) {
    newStringOne+=hacker1[i]+" "  
  }
console.log (newStringOne);

let newString="";

for (let i = hacker2.length - 1; i >= 0; i--) {
        newString += hacker2[i];
    }

console.log(newString);

if (hacker1.localeCompare(hacker2) ===-1) {
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) ===1) {
  console.log("Yo, the navigator goes first, definitely")
} else if (hacker1.localeCompare(hacker2) ===0) {
  console.log("What?! You both have the same name?")
}

//Bonus 1//
const longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dignissim libero, ac faucibus mauris. Cras maximus tellus ac sapien iaculis, non vehicula mi sollicitudin. Vestibulum tempus urna in quam ornare, quis interdum dolor tempus. Sed viverra nisi quis accumsan suscipit. Maecenas lectus dui, porta a euismod ut, interdum sed erat. Cras vitae eros vitae ante congue congue. Aliquam vulputate, enim sit amet accumsan facilisis, risus metus vulputate metus, et ullamcorper dolor nisl eu neque. Duis a leo tortor. Nullam ut erat a velit rutrum egestas. Integer quis lorem eget dui fermentum aliquet non eget sem. Phasellus convallis in sem sed fermentum. Nam ullamcorper sagittis imperdiet. Praesent quis urna ac ligula tristique congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tincidunt massa. In vulputate, odio id rutrum sollicitudin, eros est semper dui, sit amet efficitur nulla sem non tortor. Nam commodo rutrum fringilla. Maecenas sollicitudin tortor ac rhoncus hendrerit. In tempor tristique velit, id feugiat purus pellentesque id. Etiam eu urna et nunc vehicula rhoncus in vitae nisi. Donec scelerisque lorem lorem. Aenean id nibh nec dolor imperdiet tincidunt.Proin pellentesque quis orci suscipit tempus. Praesent vitae quam porta dolor mollis molestie. Ut vulputate libero a arcu rhoncus, et imperdiet lectus aliquet. Fusce nec arcu dictum, mollis libero nec, commodo neque. Proin elementum mi ligula, in pulvinar sapien euismod eget. Aliquam velit ligula, fermentum et sapien vel, auctor lacinia mi. Nullam tincidunt nisi in nisi eleifend, vitae mollis massa vulputate. Nulla vestibulum metus eget ante maximus, vitae sodales libero tincidunt. Integer non aliquam leo, ac lacinia nunc."

let wordCount = 0;

for (i=0; i<longText.length; i++) {
  const wordCounter = longText[i];
  
  if (wordCounter.includes(" ")) {
    wordCount++;
  } 
   }


console.log(wordCount +1);
//+1 means last "." (because there is no space at the end!) //

//Bonus 2//
const phrasetoCheck="Alice in wonderland";

if (phrasetoCheck[0]!==phrasetoCheck[phrasetoCheck.length-1]){
console.log("This is not a Palindrome!");
} else {
  console.log("This is a Palindrome!");
} 




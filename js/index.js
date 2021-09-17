// Iteration 1: Names and Input
const hacker1 = "tomas";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "joana";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

const driver = "Karla";
const navigator = "Philipp";


if(driver.length > navigator.length) {
  console.log(`The driver has the longest name, it has ${driver.length} characters`);
} else if (driver.length < navigator.length) {
  console.log(`The navigator has the longest name, it has ${navigator.length} characters`);
} else {
  console.log(`The both are equally long names, ${driver.length} characters`);
}

//Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverToCapital = "";
for(char of driver) {
  driverToCapital += `${char.toUpperCase()} `;
}
console.log(driverToCapital);
//K A R L A 

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
function getToReverse(name) {
  let reverse = "";
  let lastChar = name.length -1;
  for (let i = lastChar; i >= 0 ; i--) {
    reverse += `${name[i]}`;
  }
  console.log(reverse);
}
getToReverse(navigator);
//ppilihP

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Times to iterate, based on the smaller number of characters
function lexicographicOrder(driver, navigator) {
  const iterations = Math.min(driver.length, navigator.length);
  let driverCounter = 0;
  let navCounter = 0;

  for (let i = 0; i < iterations; i++) {
    if (driver[i].localeCompare(navigator[i]) < 0) {
      driverCounter +=1;
      if(driverCounter > navCounter) {
        console.log(`${driver}, the driver goes first`);
        break; 
      }       
    } else if (driver[i].localeCompare(navigator[i]) > 0 ) {
      navCounter +=1;
      if(navCounter > driverCounter) {
        console.log(`${navigator}, the navigator goes first definitely.`);
        break;
      }
    } else {
      driverCounter +=1;
      navCounter +=1;
      if(i === iterations-1){
        if (driver.length < navigator.length) {
          console.log(`${driver}, the driver goes first`);
        } else if(navigator.length > driver.length) {
          console.log(`${navigator}, the navigator goes first definitely.`);
        } else {
          console.log(`What?! You both have the same name?`);
        }
        break;
      }
    }
  }
}
lexicographicOrder(driver, navigator);
// Karla, the driver goes first


// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id purus sit amet nunc lobortis semper. Aliquam quis velit vel lectus aliquet sodales. Mauris interdum lobortis mauris accumsan sollicitudin. Nullam vel fringilla tortor. Pellentesque eu bibendum lorem. Cras porttitor tempus hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed mollis tincidunt enim, non placerat diam fermentum sed. Cras arcu elit, condimentum nec erat at, sollicitudin pharetra ante. Etiam pulvinar pretium felis, dapibus rhoncus odio ornare sed. Aliquam erat volutpat. Ut cursus, dui eget venenatis suscipit, neque nisi porta tellus, non viverra lectus leo ut diam. Etiam molestie, erat non molestie egestas, lectus lectus condimentum risus, in placerat risus dui vel est.
Nunc id aliquam sem, sit amet tristique elit. In hac habitasse platea dictumst. Quisque ultricies bibendum magna, in suscipit nunc. Fusce hendrerit vitae urna pellentesque elementum. Sed blandit fringilla purus, et auctor lorem cursus ut. Nunc lobortis lobortis dui eu facilisis. Proin pretium ligula a augue iaculis, luctus venenatis justo fringilla. Etiam eget nulla sem. Vestibulum quis metus id diam rhoncus pulvinar. Morbi suscipit molestie imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Vestibulum hendrerit ut est id egestas. Fusce lobortis lacinia faucibus. Nulla sit amet justo et lacus rhoncus dictum. Donec non arcu rhoncus, pretium lorem at, luctus odio. Etiam mi tortor, scelerisque vel nibh quis, molestie rhoncus odio. Etiam vulputate neque ac magna imperdiet, quis accumsan dui condimentum. Praesent finibus erat nisi, nec iaculis turpis condimentum vel. Maecenas eget feugiat erat, cursus luctus leo.";


function countWords(text) {
  let wordsArr = text.split(" ")
  let words = wordsArr.length;
  let counter = 0;
  console.log(words);
  
  for(let i = 0; i < wordsArr.length; i++) {
    if(wordsArr[i].includes('et')) {
      counter +=1;
    }
  }
  console.log(counter);
  return `This paragraph has: ${words} words, and includes the Latin word 'et': ${counter} times`;
}


// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. 
// Write a code that will check if the value we assigned to this variable is a 
// Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
//Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 😃

function checkPalindrome(words) {
  let phraseToCheck =  words.toLowerCase();
  //console.log(phraseToCheck);
  let validString = typeof words === "string";
  if (validString) {
    //console.log(`It's a string`);
    let wordsNoSpace = "";
    let wordsReverse = "";
    for (let i = 0; i < phraseToCheck.length; i ++) {
      //console.log(phraseToCheck[i]);
      let notValid = phraseToCheck[i] === " " || phraseToCheck[i] === "," 
                  || phraseToCheck[i] === "."
                  || phraseToCheck[i] === "!"
                  || phraseToCheck[i] === "?"
                  || phraseToCheck[i] === '"'
                  || phraseToCheck[i] === "'";
      if (!notValid) {
        wordsNoSpace += phraseToCheck[i];
      }
    }
    //console.log(wordsNoSpace);
    let iterations = wordsNoSpace.length;
    let halfIterations = Math.round(iterations/2);
    //console.log(Math.round(iterations/2))
    let counterSameChar = 0;
    //console.log(iterations)
    for (let i = 0; i < halfIterations; i ++) {
      let last = iterations-1;
      last -= i;
      //console.log(last)
      //console.log(i);
      //console.log(`word1: ${wordsNoSpace[i]}`);
      //console.log(`word2: ${wordsNoSpace[last]}`);
      if (wordsNoSpace[i].localeCompare(wordsNoSpace[last]) === 0 ) {
        counterSameChar +=1;
        //console.log(`counter: ${counterSameChar}`);
        if(halfIterations === counterSameChar){
          console.log(`It's a Palindrome!!!`);
        }
      } else {
        console.log('Not a Palindrome!')
        break;
      }
    }
  }
}
checkPalindrome("put it up");
//They are the same!!!




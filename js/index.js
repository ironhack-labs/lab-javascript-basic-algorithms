// Iteration 1: Names and Input

//Driver
const hacker1 = "Fernando"; 
console.log(`The driver's name is ${hacker1}`);

//Navigator
const hacker2 = "Breogán";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, {hacker1.length()} characters!`)
}



// Iteration 3: Loops

/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

let newName = "";
for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase() + " "
}

console.log("3.1.: ", newName)

/*
3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/

function reverseString(str) {
    return str.split('').reverse( ).join('');
}

console.log("3.2.: ", reverseString(hacker1));

/*
3.3 Depending on the lexicographic ox5rder of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

if (hacker1.localeCompare(hacker2)) {
  console.log(`3.3.: The driver's name goes first.`)
} else if (hacker2.localeCompare(hacker1)) {
console.log(`3.3.: Yo, the navigator goes first definitely.`)
} else {
  console.log("3.3.: What?! You both have the same name?")
}

/*Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/


const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus velit diam, tempor id feugiat et, porttitor a risus. Nam eu elit in sem tempor vestibulum. Sed euismod vestibulum lorem, eu bibendum mi bibendum sed. Suspendisse posuere leo lectus, vel semper turpis fermentum vel. Nulla ullamcorper neque nec fringilla lobortis. Nullam a maximus dui. Morbi urna nulla, viverra nec varius et, mollis eget ante. Quisque et mattis justo. Nullam quam erat, lobortis sollicitudin laoreet eu, volutpat sed sapien. Donec pulvinar dictum mi, id malesuada libero accumsan ac. In id lectus sit amet nisl luctus facilisis. Pellentesque ullamcorper erat vel turpis blandit dignissim. Aenean porttitor ac erat non viverra. Praesent in ante nec arcu viverra porta sit amet eu nibh. Vivamus id dapibus sem, in dictum leo.

Quisque dictum elit non ligula euismod facilisis. Vestibulum sed gravida odio. Nullam vel imperdiet dui. Ut nisi turpis, semper vitae dui et, suscipit rhoncus nibh. Donec vestibulum leo vitae eros auctor facilisis. Sed feugiat, purus vel eleifend finibus, massa odio varius lectus, et egestas diam sapien a sapien. Curabitur ac ante erat. Sed interdum, metus vitae rutrum consectetur, quam nibh pharetra nunc, quis placerat velit nulla at arcu. Cras cursus gravida posuere. Aenean id convallis nunc. Praesent porta iaculis sapien, eget blandit sem ullamcorper ultrices. Vestibulum tincidunt aliquet quam, ut finibus dolor convallis vel. Duis pellentesque sapien a dui faucibus pretium.

Proin elementum felis vel mauris convallis dignissim. Maecenas condimentum neque quis erat malesuada, a fringilla sapien aliquam. Cras ligula nunc, pulvinar in laoreet vel, dictum ac tellus. Phasellus ut est auctor, finibus sapien ac, venenatis lacus. Morbi gravida lacus velit, id posuere ligula bibendum et. Donec eleifend viverra velit, sed eleifend magna ultricies eu. Nam augue ante, laoreet in elit sit amet, fermentum tristique dolor. Vivamus quis dapibus metus. Quisque dictum, lacus eu convallis gravida, nibh mauris commodo urna, eu finibus lectus mauris nec augue. Nam vitae dolor lacus. Suspendisse orci neque, suscipit vitae porttitor non, dapibus ut purus. Proin ultricies quam vel felis facilisis commodo. Cras malesuada purus nisl, pulvinar mollis diam imperdiet in.`

let numberOfWords = paragraphs.split(" ")
console.log("Number of words: ", numberOfWords.length)


let numberOfOcurrances = 0;
for (i = 0; i < numberOfWords.length; i++) {
  if (numberOfWords[i] === "et") {
    numberOfOcurrances += 1
  }
}

console.log("Number of et: ", numberOfOcurrances)

/*Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:*/


function phraseToCheck (aString) {
  if (hacker1.localeCompare(hacker2.split("").reverse().join())) {
    return true
  }
    else {
      return false
    }
  }

phraseToCheck ("hola")


function palindromeCheck (aString) {
  let reversedString = "";
  
  for (let i = aString.length; i > 0; i--) {
    reversedString += aString[i]
  }
  console.log(aString, reversedString)
  if (aString.toLowerCase() === reversedString.toLowerCase()) {
    return true
  } else {
    return false
  }
}

palindromeCheck ("amor")
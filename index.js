// Iteration 1: Names and Input
let hacker1 = "Brandon";
let hacker2 ="Alejandra"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

// Iteration 3.1 CAPS separated by space


hacker1 = hacker1.toUpperCase();

const lastIndex = hacker1.length - 1;
let newName = "";

for (let i = 0; i <= lastIndex; i++) {
  newName = newName + " " + hacker1[i];
}

console.log(newName);

// Iteration 3.2 Reverse order
let hacker2Reversed = "";

for (let i = hacker2.length-1; i>=0; i--) {
  hacker2Reversed = hacker2Reversed + hacker2[i]
}

console.log(hacker2Reversed);

// Iteration 3.3 Lexicographic order
let result = hacker1.localeCompare(hacker2);

if (result < 0) {
  console.log("The driver's name goes first.");
  
} else if (result > 0) {
  console.log("Yo, the navigator goes first definitely.");
}
else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem odio, congue et tortor id, imperdiet bibendum dolor. Etiam ut imperdiet ex. Sed lacinia ullamcorper arcu, non fringilla mauris tempus vitae. Vivamus consectetur justo ut condimentum rutrum. Ut vel urna id ante semper cursus. Quisque eu eleifend ligula. Nunc tortor diam, rutrum in mattis id, tristique euismod ligula. Maecenas viverra ex ac viverra venenatis.

Nullam feugiat leo quis accumsan sagittis. In malesuada rhoncus justo. Aliquam id massa ante. Fusce maximus gravida purus, at vestibulum magna feugiat eget. Aliquam interdum odio sit amet lectus scelerisque, nec pulvinar ex convallis. Nam vel purus magna. Etiam vitae nisl ante. Aenean a lorem ut libero aliquam semper ultrices sed sem. Proin mollis eros quam, id tempus sapien bibendum id. In ultrices, tortor sed cursus sagittis, lorem erat vestibulum urna, in dapibus massa tellus at metus. Aliquam ac metus ligula. Quisque luctus urna metus, vel elementum lorem iaculis eu. Proin sed turpis condimentum, sodales nulla in, semper nulla. Nullam vitae tempor velit.

Cras elit erat, mattis auctor odio at, fermentum tincidunt massa. Nam faucibus gravida eros vitae maximus. Cras odio massa, blandit at ornare vitae, sollicitudin non nibh. Duis vel interdum nunc. Suspendisse tristique at justo vel mollis. Curabitur vestibulum convallis lobortis. Fusce nibh erat, tempor et lacus a, sodales sollicitudin orci. Aliquam mattis accumsan maximus. Nullam nunc nunc, condimentum nec enim pellentesque, auctor lacinia orci. Nunc justo sapien, posuere eu dictum egestas, gravida vitae turpis. In tempus tempor orci at viverra. Pellentesque et volutpat sem, vitae ultricies ante. Aenean finibus hendrerit rhoncus.`

const myArray = longText.split(" ");

console.log(myArray.length);

// count the number of times the Latin word et appears 
let count = 0;

for (let i = 0; i < longText.length; i++) {
  const twoChars = longText[i] + longText[i + 1];
  
  if ( twoChars === "et" ) {
    count++;
  }
}
console.log(count);


//Bonus 2

let phraseToCheck = "taco cat"
phraseToCheck = phraseToCheck.split(' ').join('');

console.log(phraseToCheck);


const reversedString = phraseToCheck.split('').reverse().join('');
console.log(reversedString);

if (phraseToCheck === reversedString){
  console.log("It's a Palindrome");
}
else{
  console.log("Not a Palindrome");
}

// Iteration 1: Names and Input
let hacker1 = 'Luis I';
let hacker2 = 'Luis C';
let hacker3 = 'MacKenzie';

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name. It has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`${hacker2} has the longest name. It has ${hacker2.length} characters.`);
  } else {
    console.log(`You both have equally long names. You have ${hacker2.length} characters.`);
  }

// Iteration 3: Loops
let driver = "";

for (let i = 0; i < hacker3.length; i++) {
  driver += hacker3[i] + " ";
}
console.log(driver.toUpperCase());


let navigator = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigator += hacker2[i] + " "; 
}
console.log(navigator); 

if (hacker1.localeCompare(hacker3) === -1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker3) === 1) {
  console.log("The navigator goes first definitely.");
} else {
  console.log("What? You both have the same name?");
}

// BONUS 1:

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque sapien ac neque suscipit, nec fringilla orci facilisis. Sed a quam in velit suscipit feugiat. Praesent porta euismod metus, egestas dictum tellus porta eget. Donec velit augue, elementum quis eleifend vel, volutpat id ipsum. Mauris in ultricies lectus. Donec molestie sollicitudin felis a rhoncus. Sed dictum eget augue quis egestas. Sed elementum nulla eget mauris rutrum dapibus. Curabitur posuere tortor eget lorem condimentum venenatis eu eget metus. Mauris dapibus turpis id dignissim viverra. Nulla placerat est at dignissim convallis. Proin auctor iaculis facilisis. Integer placerat tempus faucibus. Cras egestas, leo in ornare aliquam, elit quam vulputate neque, ut faucibus urna velit ac ligula. Donec vitae porttitor diam. Phasellus non placerat nisi. Duis imperdiet suscipit lacus elementum viverra. Nunc elit lorem, lobortis nec interdum nec, placerat quis dolor. Integer quis nulla gravida enim finibus blandit. Maecenas et aliquam diam. Morbi tristique, purus ac faucibus vulputate, velit dui congue quam, ac laoreet ligula elit vitae felis. Proin vel augue consectetur, imperdiet sapien non, dictum massa. Praesent dignissim enim vitae facilisis eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius sapien arcu. Quisque a porttitor mauris. In sit amet magna sit amet lectus consequat tincidunt eu ut justo. Aliquam dictum sem id nulla molestie pellentesque. Proin tristique tortor id nunc molestie, nec lacinia est porta. Quisque a venenatis ex. Fusce venenatis nisl at malesuada tristique. Quisque ipsum enim, feugiat quis pretium eu, accumsan at magna. Pellentesque sit amet pulvinar enim. Curabitur laoreet nisl nulla, in mollis ligula venenatis ac. Quisque et suscipit nibh. Suspendisse eget nunc vestibulum, auctor neque in, mattis eros."



console.log(longText.split(" ").length);

let count = longText.match(/et/g).length;
console.log(count);



//BONUS 2: 

// let phraseToCheck = prompt("Type Word Here");

let phraseToCheck = "race car";
let phraseReverse = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  phraseReverse = phraseReverse + phraseToCheck[i];
} 

// console.log(phraseReverse.split(" ").join(""));

if (phraseToCheck.split(" ").join("") === phraseReverse.split(" ").join("")) {
  console.log("It is a Palindrome!")
} else {
  console.log("It is not a Palindrome!")
}
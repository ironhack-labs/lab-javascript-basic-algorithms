// Iteration 1: Names and Input

let hacker1 = "Daniela";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "car";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ` + hacker1.length + ` characters.`);
  } else if (hacker1.length < hacker2.length){
    console.log(`Yo, navigator got the longest name, it has` + hacker2.length + `characters.`);
  } else {
    console.log(`Wow, you both got equally long names,` + hacker1.length + `characters!`);
  }


// Iteration 3: Loops

//3.1
console.log(hacker1.toUpperCase().split("").join(" "));
//3.2
console.log(hacker2.split("").reverse().join());
//3.3
if (hacker1 === hacker2) {
  console.log ("What?! You both got the same name?");
  } else if (hacker1 > hacker2){
    console.log ("The driver's name goes first.");
  } else {
    console.log ("Yo, the navigator goes first definitely.");
}

// BONUS 1
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nisi vitae erat varius elementum eget id magna. Vivamus id feugiat metus. Integer sed nibh vel nisi malesuada sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus fermentum enim urna, at tempus diam fringilla vitae. Vestibulum nec tempor felis. Ut at velit sit amet odio accumsan tristique vitae et lorem. Suspendisse tincidunt nec mauris eget fringilla. Nullam egestas, libero eget ullamcorper finibus, tortor diam finibus nunc, at lacinia tellus orci id lorem. Suspendisse tincidunt nibh vel ligula pellentesque malesuada in vitae lorem. Vestibulum vehicula ultrices sapien, non tristique nulla aliquam sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis porttitor lacinia. Donec nec arcu non tellus vestibulum rutrum vel id mauris. In luctus velit tortor, sed pretium justo ultricies imperdiet. Suspendisse sed convallis dolor. Praesent pulvinar cursus justo. Proin consectetur orci non rhoncus varius. Fusce in nisi nulla. Sed quis quam gravida, commodo tortor sit amet, egestas turpis. Donec fermentum elementum nulla, eget dapibus tellus rutrum ultrices. Aliquam fermentum dui a sem aliquam egestas. Sed consectetur molestie lectus, vitae varius felis finibus eget. Maecenas dignissim cursus diam sit amet fermentum. Suspendisse et sem libero. Cras posuere libero turpis, non lacinia nulla lobortis eget. Fusce vel velit velit. Maecenas in ligula euismod, malesuada erat ultrices, pretium turpis. Vestibulum suscipit posuere imperdiet. Donec quis tincidunt arcu, id ullamcorper ex. Donec semper semper neque in vulputate. In congue sem metus, in auctor nisi mattis non. Vestibulum varius, quam quis eleifend faucibus, libero mi consectetur arcu, et tincidunt ligula purus in sem. Proin aliquam imperdiet magna non ornare. Suspendisse id placerat augue. Quisque lorem risus, efficitur quis ultricies quis, sollicitudin sodales dolor. Nulla eleifend interdum justo, sed feugiat augue pharetra id. Morbi et tellus purus. Etiam cursus ultrices venenatis. Etiam sit amet porta velit. Curabitur et purus interdum, elementum ipsum non, luctus enim. Pellentesque vel egestas neque. Nullam vitae pellentesque nunc."

const words = lorem.toLowerCase().split(" ");
console.log(words.length);


let count = 0;

for (word of words) {
  if (word === 'et') {
    count++;
  } else if (word.indexOf('et') === 0) {
    let followingCharacter = word.charAt(2);
    if (followingCharacter === followingCharacter.toUpperCase()) {
      count++;
    }
  }
}
console.log(count);

//BONUS 2

let answer = prompt('ask');
answer = answer.toLowerCase().replace(/[^0-9a-z]/g, '')

const reverse = answer.split('').reverse().join('');


console.log("Is it a Palindrome?", answer === reverse)
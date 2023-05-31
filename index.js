console.log("I'm ready!");

// Iteration 1
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2
if (hacker1.lenght > hacker2.lenght) {
  console.log(
    `The driver has the longest name, it has ${hacker1.lenght} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3
let name = "";
for (let i = 0; i < hacker1.length; i++) {
  let char = hacker1[i].toUpperCase();
  name += char + " ";
}

console.log(name);

let name2 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  name2 += hacker1[i];
}
console.log(name2);

const nameOrder = hacker1.localeCompare(hacker2);

if (nameOrder < 0) {
  console.log(`The driver's name goes first`);
} else if (nameOrder > 0) {
  console.log(`Yo, the navigator goes first, definitely`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus urna, rutrum sed euismod et, ultricies quis nibh. Ut non ante sed ex varius venenatis nec vel velit. Praesent non libero eros. Nunc eget eros vel turpis porta congue eget ut justo. Nullam euismod, metus ut sagittis interdum, felis mauris dictum metus, quis ultricies velit dolor quis metus. Proin sed consectetur sem, et elementum felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean in ullamcorper elit. Curabitur eleifend urna eu leo sodales finibus. Maecenas posuere, nulla mollis tincidunt venenatis, purus mauris dignissim arcu, vel lacinia odio sapien a felis. Fusce tristique blandit tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam vulputate et sem ut laoreet. Vestibulum laoreet lacinia est eget imperdiet. Pellentesque massa dolor, consequat quis metus vel, blandit consectetur orci. Fusce nec tellus et tortor ultrices interdum. Nullam scelerisque enim scelerisque nulla cursus, vel finibus massa egestas. Cras consequat arcu at euismod tempus. Pellentesque tellus nisi, pretium eu urna non, pellentesque sodales elit. Nam ut augue aliquam, aliquet odio ac, bibendum mauris. Proin vitae condimentum ex, sit amet congue ipsum.Fusce et sodales nibh. Maecenas bibendum lorem felis, a eleifend ipsum condimentum et. Nulla facilisi. Ut eu ipsum mollis, sodales erat sit amet, consectetur urna. Quisque erat velit, rhoncus quis ligula quis, sollicitudin scelerisque nisi. Nam sit amet justo vehicula, vestibulum tellus vitae, semper lectus. Vivamus sodales vitae nunc nec lacinia. Vivamus tincidunt sollicitudin est, ac vestibulum tellus vehicula et. Integer vel nulla ac arcu dapibus porttitor eget et arcu. Vestibulum ac ullamcorper lorem. Integer aliquet mi vitae volutpat luctus. Maecenas efficitur enim ac quam pretium, in volutpat augue laoreet. Cras eleifend volutpat fringilla.";

const wordcounter = longText.trim().split(/\s+/).length;

console.log(wordcounter);

let count = 0;

for (i = 0; i < longText.length; i++) {
  if (longText[i] + longText[i + 1] === "et") count++;
}

console.log(count);

// Bonus 2

const phraseCheck = function (phrase) {
  formattedPhrase = phrase.toLowerCase().replace(/\s/g, "");

  for (i = 0; i < formattedPhrase.length / 2; i++) {
    if (
      formattedPhrase[i] !== formattedPhrase[formattedPhrase.length - 1 - i]
    ) {
      return console.log("Not a palindrome");
    }
  }
  return console.log("it's a palindrome");
};

phraseCheck("A man, a plan, a canal, Panama!");
phraseCheck("Amor, Roma");
phraseCheck("race car");
phraseCheck("stack cats");
phraseCheck("step on no pets");
phraseCheck("taco cat");

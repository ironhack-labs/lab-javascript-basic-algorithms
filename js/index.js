// Iteration 1: Names and Input

const hacker1 = "Chris";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Jose";
console.log(`The navigator's name is ${hacker2}.`);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 2: Conditionals

let string = "";
let text;

for (let i = 0; i < hacker1.length; i++) {
  if (i < hacker1.length - 1) {
    text = hacker1[i].toUpperCase() + " ";
  } else {
    text = hacker1[i].toUpperCase();
  }
  string += text;
}
console.log(string);

////

let string2 = "";
let text2;

for (let i = hacker2.length - 1; i >= 0; i--) {
  text2 = hacker2[i];
  string2 += text2;
}
console.log(string2);

// Iteration 3: Loops

let hacker1Lower = hacker1.toLowerCase();
let hacker2Lower = hacker2.toLowerCase();

const exp = hacker1Lower.localeCompare(hacker2Lower);

switch (exp) {
  case -1:
    console.log(`The driver's name goes first.`);
    break;
  case 1:
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  case 0:
    console.log("What?! You both have the same name?");
}

// Bonus 1  

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec leo at velit finibus tincidunt a quis lorem. Suspendisse potenti. Pellentesque sollicitudin, leo non molestie fermentum, ex enim commodo elit, et finibus nulla erat id massa. Nunc dolor felis, ultricies ac mauris sit amet, pellentesque eleifend nisi. Maecenas ligula risus, posuere in maximus vitae, tempus in dui. Ut libero nibh, vulputate eget molestie non, laoreet et nibh. Curabitur sagittis, urna ut tempor laoreet, enim justo dictum metus, at vulputate enim turpis vel dolor. Nunc et lorem dictum, tempor lorem ac, aliquet mauris. Maecenas placerat purus ut nisi volutpat aliquam. Donec egestas vitae diam ut tristique. Curabitur nulla ligula, tempus et euismod ut, pharetra nec tellus. Maecenas eget metus congue, volutpat nisi vel, fermentum elit. Proin convallis velit eu ex sollicitudin dictum. Donec sed tortor ut est tristique euismod ut non diam. Nullam egestas augue non mi tincidunt, bibendum placerat mi consequat. Pellentesque hendrerit, mauris in finibus gravida, nunc tortor rhoncus massa, quis auctor sapien neque non augue. Nulla facilisi. Mauris est erat, porttitor eu suscipit sed, congue eu ex. Mauris vel velit ornare elit sodales venenatis. Sed felis sapien, tristique non maximus et, sodales eget augue. Pellentesque ullamcorper lobortis volutpat. Nulla feugiat, lorem ac ullamcorper sodales, ipsum libero aliquam diam, id posuere leo felis ac nunc. Fusce eu laoreet ante. Vestibulum sollicitudin, nibh vel elementum consectetur, mi tortor sagittis tellus, ut faucibus urna enim nec lorem. Mauris felis neque, vestibulum sit amet dolor faucibus, gravida pellentesque sem. Nulla facilisi. Nam id sagittis velit. Nunc dictum lacinia odio, eget blandit eros lobortis sit amet. Praesent laoreet ligula tortor, sed porta mauris vestibulum ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id massa porttitor, porttitor lectus eu, malesuada libero. Donec ornare molestie tellus, vitae sollicitudin quam rutrum non. Phasellus et consectetur urna. Curabitur rutrum magna sed commodo luctus. Fusce condimentum tellus diam, at elementum dolor dapibus sit amet."

function WordCount(str) { 
  return str.split(" ").length;
}
console.log(WordCount(loremIpsum));

let etCount = 0;

for (i=0; i<loremIpsum.length; i++) {
  if(loremIpsum[i] == " " && loremIpsum[i+1] == "e" && loremIpsum[i+2] == "t" && loremIpsum[i+3] == " ") {
    etCount++
  } else {
    continue
  }
}

console.log(etCount)

// Bonus 2 - phrase to check

// In the example below, we take the string and replace the non-alphabetic characters. We convert it to lowercase. We 'split' the string into words (denoted by by a space) and then join them together again. This in effect removes the space from between them. The result of all this is a 'clean' string that we can use to compare. 

const phraseToCheck = 'A man a plan a canal Panama!';
const joined = phraseToCheck.replace('!', "").toLowerCase().split('').join('');
const isPalindrome = joined === joined.split('').reverse().join('')
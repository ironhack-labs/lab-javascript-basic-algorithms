console.log("I'm Ready!");

// Names and Input
let hackerAllCaps = "";

let hackerReverse = "";

let hacker1 = "Joao";

console.log("The driver's name is " + hacker1);
 
let hacker2 = process.argv[2];
// prompt("What's your name?");

let isPalindrome = process.argv[3];

let isPalindromeReverse = "";

console.log("The navigator's name is " + hacker2)

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

for( let i = 0; i < hacker1.length; i += 1) {
  hackerAllCaps += hacker1[i].toUpperCase() + " ";
}

console.log(hackerAllCaps);

for(let i = hacker1.length - 1; i > -1; i -= 1) {
  hackerReverse += hacker1[i];
}

console.log(hackerReverse);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}
//Bonus Palindrome

for(let i = isPalindrome.length - 1; i > -1; i -= 1) {
  isPalindromeReverse += isPalindrome[i].toLowerCase();
}


if (isPalindromeReverse === isPalindrome.toLowerCase()) {
  console.log("It's a Palindrome");
} else {
  console.log("It's not a Palindrome");
}
// Lorem ipsum generator

let loremParagraphs = ["orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet, comes from a line in section 1.10.32"]
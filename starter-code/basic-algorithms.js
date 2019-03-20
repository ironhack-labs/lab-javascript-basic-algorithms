// Names and Input

var hacker1 = "Yaya";
console.log("The driver's name is " + hacker1);

var name2 = prompt("Enter your name");

alert("The navigator's name is " + name2);

//Conditionals

var Result1 = name2.length;
var Result2 = hacker1.length;
var Result3 = hacker1.length;

if (name2.length > hacker1.length) {
  console.log(
    "The Driver has the longest name, it has " + Result1 + "characters"
  );
} else if (name2.length < hacker1.length) {
  console.log(
    "Yo, navigator got the longest name, it has " + Result2 + " characters"
  );
} else {
  console.log(
    "Wow, you both got equally long names, " + Result3 + " characters!"
  );
}

// Lorem ipsum generator
var name1 = "Yaya";
for (let i = 0; i < name1.length; i++) {
  console.log(name1[i]);
}
var hacker1 = "Yaya";
var array = [];
array = hacker1.split("");

array.reverse();

var name2 = "";
for (let i = 0; i < name2.length; i++) {
  console.log(name2[i]);
}

// lexicographic order alfabede önce geliyorsa 1 sonra geliyorsa -1 aynı yerdelerse 0.!!  örnk a localcompare b--> -1 çünkü a bden önce
var lexicographic = console.log("hacker1".localeCompare("name2"));

if (lexicographic < 0) {
  console.log("The driver´s name goes first");
} else if (lexicographic > 0) {
  console.log("The navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

// Palindrome

var palindrome = prompt("Enter a word and I check it if is Palindrome!");
var array = [];
array = palindrome.split("");

array.reverse();

var palindrome2 = "";

palindrome2 = array.join("");

console.log(palindrome);
console.log(palindrome2);

if (palindrome === palindrome2) {
  alert("It is PALINDROME");
} else alert("Nope it is not a PALINDROME");

// Paragraph thingy : count Number of Letters
var paragraph =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

console.log(paragraph.length);

// paragraph thingy count of words  Not: \W matches anything that is not a latin letter or number or an underscore”
var paragraph =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
console.log(paragraph.split(/\W+/).length);

// count et word

var par =
  "Lorem  et Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var words = par.split("");
var count = 0;
if (words === "et") count++;
console.log(count);

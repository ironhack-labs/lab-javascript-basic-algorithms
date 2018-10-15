// Names and input

var hacker1 = "Mehdi";
console.log("the driver's name is " + hacker1);
var hacker2 = prompt("what is passenger's name ?");
console.log("The navigator name is "  + hacker2);

// Conditionals

if (hacker1.length > hacker2.length) {
  console.log("the driver has the longest name, it has " + hacker1.length + " characters");
}

else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}

else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

// LOOPS

var out = "";
for (var i=0; i<hacker1.length; i++){
  out += (hacker1[i].toUpperCase() + " ");
};
console.log(out);

var out = "";
for (var i=hacker1.length - 1; i>=0; i--){
  out += (hacker1[i]);
};
console.log(out);

// Lexicographic order
var nameArray = [hacker1.toLowerCase(), hacker2.toLowerCase()];
nameArray.sort();

firstName = nameArray[0];
if (hacker2.toLowerCase() == hacker1.toLowerCase()){
  console.log("What?! You both got the same name?");
}
else if (firstName == hacker1.toLowerCase()){
  console.log("The driver's name goes first");
}
else if(firstName == hacker2.toLowerCase()){
  console.log("Yo, the navigator goes first definitely");
}

// BONUS - Palindrome

var word = prompt("Enter any word :");
var tempWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"").toLowerCase();

var newWord = tempWord.split("").reverse().join("");

if (tempWord === newWord) {
  console.log( word + " est un palindrome.");
} else {
  console.log (word + "n'est pas un palindrome.")
}

// BONUS - Lorem

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at justo odio. Aliquam aliquam pretium quam, eget tristique nibh iaculis pellentesque. Nulla placerat cursus mauris, in posuere turpis interdum vitae. Maecenas molestie sem tortor, in sodales metus blandit ut. Proin condimentum lacus sit amet fermentum ultricies. Integer et ipsum sagittis, ullamcorper erat aliquam, commodo sem. Fusce euismod tempor est at mattis. Proin molestie, ex id eleifend faucibus, sem ligula tincidunt ligula, id pharetra sem ipsum id purus. Aenean mollis neque eget quam blandit tristique eget ac quam. Duis magna quam, ultrices in aliquet ac, dictum et lacus. Etiam sem lacus, hendrerit vel mi pharetra, commodo malesuada sapien. Nunc interdum semper urna, viverra pulvinar nisi volutpat eget. Integer blandit sem at justo interdum scelerisque. Pellentesque id vestibulum velit, vel pellentesque dui. Duis sagittis rhoncus felis, sed convallis nisl venenatis vel."

var loremArray = lorem.split(" ");
console.log(loremArray);

lenghtArray = loremArray.length;

console.log("Number of words = " + lenghtArray);
var temp = 0;

for (var i = 0; i < loremArray.length; i++) {
  if (loremArray[i] === "et") {
    temp++;
  }
}

console.log(" 'et' appears " + temp + " times");
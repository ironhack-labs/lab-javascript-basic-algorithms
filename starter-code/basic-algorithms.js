// Names and Input
var hacker1 = "Mario";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("Tell me your name");
console.log("The navigator's name is " + hacker2);

console.log("hola");
//Conditionals
//Exercise 5
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!");
}

//Exercise 6
var nameCapitals = "";
for (var i = 0; i <= hacker1.length - 1; i++) {
  nameCapitals += hacker1[i] + " ";
}
console.log(nameCapitals.toUpperCase());

//Exercise 7
var nameBackwards = "";
for (var i = hacker1.length - 1; i >= 0; i--) {
  nameBackwards += hacker1[i];
}
console.log(nameBackwards);

//Exercise 8
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

//Exercise 9
var word = "A man, a plan, a canal, Panama!",
  palindrome = '',
  word = word.toLowerCase(),
  lower = word.replace(/[^a-zA-Z]/g, "");
console.log("Word = " + word);
for (var i = lower.length - 1; i >= 0; i--) {
  palindrome = palindrome + lower[i];
}
if (lower == palindrome) {
  console.log('The Word is palindrome');
} else {
  console.log('The word is not palindrome');
}

//Exercise 10
var parragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mauris arcu, volutpat ac sodales sed, feugiat eu nibh. Cras varius eros dictum dui ullamcorper, eget tristique ipsum condimentum. Donec eget massa nec orci laoreet cursus. Integer id neque maximus, viverra urna non, egestas erat. Fusce ut lorem vel sem volutpat lobortis. Maecenas cursus ex ipsum, porta venenatis augue porta quis. Maecenas pulvinar, felis in suscipit dignissim, diam quam ullamcorper mauris, quis rhoncus velit justo in ex. Proin sagittis vitae sapien non finibus. Maecenas condimentum turpis nec nunc imperdiet, vel congue dui facilisis. Integer sed purus leo. Vivamus vitae tempor ipsum. Duis egestas dui sit amet ex gravida, in consectetur diam consectetur. Aenean blandit, elit et pretium accumsan, mi purus condimentum orci, vel sollicitudin justo lacus quis lacus. Curabitur et dui quis orci auctor luctus. Nunc hendrerit enim diam, at gravida nisl condimentum at. Fusce at erat sit amet lorem mollis aliquet. In lacinia in lectus at cursus. Mauris accumsan nisi vitae egestas gravida. Proin dapibus mi ex, luctus varius dui tempus id. Etiam at nibh eget risus porttitor pulvinar eget quis est. Vestibulum imperdiet blandit elit sed iaculis. Aliquam malesuada eget enim et finibus. Morbi porta ligula turpis, ac tincidunt dolor luctus mollis. Aenean lorem eros, rutrum nec augue a, pretium gravida magna. Praesent vitae purus porta, volutpat ante vitae, efficitur velit. Donec rhoncus leo quis arcu imperdiet, quis suscipit mi dictum.";

parragraphs = parragraphs.replace(/[.,]/g, "");
console.log(parragraphs);

var countWords = 0;
var wordEt = "";
var countWordsEt = 0;
for (var i = 0; i < parragraphs.length; i++) {
  if (parragraphs[i] === " ") {
    countWords += 1;
  }
  if (i < parragraphs.length - 3) {
    wordEt = parragraphs[i] + parragraphs[i + 1] + parragraphs[i + 2] + parragraphs[i + 3];
    if (wordEt === " et ") {
      countWordsEt += 1;
    }
  }
}
countWords += 1;
console.log("There are " + countWords + " words in all the parragraphs.");
console.log("There are " + countWordsEt + " et words in all the text.");

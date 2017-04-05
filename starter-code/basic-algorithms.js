// Names and Input

var hacker1 = "Kanye";
var hacker2 = prompt("What's your name?", "write your name here");

  // Prevent non capitalized name

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var hacker2Capitalized = capitalizeFirstLetter(hacker2);

   // Print names

console.log("The navigator's name is " + hacker1 + ".");
console.log("The Driver's name is " + hacker2Capitalized + ".");

   // Longest Name

if (hacker1.length > hacker2Capitalized.length) {
  console.log("The navigator has the longest name, it has " + hacker1.length + " character");}
  else if (hacker2Capitalized.length > hacker1.length) {
    console.log("Yo, driver got the longest name, it has " + hacker2Capitalized.length + " characters.");}
   else {console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");}


   // Spaces
   var split = hacker1.split('').join(' ');
   console.log("I split navigator's name: " + split);

   // Reverse
   var reverse = hacker1.split('').reverse().join().replace(/,/g,'');
   console.log("I reversed navigator's name: " + reverse);

   // Lexicographic order conditional

   if (hacker2Capitalized < hacker1) { console.log("The driver's name " + hacker2Capitalized + " goes first");}
    else if (hacker2Capitalized > hacker1) {console.log("Yo, the navigator name " + hacker1 + " goes first definitely.");}
    else {console.log("What?! You both got the same name?");}

// palindrome

var palindrome = prompt("Give me a palindrome!", "write your palindrome here");
console.log("Let's check it!: " + palindrome);

function eliminateMayusAndPuctuation(string) {
  return string.toLowerCase().replace(/[^a-zA-Z]/g,'');
}

var palindromeOK = eliminateMayusAndPuctuation(palindrome);
var palindromeOKReverse = palindromeOK.split("").reverse().join("");

if (palindromeOK === palindromeOKReverse) {
  console.log("Hurray! It's a palindrome!");
} else {console.log("It's not a Palindrome :(");}


// Lorem ipsum generator

var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, orci sit amet sagittis ullamcorper, ex nisi mattis magna, nec mollis orci purus nec libero. Maecenas maximus massa nec sapien fringilla consectetur. Curabitur venenatis nibh diam, ut dictum nisi consequat auctor. Duis ante erat, posuere non pretium non, ultricies nec tellus. Pellentesque pulvinar varius ligula eu rhoncus. Donec ullamcorper fermentum orci sed scelerisque. Donec velit velit, varius vel viverra eu, luctus nec dui. Integer venenatis fermentum mi. Aliquam finibus, ante et congue scelerisque, justo leo posuere arcu, sit amet efficitur arcu nisi quis odio. Vestibulum commodo dignissim odio, at eleifend velit gravida sit amet. Phasellus viverra magna nec interdum dapibus. Nullam nulla nunc, sollicitudin sit amet dolor at, sodales viverra nunc. Etiam nec condimentum felis.";
var splitParagraph = paragraph.split("");

function WordCount(string) {
  return string.split(" ").length;}

console.log("Your text have " + WordCount(paragraph) + " words.");

var howManyTimesInAString = (paragraph.match(/\bet/g) || []).length;
console.log("The word et appears " + howManyTimesInAString + " times in your text.");

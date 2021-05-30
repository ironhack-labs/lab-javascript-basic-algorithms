//Iteration 1
//1.1 Create a variable `hacker1` with the driver's name.
//
var hacker1 = "Ben";
//1.2 Print `"The driver's name is XXXX"`.
//
console.log(`The driver's name is ${hacker1}`);
//1.3 Create a variable `hacker2` with the navigator's name.
//
var hacker2 = "Sarah";
//1.4 Print `"The navigator's name is YYYY"`.
//
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2 - conditionals
//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX //characters. or
//- Wow, you both have equally long names, XX characters!.
console.log(
  `The navigator has the longest name with ${hacker2.length} letters`
);

//Iteration 3 - loops
//3.1 Print all the characters of the driver's name, separated by a space //and in capitals i.e. "J O H N"
//
console.log(`${hacker1.toUpperCase().split("").join(" ")}`);

//3.2 Print all the characters of the navigator's name, in reverse order. //i.e. "nhoJ"
//
var splitHacker = hacker1.split("");
var reversedSplit = splitHacker.reverse();
var joinedReverse = reversedSplit.join("");
console.log(joinedReverse);

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1
//- Go to lorem ipsum generator and:
//- Generate 3 paragraphs. Store the text in a variable type of string.
//- Make your program count the number of words in the string.
//- Make your program count the number of times the Latin word "et" appears.
var ipsemString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum mollis metus sed bibendum. Cras posuere leo eget ex vestibulum facilisis. Cras cursus lacus ac eros egestas pellentesque. Phasellus quis fringilla enim. Suspendisse potenti. Proin tristique arcu eget lacus vestibulum, nec ullamcorper neque eleifend. Pellentesque at ipsum et ex dapibus consequat. Phasellus sagittis sem a sapien porttitor imperdiet. Phasellus et tincidunt magna, vitae congue augue. Maecenas ac augue vel diam blandit placerat. Proin mattis suscipit quam eu blandit. Donec at fermentum urna, at ultricies lectus. Aliquam egestas et nisl non commodo. Praesent condimentum dui et semper sodales. Vivamus vehicula est et dolor fermentum, et bibendum mauris placerat. Etiam diam metus, dapibus quis turpis vitae, tincidunt consequat leo. Duis maximus egestas lectus, sed congue tellus eleifend in. Vestibulum fermentum varius arcu, vel dapibus arcu vestibulum non. Duis non viverra nisi, in bibendum tellus. Vivamus maximus mi metus, et facilisis elit iaculis eget. Aenean pellentesque laoreet arcu, ac maximus nisi facilisis ac. Vestibulum ante justo, lobortis sed turpis vitae, gravida consequat quam. Integer nunc felis, sagittis non eros id, tristique faucibus tellus. Nullam ligula ex, elementum sit amet pellentesque id, facilisis eget nisi. Donec urna purus, fringilla in nisl id, porttitor facilisis nulla. Nulla dui ligula, convallis sed nulla a, dictum posuere mi. Pellentesque varius turpis dapibus, pellentesque sapien a, fringilla erat. Ut eget sem consequat, commodo neque eget, faucibus dui. Nam hendrerit at ligula ut iaculis. Donec accumsan orci quis ipsum mollis efficitur. Quisque tincidunt est quis condimentum pellentesque.";

console.log(ipsemString.length + 1);

countIpsem = ipsemString.match(/et/g).length;
console.log(countIpsem);

//bonus 2
//Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.
var phraseToCheck = "A man, a plane, a canal. Panama.";

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  var len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}
palindrome(phraseToCheck);

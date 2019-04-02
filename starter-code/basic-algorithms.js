//Names and Input
var hacker1 = "Parker";
console.log("The driver's name is " + hacker1);

//var hacker2 = "Anghy"
var hacker2 = prompt("Enter navigator name");
console.log("The navigator's name is " + hacker2);
//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "Driver has longer name, it has " + hacker1.length + " characters."
  );
}

upHacker1 = hacker1.toUpperCase();

var name = "";
for (let i = 0; i < hacker1.length; i++) {
  name += upHacker1[i] + " ";
}
console.log(name);

var splitString = hacker1.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");
console.log(joinArray);

let revName = "";
for (let i = 0; i < hacker1.length; i++) {
  revName += joinArray[i];
}

if (hacker1 == hacker2) {
  console.log("What?! You both got the same name?");
} else {
  for (let i = 0; i < hacker1.length; i++) {
    if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
      console.log("The driver's name goes first");
      break;
    } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
      console.log("The navigator goes first");
      break;
    } else {
      continue;
    }
  }
}

//Palindrome
palindromeChecker("A man, a plan, a canal, Panama!");
function palindromeChecker(string) {
  //remove punctuation
  string = string.toLowerCase();
  string = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  string = string.replace(/ /g, "");

  //reverse it
  var splitString = string.split("");
  var reverseArray = splitString.reverse();
  var newString = reverseArray.join("");
  console.log(newString);

  if (string === newString) {
    console.log("This is a palindrome yes");
  } else {
    console.log("definitely not");
  }
}

// Lorem ipsum generator
var loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa ipsum, pretium at neque eget, vulputate tempor lectus. Duis accumsan, est sit amet auctor tempor, neque ligula elementum leo, eu maximus mauris lectus a neque. Vivamus non posuere nisl. Aenean placerat ornare dui, nec egestas nisi consequat venenatis. Donec id neque non elit vestibulum bibendum et id mauris. Duis rhoncus maximus massa ac molestie. Nulla venenatis urna tellus, condimentum tempor erat pulvinar et. Nullam dui enim, volutpat non nulla et, tincidunt tristique lacus. Ut lacus tortor, venenatis eu dolor ut, rutrum vestibulum tellus. Phasellus blandit lorem libero, in viverra ante tincidunt at. Duis tincidunt metus eget odio ultricies, vitae viverra diam tincidunt. Aliquam erat volutpat. Quisque id massa hendrerit, cursus mi nec, mollis quam. Nam tincidunt et odio eget pharetra.

Sed fringilla, quam non sagittis malesuada, massa odio pharetra erat, vitae aliquet sapien risus et dui. Fusce tempor convallis dui, sit amet dictum mi blandit vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque tincidunt a nunc nec imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis eros eget quam interdum eleifend. Sed lacinia, risus sed tincidunt scelerisque, tortor nibh scelerisque arcu, ut egestas purus augue et odio. Nullam augue massa, finibus ut purus at, sollicitudin consectetur nibh. Aliquam erat volutpat.

Praesent id suscipit ex. Fusce eu ante facilisis, dignissim est id, tempor sapien. Proin ullamcorper maximus nisl, eget blandit purus pharetra nec. Pellentesque mauris nibh, posuere id imperdiet eu, consectetur at ligula. Sed accumsan lacinia bibendum. Donec sodales lacus vel velit convallis fringilla vitae non neque. Nullam in nulla bibendum, feugiat lectus congue, tincidunt metus. Pellentesque efficitur nulla a semper eleifend. Donec pretium dignissim efficitur. Maecenas lobortis gravida posuere posulat.
`;

var occur = loremIpsum.match(/et/g);
console.log("'et' occured " + occur.length + " times.");

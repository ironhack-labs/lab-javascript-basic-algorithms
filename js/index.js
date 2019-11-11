// Iteration 1: Names and Input
let hacker1 = "Leonardo";
console.log("Driver´s name: ", hacker1);

let hacker1 = "Leonardo";
console.log("Driver´s name: ", hacker1);

let hacker2 = "Alberto";
console.log("The navigator´s name is: ", hacker2);

// Iteration 2: Conditionals
function isLonger(hacker1, hacker2) {
  for (var i = 0; i < hacker1.length; i++) {
    var totalCaracter1 = [i];
  }
  for (var i = 0; i < hacker2.length; i++) {
    var totalCaracter2 = [i];
  }
  if (hacker1.length === hacker2.length) {
    console.log(
      "Wow, you both have equally long names",
      totalCaracter1,
      "characters!"
    );
  } else if (hacker1.length > hacker2.length) {
    console.log(
      "The driver has the longest name, it has",
      totalCaracter1,
      "characters."
    );
  } else {
    console.log(
      "It seems that the navigator has the longest name, it has",
      totalCaracter2,
      "characters."
    );
  }
}

function isLonger(hacker1, hacker2) {
  for (var i = 0; i < hacker1.length; i++) {
    var totalCaracter1 = [i];
  }
  for (var i = 0; i < hacker2.length; i++) {
    var totalCaracter2 = [i];
  }
  if (hacker1.length === hacker2.length) {
    console.log(
      "Wow, you both have equally long names",
      totalCaracter1,
      "characters!"
    );
  } else if (hacker1.length > hacker2.length) {
    console.log(
      "The driver has the longest name, it has",
      totalCaracter1,
      "characters."
    );
  } else {
    console.log(
      "It seems that the navigator has the longest name, it has",
      totalCaracter2,
      "characters."
    );
  }
}

isLonger("Leonardo", "Washingnton");
console.log(isLonger);

// Iteration 3: Loops

// 3.1
hacker1Uppercase = hacker1.toUpperCase();

console.log(hacker1Uppercase);

separator = "";
hacker1UppercaseSeparated = hacker1Uppercase.split(separator);

console.log(hacker1UppercaseSeparated);

// 3.2
function reverseString(str) {
  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");
  return joinArray;
}

reverseString(hacker2);

// 3.3

var hackers = [hacker1, hacker2];
hackersSorted = hackers.sort();

console.log(hackersSorted);

function lexiOrder(hackersSorted) {
  if (hacker1 == [0]) {
    console.log("ppp");
  }
}

lexiOrder();

function lexiOrder(hackersSorted) {
  if (hacker1 === [0]) {
    console.log("The driver/'s name goes first");
  } else if (hacker2 === [0]) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}

// Bonus 1

var str =
  "Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus ' suus 'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH Ut sibi fuerat socius sagittis. Ego intervenerit. Vere quia a te nuper iratus occidit illos undecim annorum puer. Deinde, si hoc forte qui fuit imperavit.Quod satis pecuniae sempiternum. Ut sciat oportet motum. Nunquam invenies eum. Hic de tabula. Ego vivere, ut debui, et nunc fiant. Istuc quod opus non est. Lorem ipsum occurrebat pragmaticam semper ut, si quis ita velim tibi bene recognoscere. Quorum duo te mihi videtur. ";
function countWords() {
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  return str.split(" ").length;
}
var temp = str;
var count = temp.match(/et/g);
console.log(count);

countWords(str);

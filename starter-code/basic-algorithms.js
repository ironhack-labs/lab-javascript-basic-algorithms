// Names and Input

var hacker1 = "James";
var hacker2 = prompt("What's your name?");

//Conditionals

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length){
  console.log ("The Driver has the longest name, it has" + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has" + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//console.log(hacker1.toUpperCase().split("").join(" "));

function separate() {
  hacker1 = hacker1.toUpperCase();
  var separateLetters = [];
  for(i = 0; i <= hacker1.length; i++) {
  separateLetters.push(hacker1[i]);
  }
  separateLetters = separateLetters.join(" ");
  console.log(separateLetters);
  return separateLetters;
}

separate();

//console.log(hacker2.toUpperCase().split("").reverse().join(" "));

function separate2() {
  hacker2 = hacker2.toUpperCase();
  var separateLetters = [];
  for(i = 0; i <= hacker2.length; i++) {
  separateLetters.push(hacker2[i]);
  }

  console.log(separateLetters.reverse().join(" "));
}

separate2();

var firstLetters = [];

function inOrder() {
  firstLetters = [hacker1[0], hacker2[0]];
  firstLetters.sort();
  if (hacker1[0] === firstLetters[0] && hacker2[0] === firstLetters[0]){
    console.log("What?! You both got the same name?");
  } else if (hacker2[0] === firstLetters[0]) {
    console.log("Yo, the navigator goes first definitely");
  } else if(hacker1[0] === firstLetters[0]) {
    console.log("The driver's name goes first");
  }
}

inOrder();

//Palindrome

//ask the question
var input = prompt("");


//separate the letters
function separate3() {
  input = input.toUpperCase();
  var separateLetters = [];
  for(i = 0; i <= input.length; i++) {
  separateLetters.push(input[i]);
  }
//replace tells: If it's different to anything between a-z and A-Z and 0-9, replace it with "nothing". ^symbol works to replace whatever different. Without this symbol it would replace literally what we wrote in the method.
  var clean = separateLetters.join("").replace(/[^a-zA-Z0-9]/g, "");

//compare the sentence to the same but reversed sentence
  if(clean === clean.split("").reverse().join("")) {
    console.log("It's a palindrome");
  } else {
    console.log("Keep trying because it isn't a palindrome");
  }
}

separate3();


// Lorem ipsum generator

var ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec elit sollicitudin, hendrerit purus ut, efficitur elit. Duis ut quam quam. Sed tempus metus id porttitor imperdiet. Vestibulum porttitor tristique lectus, sed eleifend purus pellentesque nec. Donec dictum est eget ipsum vulputate, non volutpat nisl congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at mattis augue. Sed finibus eleifend ex, a consectetur est fringilla at. Proin posuere, enim sed tincidunt dignissim, purus lacus varius enim, nec dictum lacus est dignissim nunc. Curabitur tempor, enim a sagittis gravida, erat ante fermentum eros, vel tincidunt quam justo et erat. Aliquam feugiat feugiat dui. Curabitur facilisis leo at pellentesque vestibulum. Mauris tincidunt mi nec euismod posuere. Phasellus posuere quam at enim auctor, eget faucibus urna sagittis.Suspendisse hendrerit leo turpis, eget mattis urna sollicitudin eu. Vestibulum vitae tincidunt mauris, vitae laoreet lacus. Vestibulum id urna sed mauris vestibulum tincidunt sit amet sed ligula. Fusce volutpat nunc ut tincidunt placerat. Nunc tristique mauris erat, sit amet volutpat mi hendrerit id. Nam placerat, purus non euismod imperdiet, libero magna pretium massa, et sollicitudin mauris eros in felis. Nulla facilisi. Proin eget nibh eget nisi elementum rhoncus ut eu urna. Nunc pharetra molestie nisi, fringilla eleifend erat viverra in.Maecenas vel interdum felis. Quisque non volutpat nisl. Proin convallis arcu vitae lorem porta varius. Ut ullamcorper tellus at magna lobortis sagittis. Sed molestie neque id lobortis pharetra. Duis vel tellus at nisi commodo iaculis in quis nisi. Maecenas in libero nulla. Ut at vestibulum neque.";

var ipsumByWords;

//count how many words are there in the lorem ipsum
//First we get rid of the ". and ," symbols, and then we convert to an Arrey via Split()

function separateIpsum() {
  ipsumByWords = ipsum.replace(/,/g, "").replace(/\./g, "").split(" ");
  var numberWords = ipsumByWords.length;
  console.log("There are " + ipsumByWords.length + " words");
  return numberWords;
}

separateIpsum();

//counter to know how many "et" words are there
//First we make a counter of words in the array and inside the for we add a conditional that filters the "et" words and add it to etCounter

var etCounter = 0;

function countWordEt() {
  for(i=0; i <= ipsumByWords.length; i++) {
    var word = ipsumByWords[i];
    if (word === "et") {
      etCounter++;
    }
  }
  console.log("There are " + etCounter + " \"et\" words");
  return etCounter;
}

countWordEt();

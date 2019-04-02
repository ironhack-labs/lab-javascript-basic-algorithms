// Names and Input


//Conditionals


// Lorem ipsum generator

var hacker1 = "Lycurgus";

console.log(hacker1);

var hacker2 = prompt("What's the navigator's name?");

console.log("The navigator's name is: " + hacker2);

if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

for (var i = 0; i < hacker1.length; i++){
  console.log(hacker1[i].toUpperCase() + " ");
}

for (var i = hacker1.length; i > 0; i--) {
  console.log(hacker1[i-1]);
}

if (hacker1.localCompare(hacker2) === -1) {
    console.log("The diver's name goes first");
  } else if (hacker2.localCompare(hacker1) === 1){
    console.log("Yo, the navigator goes first definitely");
  } else {
    console.log("What?! You both got the same name?");
  }

  function palindromes(str) {
    var reversedStr = str.split("").reverse().join("");
    if (reversedStr === str)  return true;
    else return false;
  }

  palindromes('lol');
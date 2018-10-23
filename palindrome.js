var hacker1 = window.prompt("What is the driver\'s name\?");
console.log("The driver's name is " + hacker1);
var hacker2 = window.prompt("What is the navigator\'s name\?");
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker2.length + " characters!!");
}

function print (name) {
  var printableStr = "";
  var letter;
  for (var i = 0; i < name.length; i++ ) {
    letter = name[i].toUpperCase();
    printableStr+=letter;
    //if the letter is the last one, no space is needed
    if (i!==(name.length-1)) {
      printableStr += " ";
    }
  }
  console.log(printableStr);
}

function reversePrint(name) {
  var printableStr = "";
  var letter;
  for (var i = 0; i < name.length; i++ ) {
    letter = name[name.length-1-i];
    printableStr+=letter;
  }
  console.log(printableStr);
}

function compare (name1, name2) {
  if (name1[0]>name2[0]) {
    console.log("Yo, the navigator goes first definitely");
  } else if (name1[0]<name2[0]) {
    console.log("The driver's name goes first");
  } else {
    console.log("What?! You both got the same name?");
  }
}


function palindrome(stringToCheck) {
  var tempStr = stringToCheck.toLowerCase();
  var str = "";

  //delete whitespace and punctuation
  for (var i=0; i<=tempStr.length; i++) {
    //add character to the string if the character is a letter
    if ((tempStr[i] >= "a") && (tempStr[i] <= "z")) {
      str += (tempStr[i]);
    }
  }

  //check if the number of characters is uneven, 
  //then the middle of the string is a letter
  if (str.length%2===1) {
    //check if letters to both sides of the middle are same
    for (var i=0; i<str.length/2; i++) {
      var letterOne = str[str.length/2+1];
      var letterTwo = str[str.length/2-1];
      if (letterOne !== letterTwo) {
        console.log("false");
        return false;
      }
    }
  } else {
    for (var i=0; i<str.length/2; i++) {
      var letter1 = str[i];
      var letter2 = str[str.length-1-i];
      if (letter1!==letter2) {
        console.log("false");
        return false;
      }
    }
  }
  console.log("true");
  return true;
}

print(hacker1);
reversePrint(hacker2);
compare(hacker1, hacker2);
palindrome(window.prompt("Give me a string"));
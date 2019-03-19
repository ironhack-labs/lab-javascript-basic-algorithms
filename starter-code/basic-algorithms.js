var hacker1 = "paul";
console.log("Driver's name is " + hacker1);

var hacker2 = prompt("Please enter your name");
console.log("Navigator's name is " + hacker2);

if (hacker1.length>hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length>hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.");
} else if (hacker2.length===hacker1.length) {
  console.log("wow, you both got equally long names, " + hacker2.length + " characters!!");
};

function capitalizeName(hacker1){
  var newString = "";

  for(var i=0; i<(hacker1.length); i++) {
    newString = newString + hacker1[i] +" ";
  }

  console.log(newString.toUpperCase());
};
capitalizeName(hacker1);

function reverseName(hacker1){
  var newString2 = "";

  for(var i=(hacker1.length)-1; i>-1; i--) {
    newString2 = newString2 + hacker1[i];
  }

  console.log(newString2); 
}
reverseName(hacker1);

if (hacker1.localeCompare(hacker2)){
  console.log("The driver's name goes first");
} else if (hacker2.localeCompare(hacker1)){
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
};

var inputString = prompt("Please enter a new String");

function isPalindrome(inputString){
  var inputStringReverse = "";
  var inputStringNoSpace = "";
  
  for(var i=(inputString.length)-1; i>-1; i--) {
    if (inputString[i]===" "){
      continue;
    } else {
      inputStringReverse += inputString[i];
    }
  }

  for(var i=0; i<inputString.length; i++) {
    if (inputString[i]===" "){
      continue;
    } else {
      inputStringNoSpace += inputString[i];
    }
  }

  console.log(inputStringReverse);
  console.log(inputStringNoSpace);
  
  if (inputStringNoSpace === inputStringReverse){
    var palindrome = true;
  } else {
    var palindrome = false;
  };

  if (palindrome === true) {
    alert("Wait, that was a palindrome!!");
  } else {
    alert("Hmm just a basic string");
  }
}
isPalindrome(inputString);
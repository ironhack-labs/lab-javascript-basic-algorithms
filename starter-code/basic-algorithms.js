// Names and Input
let hacker1 = "Manolo";
let hacker2;
let palindromeString;

let driverName = '';
let driverNameRev = '';
let hack1IsLong;


hacker2 = prompt("What's your name?").trim();
palindromeString = prompt('Enter a sentence').trim();


console.log("The driver's name is " + hacker1);



//Conditionals


//Check what name is longer
if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
  hack1IsLong = true;
} else if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  hack1IsLong = false;
} else{
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!!");
  hack1IsLong = true;
}

//Separate characters
for (let i = 0; i< hacker1.length; i++){
  driverName += hacker1[i].toUpperCase() + ' ';
}

console.log(driverName);

//Reverse the name
driverNameRev = reverseString(hacker1);

function reverseString(stringWords){
  let reversedString = '';
  for (let i = stringWords.length-1; i>= 0; i--){
    reversedString += stringWords[i];
  }
  return reversedString;
}

console.log(driverNameRev);


//Lexicographic order
if (hacker1.length > hacker2.length){
  sortNames(hacker2.length, "Yo, the navigator goes first definitely");
}else if (hacker1.length < hacker2.length){
  sortNames(hacker1.length, "The driver's name goes first");
} else{
  sortNames(hacker1.length, "What?! You both got the same name?");
}

function sortNames(lengthName, finalMessage){
  for (let i = 0; i<lengthName;i++){
    if (hacker1[i].toLowerCase() < hacker2[i].toLowerCase()){
      console.log("The driver's name goes first");
      break;
    } else if (hacker1[i].toLowerCase() > hacker2[i].toLowerCase()){
      console.log("Yo, the navigator goes first definitely");
      break;
    } else{
      if (i === lengthName-1){
        console.log(finalMessage);
      }else{
        continue;
      } 
    }
  }
}


//Palindrome
let palindromeAlpha = '';

for (let i=0; i<palindromeString.length; i++){
  if ((palindromeString[i]>= 'A' && palindromeString[i]<= 'Z')
  ||(palindromeString[i]>= 'a' && palindromeString[i]<= 'z')){
    palindromeAlpha += palindromeString[i];
  }
}

palindromeAlpha = palindromeAlpha.toLowerCase();

let reversedPalindrome = reverseString(palindromeAlpha);


if (palindromeAlpha === reversedPalindrome){
  console.log ("Is palindrome");
}else{
  console.log("Is not a palindrome");
}



// Lorem ipsum generator
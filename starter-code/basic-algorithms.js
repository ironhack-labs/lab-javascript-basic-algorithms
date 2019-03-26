// Names and Input
let hacker1 = "Victoria"
let hacker2 = prompt("What's the navigator name?");
console.log("The driver's name is " + hacker1)
console.log("The navigator name is " + hacker2)

//Conditionals
function longerName (hacker1, hacker2){
  if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
  }
  }

  longerName(hacker1,hacker2);

var capitalizedName = "";
var reverseName = "";
for (i = 0; i < hacker1.length; i++ ){
  capitalizedName += " "+ hacker1[i].toUpperCase();
}
console.log(capitalizedName);

for (a = hacker2.length; a >= 0; a--){
  reverseName += hacker2.charAt(a);
}
console.log(reverseName);

if (hacker1.charAt(0) < hacker2.charAt(0)){
  console.log("The driver's name goes first")
} else if (hacker1.charAt(0) > hacker2.charAt(0)){
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both got the same name?")
}

// Lorem ipsum generator

function checkPalindrome () {
  let storeString = "";
  let palindromeString = prompt("Write a palindrome word:")
  for (let i = palindromeString.length; i >= 0; i--){
     storeString += palindromeString.charAt(i);
  }
  if (palindromeString === storeString) {
    console.log(`It's a palindrome!: ${palindromeString}`)
  } else {
    console.log("Not a palindrome :(")
  } 
}

checkPalindrome();
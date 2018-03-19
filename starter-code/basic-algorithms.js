// Names and Input

console.log("I'm Ready!");

var hacker1 = "Heli"
console.log("The driver's name is " + hacker1)

var hacker2 = prompt("what's the navigator's name?")
console.log("The navigator's name is " + hacker2)

//Conditionals

if ( hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has" + hacker1.length +  "characters")
  } else if ( hacker2.length > hacker1.length) {
    console.log("Yo, navigator got the longest name, it has" + hacker2.length + "characters")
  } else {
    console.log("wow, you both got equally long names, " + hacker1.length + "characters!!")
  }
  
  var string = " "
  
  for (var i = 0; i < hacker1.length; i++) {
   string = string + hacker1[i].toUpperCase() + " "
  }   
   console.log(string)

   var sentence1 = ["The driver's name goes first", "Yo, the navigator goes first definitely", "What?! You both got the same name?"]

    console.log(sentence1.sort())

// Palindromo

function checkPalindrome(stringCheck){
    for ( var i = 0; i < stringCheck.length ; i++) {
      If (checkPalindrome[0] === checkPalindrome[stringCheck.length - 1]) {
          console.log("It's Palindrome!")

      }
    }
}

checkPalindrome("A man, a plan, a canal, Panama!")
checkPalindrome("Amor, Roma")
  
// Lorem ipsum generator






 
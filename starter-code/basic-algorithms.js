// Names and Input
var hacker1 = "John"
console.log("The driver's name is " + hacker1);

//var hacker2 = prompt("What is your name?")
var hacker2 = "Luca"
console.log("The driver's name is " + hacker2);



//Conditional
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
} else if (hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
} else { console.log("wow, you both got equally long names, " + hacker1.length + " characters!!") }


// Loops
var hacker1 = "John"

for (var i = 0; i < hacker1.length; i++){
  console.log(hacker1[i].toUpperCase() + " ")
}

var hacker1 = "John"

for (var i = hacker1.length - 1; i >= 0; i--){
  console.log(hacker1[i])
} // output: nhoJ


if (hacker1>hacker2) {
  console.log("The driver's name goes first");
} else if (hacker2>hacker1) {
  console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What?! You both got the same name?")
}

function isPalindrome(str){

  // lower the case
  var string = str.toLowerCase()
  
  // reversing the string
  var reversed = ''
  // filter string
  var cleanedStr = ""
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== " " && string[i] !== "," && string[i] !== "!" && string[i] !== "?"){
      cleanedStr = cleanedStr + string[i]; 
    }
  }
  
  for(var i = cleanedStr.length -1; i >= 0; i--) {
    //console.log(cleanedStr[i]);
    reversed = reversed + cleanedStr[i]
    //console.log(reversed)
  }
  
  // compqring filtered string to reversed str
  if(cleanedStr === reversed){
    console.log("The word is a palindrome");
  } else {console.log("The word is not a palindrome");
  }
  }
  
  isPalindrome('a man, a plan, a canal, Panama!')
  isPalindrome('john')

// Lorem ipsum generator

function etCounter(str){

  var strArray = str.split(" ")

  var len = 0

  for (var i = 0; i < strArray.length - 1; i++){
      if (strArray[i] === "et"){ len += 1 }
  }

  return len
}

//var test = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//etCounter(test)

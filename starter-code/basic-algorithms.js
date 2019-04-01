// Names and Input
var hacker1
hacker1="Dani"
console.log("The driver's name is " + hacker1)

var hacker2
hacker2=prompt ('What is your name?',"Name")
console.log("The navigator's name is "+ hacker2)

//Conditionals
if (hacker1.length < hacker2.length){
  console.log("The driver has the longest name, it has 4 characters");
 } else if (hacker1.length > hacker2.length){
   console.log("Yo, navigators got the longest name, it has 4 characters");
 } else{
   console.log("wow, you both got equally long names, 4 characters!!");
 }

if(hacker1){
console.log(hacker1.toUpperCase("Dani").split('').join(' '));
}

if(hacker2){
  console.log(hacker2.split("").reverse("Name").join(""));
}

var hacker1UpperCase = hacker1.toUpperCase();
//console.log(hacker1UpperCase)
var hacker2UpperCase = hacker2.toUpperCase();

for(i=0 ;i<hacker1.length;i++){
if(hacker1==hacker2){
 console.log("What?! You both got the same name")
 break;
}else if(hacker1UpperCase.charCodeAt(i) < hacker2UpperCase.charCodeAt(i)){
  console.log("The driver's name goes first");
  break;
}else{
    console.log("Yo, the navigator goes first definitely");
    break;
}
}

var palindrome = prompt("Write a new string","string")
//var rev = palindrome.split("").reverse("string")
//console.log(rev)
function palindromeChecker(pali){
  var tempVar = true
  for (i = 0; i < pali.length; i++){
    if(pali[i] !== pali[(pali.length - 1) - i]) {
      tempVar = false;
    }
  }
  if(tempVar){
    console.log("palindrome");
  }else{
    console.log("not a palindrome")
  }
}

palindromeChecker(palindrome)


// Lorem ipsum generator

// Iteration 1: Names and Input
var hacker1="Malcom";
console.log(`The driver´s name is ${hacker1}`);
var hacker2="Terminator";
console.log(`The navigator´s name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length)
{
 console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
    else if (hacker1.length<hacker2.length)
     {
       console.log("It seems that the navigator has the longest name, it has "+ hacker2.length +" characters");
     }
else
{
console.log("Wow, you both have equally long names,"+ hacker2.length + " characters!");
}

// Iteration 3: Loops
//3.1
var letters=hacker1.toUpperCase();
space="";
sentence= letters.split(space);
console.log(sentence);

//3.2
function reverseString(str) {
      var newString = "";
      for (var i = str.length - 1; i >= 0; i--) {
          newString += str[i];
      }
      console.log(newString);
  }
 reverseString(hacker2);

//3.3


hacker1=hacker1.slice(0,1);  
hacker2=hacker2.slice(0,1);  


var myArray =["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var index_of_letter_1 =myArray.indexOf(hacker1);
var index_of_letter_2 =myArray.indexOf(hacker2);


if(index_of_letter_1<index_of_letter_2)
  {
    console.log("The driver's name goes first");
  }
  else if(index_of_letter_1>index_of_letter_2){
     console.log("The driver's name goes first");
     }
else{
  console.log("What?! You both have the same name?");
}
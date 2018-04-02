// Names and Input
//Dali and Neil

//Create a variable with drivers name
var hacker1 = "Neil";



//Print out drivers name
console.log("The driver's name is: " + hacker1);



//Ask for Navigators name
var hacker2 = prompt("Please enter navigator's name:");



//Print the Navigators name
console.log("The navigator's name is: " + hacker2);



//Print response depending on who has longer name
if (hacker1.length === hacker2.length)
{
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters!");
}



else if (hacker1.length > hacker2.length)
{
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}



else
{
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.");
}



//Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

var s = "";
var t = "";

for (i = 0; i < hacker1.length; i++)
{
  s += hacker1[i].toUpperCase() + " ";
  
}
console.log(s);


//Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

for (i = hacker2.length-1; i >= 0; i--)
{
  t += hacker2[i]
  
}
console.log(t);




//Lexographic

var x = [hacker1.toLowerCase(), hacker2.toLowerCase()];

console.log(x.sort());
x = x.sort();

for (i = 0; i< x.length; i++)
{
  if (x[0] === x[1])
  {
    console.log("What?! You both got the same name?!");
    break;
  }
  else if (x[0] === hacker1.toLowerCase())
  {
    console.log("The driver's name goes first.");
    break;
  }
  else
  {
    console.log("Yo, the navigator goes first definitely");
    break;
  }
}



//BONUS PALINDROME

var palindrome = prompt("Please enter a string:");

var re = /[\W_0-9]/g;

var palindromeConverted = palindrome.toLowerCase().replace(re,"");

var palindromeReversed = palindromeConverted.split("").reverse().join("");

if (palindromeReversed === palindromeConverted)
{
  console.log("It is a palindrome!");
}
else
{
  console.log("It is not a palindrome!");
}
console.log(palindromeReversed);





//10 Lorem Ipsum

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at nisi id velit consequat efficitur. Morbi efficitur ornare nisi rutrum iaculis. Suspendisse condimentum nisi non neque porttitor, vitae congue nisl feugiat. Phasellus pretium non elit a consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel dui felis. Curabitur eu vestibulum urna. Fusce vitae lorem augue. Ut vel vestibulum sem, in condimentum risus. Aenean mollis, est non ullamcorper gravida, est dolor pulvinar neque, et laoreet urna sapien quis felis. Phasellus urna nibh, tristique a semper a, fringilla non lacus. Integer sit amet rutrum magna. Etiam a ipsum fringilla, dapibus ligula at, semper tellus. Fusce ut nibh in sapien maximus egestas. Vivamus eu tristique nisl, eu molestie ligula. Pellentesque mauris libero, vulputate id luctus sit amet, mattis a urna. Sed pellentesque, neque at vulputate viverra, odio felis volutpat ante, eget fermentum libero orci quis lectus. Nulla eros massa, ultricies suscipit varius sit amet, faucibus id lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis orci dui, tempus eu maximus at, faucibus non felis. Donec vulputate turpis consectetur nunc pretium, sed bibendum elit blandit. Quisque in molestie leo, ut mattis elit. Mauris vehicula sed dui nec scelerisque.Nunc eu erat non justo efficitur ultrices suscipit sed mi. Phasellus interdum mi a varius finibus. Fusce ac lectus et urna porta viverra. Integer id enim placerat, auctor est eu, volutpat sapien. In in ipsum felis. Ut quis aliquam urna. Cras fringilla, ante et laoreet pulvinar, ipsum massa gravida risus, in faucibus quam nulla in leo. Aliquam pretium fringilla velit in semper. Proin nec ipsum suscipit, ultricies purus malesuada, dapibus ante. Mauris vehicula sem id metus ultricies, nec maximus magna auctor.";

  var re = /[\_.,0-9]/g;

  text = text.replace(re,"");
  console.log(text);
  text = text.split(" ")
  console.log(text.length+1);
  
  var count = 0;
  
  for(i = 0; i <= text.length; i++)
  {
    if (text[i] === "et")
    {
      count++;
    }
  }
  console.log(count);
  















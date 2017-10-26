// Names and Input
console.log("I'm Ready!");
var hacker1 = "Pepe";
console.log("The driver's name is " + hacker1);
var hacker2 = window.prompt("What's the navigator's name?","Navigator's name");
console.log("The navigator's name is " + hacker2);
var driver = [];

//Conditionals
if(hacker1.length>hacker2.length)
{
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker2.length>hacker1.length)
{
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
else{
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

for(var i=0;i<hacker1.length;i++){
    driver.push(hacker1[i] + "");
}
console.log.apply(console,driver);

console.log(hacker2.split("").reverse().join(""));

if(hacker1>hacker2)
{
    console.log("The driver's name goes first");
}
else if (hacker1<hacker2)
{
    console.log("Yo, the navigator goes first definitely");
}
else
{
    console.log("What?! You both got the same name?");
}

//Palindrome
var palindrome = window.prompt("Please insert a palindrome","Palindrome");

palindrome = palindrome.replace(/[^a-zA-Z0-9! ]+/g, "").toUpperCase;

var isFalse = false;

for(var j=0;j<palindrome.length-1;j++)
{
    if(palindrome[j] != palindrome[palindrome.length-1-j])
    {
        isFalse = true;
    }
}

if(isFalse)
{
    console.log("The sentence is not a palindrome.");
}
else
{
    console.log("The sentence is a palindrome.");
}
// Lorem ipsum generator

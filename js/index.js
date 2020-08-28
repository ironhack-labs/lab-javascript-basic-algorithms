/*iteration1*/
 
let hacker1 = "Alicja"
console.log("The driver's name is "  +hacker1);
let hacker2 = "Philipp"
console.log("The navigator's name is " +hacker2);
 
/*iteration2*/
 
console.log(hacker1.length);
console.log(hacker2.length);
 
if (hacker1.length>hacker2.length)  {
   console.log("Driver's name is longer")
} else if (hacker1.length<hacker2.length)
{
 console.log("Navigator's name is longer")  
}
 else
{
 console.log("Both names have the equal length")
}
 
/*iteration3*/
/*add a space beteween the letters of the drivers name*/
 
let resultString = ""
 
for (let i = 0; i < hacker1.length; i++)
 {
   resultString += hacker1[i];
 }
console.log("The driver's name is " + resultString.split("").join(" ").toUpperCase());
 
/*reverse the navigators name*/
let navigatorsName = ""
 
for (let i = hacker2.length - 1; i >= 0; i--) {
       navigatorsName += hacker2[i];
   }
console.log("The navigator's reversed name is " + navigatorsName);
 
/*lexicographic order*/
 
if (hacker1<hacker2)  {
   console.log("The driver's name goes first.")
} else if (hacker1>hacker2)
{
 console.log("Yo, the navigator goes first definitely.")  
}
 else
{
 console.log("What?! You both have the same name?")
}

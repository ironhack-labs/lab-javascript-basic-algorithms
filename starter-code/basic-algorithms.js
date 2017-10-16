//Names and Input

var hacker1 = "jessica";
console.log('hacker1');

var hacker2 = prompt("What is the navigator's name?");
console.log('hacker2');

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name! It has " + hacker1.length + " characters!");
}
else if (hacker1.length < hacker2.length) {
  console.log("Yo, the navigator has the longest name. It has " + hacker2.length + " characters!");
}
else {
  console.log("Wow, you both have equally long names! " + hacker1.length + " characters!");
}

var driver = hacker1.toUpperCase();

var str1 = "";
var str2 = "";
for (i = 0; i < driver.length; i++){
  str1 += driver[i]+ " ";
}
console.log(str1);

for (i = driver.length; i >= 0; i--){
  str2 += driver[i];
}

console.log(str2);

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
}
else if (hacker1 < hacker2) {
  console.log("Yo! The navigagtor goes first definitely.");
}
else {
  console.log("What?! You guys have the same name!");
}


// Lorem ipsum generator


//palindrome

var string3 = prompt("enter palindrome");

temp="";
temp2="";
for(i=0;i<(string3.length-1)/2;i++)
  {
    if(string3[i] ===" "|| string3[i]===",")
    i++;
    else
    temp += string3[i]+ " ";

}
console.log(temp);


for(i=string3.length -1 ;i >(string3.length-1)/2;i--)
{
if(string3[i] ===" "|| string3[i]===",")
    i--;
    else
    temp2 += string3[i]+ " ";
}


console.log(temp2);






if(temp[i]===temp2[i])
console.log("its a palindrome");

else
console.log("its not a palindrome");

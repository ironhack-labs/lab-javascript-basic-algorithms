var hacker1="Thomas";
var hacker2="Ben";
let i=0;
let longText=' ';
var text='';
var navre='';
var rev = '';
let result = hacker1.toUpperCase()
let len1 = hacker1.length;
let len2 = hacker2.length;
let lenres = result.length;
if(len1>len2)
{
console.log("The driver has longest name,it has " + len1 + "characters");
}
else if(len2>len1)
{
  console.log("The navigator has longest name,it has " +len2 + "characters");
}
else
{
console.log("wow,you both have equal long name with"+len1 + "characters");
}


console.log(result);
for(i=0;i<lenres;i++)
  {
     text+=result.charAt(i)+' ';
    
    
  }
console.log(text);

function reverse(hacker2)
  {

for (var i = hacker2.length - 1; i >= 0; i--)
  rev += hacker2[i];
    console.log(rev);

}
reverse( hacker2);
let res = hacker1.localeCompare(hacker2)
if (res == -1) {
  console.log ("The driver's name goes first.")
}

else if (res == 1) {
  console.log ("Yo, the navigator goes first, definitely.")
}

else {
  console.log ("What?! You both have the same name?")
}

console.log (res);
function getCount(str) {
return str.split(' ') .length
}

getCount(longText);
console.log (getCount(longText)); 

let longTextWords = longText.split(" ");

let countWordEt = 0

for (let i = 0; i <= longTextWords.length; i++) {
  if (longTextWords[i] == "et") {
    countWordEt++
  }
}

console.log (countWordEt);
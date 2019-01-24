var hacker1 = "samantha";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("Enter name");
console.log("the navigator's name is " + hacker2);

if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker2.length > hacker1.length){
  console.log("The Navigator has the longest name, it has " + hacker2.length + " characters");
}

else {
  console.log("wow, you both got equally long names, " + hacker1.length +  " characters!!")
}

var d = "";
for (var i = 0; i < hacker1.length; i++){
  d += hacker1[i].toUpperCase() + " ";
}
console.log(d);

var n = "";
for (var i = hacker2.length-1; i >= 0; i--){
  n += hacker2[i];
}
console.log(n);

var longest = "";
var maxLength;
if(hacker1.length > hacker2.length){
  longest = hacker1;
  maxLength = hacker1.length;
}
else if (hacker2.length > hacker1.length){
  longest = hacker2;
  maxLength = hacker2.length;
}
else {
  maxLength = hacker1.length;
}


for(i = 0; i<maxLength; i++){
  if (hacker1[i] < hacker2[i]){
    console.log("driver goes first");
    break;
  }
  else if (hacker2[i] < hacker1[i]){
    console.log("nav goes first");
    break;
  }
  else if (hacker2[i] == hacker1[i] && hacker1.length == hacker2.length){
    console.log("WOW, same name!");
    break;
  }
 else if(hacker2[i] == hacker1[i] && hacker1.length != hacker2.length){
   if(hacker1.length < hacker2.length){
     console.log("driver goes first");
     break;
   }
   else {
     console.log("nav goes first");
     break;
   }
 }
}

var palinCheck = prompt("Enter a string");
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

palindrome(palinCheck);


var lorem = "lorem et Et haha";


var count = 0;
if(lorem != ""){
  for(var i=0; i<lorem.length; i++){
    if (lorem[i] == " "){
      count++;
    }
    else {
      continue;
    }
  }
  count++;
}

console.log(count);


    var countT = (lorem.match(/et/gi) || []).length;
    console.log(countT);
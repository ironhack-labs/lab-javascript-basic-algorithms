// Names and Input
var hacker1 = 'Ale';
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What is the navigator's name?");
console.log("The navigator's name is " + hacker2);
if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}else if(hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length +  " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker2.length + " characters!!");
}

var spaceHacker1 = '';

for (var i= 0; i < hacker1.length; i+=1) {
    spaceHacker1 +=hacker1[i] + ' ';
}
 console.log(spaceHacker1);

//console.log(hacker2.reverse());
 var reverseHacker2 = '';

 for (var i= hacker2.length -1; i >= 0; i-=1) {
     reverseHacker2 +=hacker2[i];
 }
  console.log(reverseHacker2);

  if (spaceHacker1 > reverseHacker2) {
    console.log('The driver\'s name goes first');
  }  else if (spaceHacker1 < reverseHacker2) {
    console.log('Yo, the navigator goes first definitely');
  }  else {
    console.log('What?! You both got the same name?');
  }

//palendrum exercise----------------
var s = prompt("Enter a string").toLowerCase().replace(/[^a-z']/g, '');

var sPal = "";
for (var i= s.length -1; i >= 0; i-=1) {
    sPal +=s[i];
}
 if(s === sPal){
   console.log(true);
 }else{
   console.log(false);
 }


//Lorem ipsum generator----------------
var s2 = "Hello world et et et";
var count = 0;
var etCount = 0;
for(var i = 0; i < s2.length; i++){
  if(s2[i] ===" "){
    count++;
  }
  if(s2[i].toLowerCase() ==="e" && s2[i+1].toLowerCase() ==="t"){
    etCount++;
  }
}
if(s2.length > 0){
  count++;
}
console.log("Word Count: " + count +"\n" + "et Count: " + etCount);

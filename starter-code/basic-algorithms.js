// Names and Input
var hacker1 ="Baby";
console.log("The driver's name is " + hacker1);

var hacker2=prompt("What is the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker1.length < hacker2.length){
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
}
else{
  console.log('wow you both got equally long names, '  + hacker1.length + ' characters!!')
}


// Lorem ipsum generator
var caps=""
for (var j=0; j<hacker1.length; j++){
  caps += hacker1[j].toUpperCase() + " "
}
console.log(caps);

var backwards="";
for (var i=(hacker2.length)-1; i>-1; i--){
  backwards += hacker2[i];
}
console.log(backwards)

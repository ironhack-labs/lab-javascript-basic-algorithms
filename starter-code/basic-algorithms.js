// Names and Input

var hacker1 = "Sandra", hacker2;
console.log("The driver's name is " + hacker1);
hacker2 = window.prompt("What's the name of the Navigator?");
console.log(hacker2);

//Conditionals
var driver = hacker1.length;
var navigator2 = hacker2.length;

if(driver > navigator2){
  console.log('The Driver has the longest name, it has '+driver+' characters');
}else if(navigator2 > driver){
  console.log('Yo, navigator got the longest name, it has '+navigator2 +' characters');
}else if(driver === navigator2){
  console.log('wow, you both got equally long names, '+driver +' characters!!')
}

//Loops
var test='';
for(var i=0; i<hacker1.length; i++){
   test += hacker1.charAt(i) + ' ';     
}
console.log(test.toUpperCase());

var result = '';
for(var j = hacker2.length -1; j >= 0; j -- ){
  result += hacker2[j];
}
console.log(result);


console.log(hacker1);
console.log(hacker2);

if(hacker1.localeCompare(hacker2) === -1){
    console.log('The driver\'s name goes first');
}else if(hacker1.localeCompare(hacker2) === 1){
    console.log('Yo, the navigator goes first definite');
}else if(hacker1.localeCompare(hacker2) === 0){
    console.log('What?! You both got the same name?');
}



// Lorem ipsum generator

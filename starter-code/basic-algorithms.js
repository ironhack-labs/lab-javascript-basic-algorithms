// Names and Input
test
let hacker1 = "Juan Perez";
console.log("The driver's name is " + hacker1);
let hacker2 = prompt("What's your browse name?");
console.log("The navigator's name is " + hacker2);

if(hacker1.length == hacker2.length){
  console.log ("wow, you both got equally long names, " + hacker1.length + " characters!!");
} else if (hacker1.length > hacker2.length){
console.log("The Driver has the longest name, it has " + hacker1.length +  " characters");
} else {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
//Conditionals
// solucion 1
let hacker1Upper = hacker1.toUpperCase().split('').join(' ');
console.log(hacker1Upper);

// solucion 2
let str1 ='';
for (let i = 0 ; i < hacker1.length; i ++){
str1 = str1 + hacker1[i].toUpperCase() + ' ';
}
console.log(str1);

//solucion 1
console.log(hacker2.split('').reverse().join(''));

//solucion 2
let str2 ='';
for (let i = hacker2.length - 1 ; i >= 0; i --){
str2 = str2 + hacker2[i];
}
console.log(str2);


if( hacker1.localeCompare(hacker2) < 0){
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) > 0){
  console.log("Yo, the navigator goes first definitely");
} else{
  console.log("What?! You both got the same name?");
}

// Lorem ipsum generator
var sentence = hacker1.toUpperCase().split('').join(' ');
console.log(sentence);

const str = hacker1.split('').reverse().join('')
console.log(str)
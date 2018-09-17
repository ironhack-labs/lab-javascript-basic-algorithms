// Names and Input
var hacker1 = 'Raúl';
//console.log(`The driver's name is ${hacker1}`);
console.log("The driver's name is " + hacker1);

var hacker2 = window.prompt("What's your name hacker2?");
console.log("The navigator's name is " + hacker2)




//Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters") 
 } else if (hacker2.length > hacker1.length) {
     console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
 } else {
     console.log("Wow, you both got equally long names, " + hacker1.length + " characters")
 }

var accumulator = ""
for( var i=0 ; i < hacker1.length; i++){
    accumulator += hacker1[i]+ " ";
}
console.log(accumulator.toUpperCase())

var accumulator2 = ""
for( var j=hacker2.length-1 ; j >= 0; j--){
    accumulator2 += hacker2[j]+ " ";
}
console.log(accumulator2.toUpperCase());

if (hacker2>hacker1){
    console.log("The driver's name goes first")
}else if(hacker1>hacker2){
    console.log("Yo,the navigator goes first definitely")
}else{
    console.log("What?! You both gor the same name?")
}

var palindromo = prompt("Type again your name")

var acc = "";
for (var h=palindromo.length-1; h >= 0; h--) {
    acc += palindromo[h];
}


if (palindromo.toLowerCase() === acc.toLowerCase()) {
    console.log("Your name is a palindrome");
} else {
    console.log("Your name isn't a palindrome");
}

 console.log(palindromo.toLowerCase());
 console.log(acc.toLowerCase())

// Lorem ipsum generator

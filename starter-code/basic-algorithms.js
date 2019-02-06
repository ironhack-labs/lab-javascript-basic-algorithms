// Names and Input

var hacker1 = "Pedro";

var hacker2;




console.log("The Driver name is " + hacker1);

hacker2 = window.prompt("What is the Navigator's name?");

console.log("The Navigator name is " + hacker2);



//Conditionals



if(hacker1.length>hacker2.length){

console.log("The driver has the longest name, it has " + hacker1.length +" chars");

} else {

console.log("Yo, navigator got the longest name, it has" + hacker2.length +"characters");

}



if (hacker1.length == hacker2.length) {



console.log("wow, you both got equally long names, "+ hacker1.length +" characters!!");

}



//LOOPS

var spaces= "";

for (var i=0;i<hacker1.length;i++){

spaces += hacker1[i] + " ";

}

spaces = spaces.toUpperCase();

console.log(spaces);



var inverse= "";

i=hacker2.length;

for (i;i>=0;i--){

inverse += hacker2[i];

}

console.log(hacker2);



hacker1= hacker1.toUpperCase();

hacker2= hacker2.toUpperCase();



if (hacker1[0]<hacker2[0]){

console.log("The driver's name goes first");

}

if (hacker2[0]<hacker1[0]){

console.log("Yo, the navigator goes first definitely");

}

if (hacker2[0]==hacker1[0]){

console.log("What?! You both got the same name?");

}



// Lorem ipsum generator

var palindro = '';
var teste;



function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   palindro = window.prompt('Palindrome test, write a word');
   teste = palindrome(palindro);
   if (teste==true){
   console.log('É um Palindromo!');
   }
   else {
       console.log('Não é Palindromo!')
   }
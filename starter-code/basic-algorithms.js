'use strict';

// Names and Input
var hacker1 = "dave";
console.log("the drivers name is " + hacker1);

let hacker2 = "hello";
hacker2 = window.prompt("What is the Navigators name?");

console.log("the navigator's name is " + hacker2);

//Conditionals

    if(hacker1.length > hacker2.length){
        console.log("The Driver has the longest name, it has " + hacker1.length + " Characters.");
    } else if(hacker2.length > hacker1.length){
        console.log("yo, navigator got the longest name, it has " + hacker2.length + " Characters.");
    } else{
        console.log("wow, you both got equally long names, " + hacker1.length + " Characters!!");
    }
//loops

// driverupper case splitter
    var x = '';
    for(var i=0; i<hacker1.length; i++){
   x += hacker1.charAt(i) + ' ';     
    }
    console.log(x.toUpperCase());

//navigator backwards
    var y = '';
    for(var i=hacker2.length; i >= 0; i--){
   y += hacker2.charAt(i);     
    }
    console.log(y);

    debugger;
    //lex order
    var alphabet=["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

var driverNameStart = hacker1[0];
var navigatorNameStart = hacker2[0];
var alpha1 = alphabet.indexOf(driverNameStart);
var alpha2 = alphabet.indexOf(navigatorNameStart);

debugger;
if(hacker1 > hacker2){
    console.log("The driver's name goes first");
} else if(hacker1 < hacker2){
    console.log("Yo, the navigator goes first definitely");
} else{
    console.log("What?! You both got the same name?");
}

    



// Lorem ipsum generator

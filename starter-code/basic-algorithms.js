'use strict';

/* Names and Input*/
var hacker1 = "Batman";
console.log(hacker1);

var hacker2 = window.prompt('Please, introduce the name of the second hacker', 'Robin, Ironman, etc.');
console.log(hacker2);

/*Conditionals*/
if(hacker1.length > hacker2.length){
    console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if (hacker2.length > hacker1.length) {
    console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
} else {
    console.log('wow, you both got equally long name, ' + hacker1.length + ' characters');
}

/*Loops*/
for(var j = hacker2.length; j > -1; j--){
    console.log(hacker2.charAt(j));
}

var inCapitals;
var a;
for(var i = 0; i<hacker1.length; i++){
    var inCapitals = hacker1.toUpperCase();
    a = inCapitals.charAt(i) + ' ';
    console.log(a);
}

/*Sort names*/
var arrayNames = [hacker1, hacker2];

function orderNames(){
    arrayNames.sort;
    if(arrayNames[0] == hacker1){
        console.log('The driver\'s name goes first');
    } else if (arrayNames[0] == hacker2){
        console.log('Yo, the navigator goes first definetly');
    } else{
        console.log('What?! You both got the same name?');
    }
}

'use strict';

/* Names and Input*/
var hacker1 = "Magneto";
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

function orderNames(){
    var name1 = hacker1.toUpperCase();
    var name2 = hacker2.toUpperCase();
    if(name1.charAt(0) < name2.charAt(0)){
        console.log('The driver\'s name goes first (' + hacker1 + ')');
    }else if(name1.charAt(0) > name2.charAt(0)){
        console.log('Yo, the navigator goes first definetly (' + hacker2 + ')');
    }else{
        console.log('What?! You both got the same name?');
    }
}

orderNames();

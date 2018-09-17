// Names and Input
var hacker1 = 'Stve Mcqueen';
var hacker2 = 'Samuel L. Jackson';
console.log('The driver\'s name is ' + hacker1 +'(' + hacker1.length + ')');
console.log('The navigators\'s name is ' + hacker2 + '(' + hacker2.length + ')');


//Conditionals
if (hacker1.length > hacker2.length){
    console.log('The Driver has the longest name, it has '+ hacker1.length +' characters');
} else if (hacker2.length > hacker1.length){
    console.log('The Navigator has the longest name, it has '+ hacker2.length +' characters');
}else{
    console.log('wow, you both got equally long names,' + hacker1.length1 +'characters!!');
}


//Loops
var driverNemaUpperCase = hacker1.toUpperCase();

for(var i = 0; i < driverNemaUpperCase.length; i++){
    console.log(driverNemaUpperCase[i] + ' ');
}

for(var i = driverNemaUpperCase.length; i > -1; i--){
    console.log(driverNemaUpperCase[i] + ' ');
}

var newHacker1 = Array.from(hacker1);
var newHacker2 = Array.from(hacker2);

if(newHacker1[0] > newHacker2[0]){
    console.log('The driver\'s name goes first');
} else if (newHacker2[0] > newHacker1[0]){
    console.log('Yo, the navigator goes first definitely');
} else {
    console.log('What?! You both got the same name?');
}


// Lorem ipsum generator

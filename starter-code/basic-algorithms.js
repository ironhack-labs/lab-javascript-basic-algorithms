// Names and Input

//DRIVER NAME
var hacker1 = prompt ('Driver name?')
    alert ('The driver\'s name is ' + hacker1)

//NAVIGATOR NAME
var hacker2 = prompt ('Navigator\'s name?')
    alert ('The navigator\'s name is ' + hacker2)


//Conditionals
if (hacker1.length > hacker2.length) {
alert ('The Driver has the longest name, it has ' + hacker1.length + ' characters')
}
else if (hacker1.length < hacker2.length) {
alert ('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters')
} 
else {
alert ('wow, you both got equally long names, ' + hacker1.length + ' characters')
}

//LOOPS
var upperCase = '';
for ( var i = 0; i < hacker1.length; i++ ) {
    upperCase += hacker1[i].toLocaleUpperCase() + ' ';
}
alert (upperCase);

var inverseCase = '';
for (var i = hacker2.length-1; i >=0; i--) {
    inverseCase += hacker2[i];
}
alert (inverseCase);

for (var i = 0; i < hacker1.length; i++) {
    if(hacker1[i].localeCompare(hacker2[i]) == 0) {
        continue;
    }
    else if(hacker1[i].localeCompare(hacker2[i]) < 0) {
        alert('The driver\'s name goes first')
        break;
    } 
    else if (hacker1[i].localeCompare(hacker2[i]) > 0) {
        alert('Yo,the navigator goes first definitely')
        break;
    } 
    else {
        alert('What?! You both got the same name?')
    }
}
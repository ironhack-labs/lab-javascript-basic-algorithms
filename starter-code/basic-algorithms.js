// Names and Input
var hacker1 = 'Sebastian';
console.log(hacker1);
var hacker2 = 'Gabriel';
console.log('The navigators name is '+hacker2)

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has '+hacker1.length+' characters');
} else if (hacker1.length < hacker2.length) {
    console.log('Yo, navigator got the longest name, it has '+hacker2.length+' characters');
} else {
    console.log('wow, you both got equally long names, '+hacker1.length+' characters!!');
}

var aux = hacker1.toUpperCase();
var aux2 = '';
for (var i = 0; i < aux.length; i++) {
    aux2 += aux[i]+' ';    
}
console.log(aux2);
// Lorem ipsum generator

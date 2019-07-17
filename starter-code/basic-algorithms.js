// Names and Input
let hacker1 = 'Dave';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = prompt(`What's the navigators name?`);
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
hacker1Len = hacker1.length;
hacker2Len = hacker2.length;

if(hacker1Len > hacker2Len) {
    console.log(`The Driver has the longest name, it has ${hacker1Len} characters`);    
} else if(hacker1Len < hacker2Len) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2Len} characters`);
} else {
    console.log(`wow, you both got equally long names, ${hacker1Len} characters!!`);    
}

// Lorem ipsum generator
var capital = ''
for (let i = 0; i < hacker1.length; i++) {
    if(i == (hacker1.length - 1)){
        capital += hacker1[i];        
    }else{
        capital += hacker1[i] + ' ' ;
    }        
}
console.log(capital.toUpperCase());

var reverse = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverse += hacker1[i];    
}
console.log(reverse);

var sortNames = [hacker1, hacker2];
console.log(sortNames.sort());
if(sortNames[0] == sortNames[1]){
    console.log('What?! You both got the same name?');    
} else if(sortNames[0] == hacker1) {
    console.log('The driver\'s name goes first');    
} else {
    console.log('Yo, the navigator goes first definitely');    
}

// Bonus Time!
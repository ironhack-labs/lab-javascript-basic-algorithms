// Names and Input
var driver = 'Mariana';
var navigator = 'João';
console.log(`The driver's name is ${driver}`);
console.log(`The navigator's name is ${navigator}`);
//Conditionals
if (driver.length > navigator.length) {
    console.log(`The Driver has the longest name, it has ${driver.length} characters`);
} else if (driver.length == navigator.length) {
    console.log(`Wow, you both got equally long names, ${driver.length}`);
} else {
    console.log(`Yo, navigator got the longest name, it has ${navigator.length}`);
}

// Loops
var spacedDriver = '';
for (var i = 0; i < driver.length; i++) {
    spacedDriver += `${driver[i]} `;
}
console.log(spacedDriver.toUpperCase());

var reverseNavigator = '';
for (var i = navigator.length - 1; i >= 0; i--) {
    reverseNavigator += navigator[i];
}
console.log(reverseNavigator);
console.log(" ");
//Bonus
//Palindrome
var str = 'Al lets Della call Ed “Stella.”';
var wrapStr = '';
for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/gi)) {
        wrapStr += str[i].toLowerCase();
    }
}
var reverseStr = '';
for (var i = wrapStr.length - 1; i >= 0; i--) {
    reverseStr += wrapStr[i].toLowerCase();
}

if (wrapStr === reverseStr) {
    console.log(`The string '${str}' is a Palindrome`);
} else {
    console.log(`The string '${str}' isn't a Palindrome`);
}
console.log(" ");
//Ex. 10
var lorem = `A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, 
não é uma zona de exportação, é uma zona para o Brasil. 
Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. 
Derrubar arvores da natureza é muito lucrativo! et`;

var loremSplitada = lorem.split(" ");
var count = 0;
for(var i = 0; i<loremSplitada.length; i++){
    count += 1;
}
console.log(` blafd ${countLatin}`);
console.log(`The string: 
"${lorem}" 
has ${count} words`);


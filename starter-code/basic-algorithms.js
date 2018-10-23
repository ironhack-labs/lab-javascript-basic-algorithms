// Names and Input
var hacker1 = 'Poppy'
console.log('The driver\'s name is ' + hacker1);
var hacker2 = window.prompt('What\'s your name?');
console.log('The navigator\'s name is ' + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters')
} else if (hacker2.length > hacker1.length) {
    console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters')
} else {
    console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!')
}


// Loops
var driverName = "";
var navigatorName = "";

for (var i = 0; i <= (hacker1.length - 1); i++) {
    driverName += hacker1[i] + " ";

}
console.log(driverName.toUpperCase());

for (var j = (hacker2.length - 1); j >= 0; j--) {
    navigatorName += hacker2[j];
}
console.log(navigatorName);

// Lexicographical order

function compareNames(nameOne, nameTwo) {
    for (i = 0; i <= (hacker1.length - 1); i++) {

        var a = nameOne.charAt(i);
        var b = nameTwo.charAt(i);

        if (a < b) {
            return 'The driver\'s name comes first';

        } else if (a > b) {
            return 'Yo, the navigator goes first definitely';
        }
    }
    return 'What?! You both got the same name?';
}

const comparison = compareNames(hacker1, hacker2);
console.log(comparison);
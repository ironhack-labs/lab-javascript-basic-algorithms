// Names and Input
let hacker1 = 'Walter';
console.log('The driver\'s name is', hacker1);

// let hacker2 = window.prompt('What is the navigator\'s name?');
let hacker2 = 'White'
console.log('The navigator\'s name is', hacker2);

//Conditionals
function returnLongestName(name1, name2) {
    if (name1.length > name2.length) {
        return 'The Driver has the longest name, it has ' + name1.length + ' characters'
    }
    if (name2.length > name1.length) {
        return 'Yo, navigator got the longest name, it has ' + name2.length + ' characters'
    }
    return 'wow, you both got equally long names, ' + name1.length + 'characters!!'
}
console.log(returnLongestName(hacker1, hacker2));

console.log(hacker1.toUpperCase().split('').join(' '));

console.log(hacker2.split('').reverse().join(''));

function orderNames(name1, name2) {
    if (name1.toUpperCase().localeCompare(name2.toUpperCase()) == -1) {
        return 'The driver\'s (' + name1 + ') name goes first'
    }
    if (name1.toUpperCase().localeCompare(name2.toUpperCase()) == 1) {
        return 'Yo, the navigator (' + name2 + ') goes first definitely'
    }
    return 'What?! You both got the same name?'
}
console.log(orderNames(hacker1, hacker2));
// Lorem ipsum generator
// Iteration 1: Names and Input
//
let hacker1 = 'Fitipaldi';
let hacker2 = 'Oracle';

console.log("the driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

function longName() {
    if (hacker1.length > hacker2.length) {
        console.log('The driver has the longest name, it has ' + hacker1.length + ' characters');
        return;
    } else if (hacker1.length < hacker2.length) {
        console.log('It seems that the navigator has the longest name, it has  ' + hacker2.length + '  characters.');
        return;
    } else {
        console.log('Wow, you both have equally long names, ' + hacker1.length + ' characters!');
        return;
    }
}


// Iteration 3: Loops

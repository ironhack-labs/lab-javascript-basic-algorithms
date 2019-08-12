// Names and Input
let hacker1 = prompt('what\'s the driver\'s name?');
    console.log('The driver\'s name is ' + hacker1);

let hacker2 = prompt('what\'s the navigator\'s name?');
    console.log('The navigators\'s name is ' + hacker2);

//Conditionals

if (hacker1.length > hacker2.length) {
        console.log("The Driver has the longest name, it has XX characters");}

    else if (hacker1.length < hacker2.length) {
        console.log("Yo, navigator got the longest name, it has XX characters");}

    else {console.log("wow, you both got equally long names, XX characters!!")};

// Loops

let newHacker1 = hacker1.toUpperCase().split('').join(' ');
console.log(newHacker1);

let newHacker2 = hacker2.split('').reverse('').join('');
console.log(newHacker2);

// 8. Loops
let compare = hacker1[0].localeCompare(hacker2[0]);

if (compare === -1) {console.log("The driver's name goes first")}
else if (compare === 1) {console.log("Yo, the navigator goes first definitely")}
else {console.log("What?! You both got the same name?")}


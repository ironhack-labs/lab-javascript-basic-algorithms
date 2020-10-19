// 1 Names and Input

const hacker1 = 'Da';
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = 'Dama';
console.log(`The navigator's name is ${hacker2}.`);

// 2 Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};


// 3 Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
// Note: Addition(+) for strings equals strings concatenation 

let results = '';
for (i = 0; i < hacker1.length; i++) {
    results += hacker1.charAt(i).toUpperCase() + ' ';
}
console.log(results);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
// Note: Addition(+) for strings equals strings concatenation 

// backwards for loop
let reverse = '';
for (i = hacker2.length - 1; i >= 0; i--) {
    reverse = reverse + hacker2.charAt(i);
    // reverse = reverse.concat(hacker2.charAt(i));
}
console.log(reverse);

// forwards for loop
// let reverse = '';
// for (i = 0; i <= hacker2.length - 1; i++) {
//     reverse = reverse + hacker2.charAt(hacker2.length-(i+1));  
// }
// console.log(reverse);


// 3.3 Depending on the lexicographic order of the strings, print: 

if (hacker1.length < hacker2.length) {
    for (i = 0; i < hacker1.length; i++) {
        if (hacker1.charAt(i) < hacker2.charAt(i)) {
            console.log(`${hacker1} goes first.`);
            break;
        } else if (hacker1.charAt(i) > hacker2.charAt(i)) {
            console.log(`Yo, ${hacker2} goes first definitely.`);
            break;
        };
    };
    console.log(`${hacker1} goes first.`);
} else if (hacker1.length > hacker2.length) {
    for (i = 0; i < hacker2.length; i++) {
        if (hacker1.charAt(i) < hacker2.charAt(i)) {
            console.log(`${hacker1} goes first.`);
            break;
        } else if (hacker1.charAt(i) > hacker2.charAt(i)) {
            console.log(`Yo, ${hacker2} goes first definitely.`);
            break;
        };
    };
    console.log(`Yo, ${hacker2} goes first definitely.`)
} else {
    for (i = 0; i < hacker1.length; i++) {
        if (hacker1.charAt(i) < hacker2.charAt(i)) {
            console.log(`${hacker1} goes first.`);
            break;
        } else if (hacker1.charAt(i) > hacker2.charAt(i)) {
            console.log(`Yo, ${hacker2} goes first definitely.`);
            break;
        } else if (hacker1.charAt(i) === hacker2.charAt(i) && i === hacker1.length-1) {
            console.log(`What?! You both have the same name?`);
        };
    };   
}
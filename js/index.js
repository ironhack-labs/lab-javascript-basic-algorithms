//I1
let hacker1 = 'apple';
let hacker2 = 'banana';

console.log(`"The driver's name is ${hacker1}"`);
console.log(`"The navigator's name is ${hacker2}"`);

//I2.1
const result = (type) => {
    switch(type) {
        case 'same':
            console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
            break;
        case 'drive':
            console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
            break;
        case 'nav' :
            console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
            break;
    }
};

const lengthCheck = () => {
    hacker1.length===hacker2.length ?
        result('same') : hacker1.length>hacker2.length ?
        result('drive') : result('nav')
};
lengthCheck();

//I3.1
console.log(
    hacker1.split('').join(' ')
);

/*
//Loop example here aswell:

let spacedCaps = "";
for(let i = 0; i < hacker1.length; i++) {
  spacedCaps += hacker1[i].toUpperCase() + " ";
}
*/

//I3.2
let revName = '';
for(let i = hacker2.length - 1; i >= 0; i--) {
    revName += hacker2[i];
}
console.log(revName);

//I3.3 find lexicographic order
const order = (type) => {
    switch(type) {
        case 'same':
            console.log("What?! You both have the same name?");
            break;
        case 'drive':
            console.log("The driver's name goes first");
            break;
        case 'nav' :
            console.log("Yo, the navigator goes first definitely");
            break;
    }
};

[hacker1, hacker2].sort((a, b) => {
    a===b ? order('same') : a > b ?
        order('drive') : order('nav');
});
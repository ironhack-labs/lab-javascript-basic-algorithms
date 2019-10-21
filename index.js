var name = 'Pradeepa';
console.log('Hi ' + name);
//iteration 1

var hacker1 = 'Deepan';
console.log("The driver's name is  " + hacker1);
var hacker2 = 'Pradeepa';
console.log("The navigator's name is  " + hacker2);
//iteration 2

if(hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if(hacker1.length < hacker2.length) {
    console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
} else {
    console.log('You both got equally long names ' + hacker1.length + ' characters!');
}
//iteration 3

//3.1
const splitDriver = hacker1.toUpperCase();
const arrDriver = [...splitDriver];
console.log(arrDriver.join().replace(/,/g, ' '));
//3.2
const navArr = [...hacker2];
const resArr = [];
for(let i=navArr.length-1;i>-1;i--) {
    resArr.push(navArr[i]);
}
console.log(resArr.join().replace(/,/g, ''));
//3.3
if(hacker1.localeCompare(hacker2) === 1 ) {
    console.log("The driver's name goes first");
} else if(hacker1.localeCompare(hacker2) === -1) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What? You both got the same name");
}

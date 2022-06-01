// Iteration 1: Names and Input

console.log("I'm ready!");

let hacker1;
hacker1 = 'Fran';

console.log(`The driver name is ${hacker1}`);

let hacker2;
hacker2 = 'Antonio';
console.log(`The navigator name is ${hacker2}`);

//
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, hacker1.length characters!`);
}

// Iteration 3: Loops
// 3.1:
let upperCaseSpelledName = "";

for (let i = 0; i < hacker1.length; i++) {
    upperCaseSpelledName += hacker1[i].toUpperCase() + ' ';
}
console.log(upperCaseSpelledName);

// 3.2

let navigatorsNameReverse = "";

for (let i = hacker2.length-1; i >= 0; i--) { 
    navigatorsNameReverse += hacker2[i];
}
console.log(navigatorsNameReverse);


// Bonus 1:
//1.1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra leo ipsum, at pulvinar diam eleifend ut. Nullam lorem urna, vehicula a faucibus eu, bibendum in ligula. Morbi malesuada condimentum turpis ac venenatis. Maecenas vestibulum vel dui ut convallis. Nunc ac massa vel justo tempor dapibus. Etiam et semper ipsum, pretium ullamcorper metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada lectus vitae metus aliquam, non molestie risus tempor. Pellentesque eu velit quis tellus gravida lacinia ac vitae lorem. Nam convallis odio ac nulla tempus posuere. Curabitur maximus ex vel euismod porta. Vestibulum id felis sed quam dignissim vestibulum sed a elit. Donec rhoncus nunc dignissim arcu vulputate auctor.

Nullam varius egestas nulla, at luctus erat pulvinar at. Mauris venenatis, leo consectetur vestibulum porta, ipsum nisi rhoncus turpis, at posuere nisi quam sit amet nisl. Ut lacus quam, vehicula et eleifend eu, pharetra vel risus. Curabitur sed vulputate felis, sed condimentum neque. Nunc tristique augue quis mauris gravida lacinia. Cras vehicula quam diam, in rhoncus nunc sollicitudin eget. Cras iaculis urna et tristique auctor. Ut sed eleifend quam, sit amet pretium justo. Proin et lacus tempor lectus euismod iaculis.

Donec non hendrerit ante. Sed elementum facilisis orci, et tristique lectus dictum eu. Donec id metus dolor. Donec varius lorem eu est tempus, at pellentesque leo hendrerit. Sed ac est at risus semper egestas. Integer euismod eros nec erat sollicitudin convallis. Morbi at orci at libero egestas feugiat sit amet pulvinar tellus. Ut tortor eros, venenatis at massa sit amet, accumsan tristique mauris. Suspendisse egestas est in est laoreet imperdiet. Nam vestibulum magna et rhoncus tempus. Nulla facilisi. Ut imperdiet quam purus. Nam ac odio vitae felis pellentesque blandit nec sit amet nulla.`;

//1.2
let wordCounter = lorem.split(' ').length;

console.log(wordCounter);


// 1.3

// lorem.includes('et');

let etCounter;
etCounter = lorem.split('et').length;
console.log(etCounter);

// Bonus 2
//2.1
/*
let phraseToCheck;

for (let i = 0; i > lorem.length; i++) {

}
*/

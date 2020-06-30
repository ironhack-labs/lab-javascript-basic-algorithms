// Iteration 1: Names and Input
let hacker1 = 'Tom';

console.log("The driver's name is " + hacker1);

let hacker2 = 'Pedro';

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.');
} else if (hacker1.length < hacker2.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.'
  );
} else {
  console.log('Wow, you both have equally long names, ' + hacker1.length + 'characters!');
}

// Iteration 3: Loops

//3.1

let sepName = '';

for (let counter = 0; counter < hacker1.length; counter++) {
  sepName += hacker1[counter].toUpperCase() + ' ';
}

console.log(sepName);

// 3.2

let revName = '';

for (let counter = hacker2.length - 1; counter >= 0; counter--) {
  revName += hacker2[counter];
}

console.log(revName);
// 3.3

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

// BONUS 1

let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at odio placerat, tristique libero vel, condimentum mi. Suspendisse fringilla augue leo, suscipit auctor ante sodales quis. Suspendisse pretium porttitor lorem, in volutpat urna. Maecenas suscipit rhoncus efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam id pharetra tellus. Donec sagittis sit amet ligula sit amet pretium. Fusce porta, nulla ac rutrum aliquet, tortor lorem semper dolor, ac euismod eros dolor at enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed placerat imperdiet mollis. Vestibulum erat diam, facilisis a arcu id, vehicula porttitor velit. In et imperdiet diam, id consequat tortor. Phasellus urna mauris, fringilla id viverra bibendum, fermentum sed nibh. Mauris a sapien nulla. Nulla urna sem, commodo et risus a, iaculis lobortis augue. Sed sit amet tincidunt odio, vitae gravida tortor. Morbi pretium tellus sed eros commodo, vitae elementum nibh pharetra. Sed mattis, urna sed pulvinar interdum, eros tellus gravida lacus, viverra volutpat ipsum nibh in mauris. Aenean congue ornare elit vitae pharetra. Nullam id aliquet odio, vitae faucibus ligula. Maecenas a augue at felis maximus commodo vitae a tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eget dolor justo. Sed efficitur ex eget lobortis viverra. Sed at tempus enim, et euismod nibh. Ut malesuada volutpat diam nec imperdiet. Aliquam at consectetur nisi. Cras ac leo tortor.';

let wordCounter = 1;

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === ' ') {
    wordCounter += 1;
  }
}

console.log(wordCounter);

// number of time "et" appears

let etCounter = 0;

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === 'e' && lorem[i + 1] === 't') {
    etCounter += 1;
  }
}

console.log(etCounter);

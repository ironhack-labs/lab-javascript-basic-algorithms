let hacker1 = 'Diana';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Dany';
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length){
  console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.');
} else if (hacker1.length < hacker2.length){
  console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.');
} else if (hacker1.length === hacker2.length){
  console.log('Wow, you both have equally long names,' + hacker1.length + ' characters!.');
};

let hacker1Name = '';
for (let i = 0; i < hacker1.length; i++) {
  hacker1Name += ' ' + hacker1[i].toUpperCase();
};
console.log(hacker1Name);

;
console.log(hacker2.split('').reverse().join(''));

if (hacker1 > hacker2){
  console.log(`The driver's name goes first.`);

}else if (hacker1 < hacker2){
  console.log('Yo, the navigator goes first definitely.')
} else if (hacker1 === hacker2){
  console.log('What?! You both have the same name?');
};
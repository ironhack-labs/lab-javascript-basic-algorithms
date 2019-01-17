const hacker1 = 'Kayne';
console.log('The drivers name is ', hacker1);

const hacker2 = 'Dylan';
console.log('The navigators name is', hacker2);

var hL1 = hacker1.length;
var hL2 = hacker2.length;

if (hL1 > hL2){
  console.log('The Driver has the longest name, it has', hacker1.length, 'characters')
}else if (hL2 > hL1){
  console.log('Yo, navigator got the longest name, it has', hacker2.length, 'characters')
}else {
  console.log('wow, you both got equally long names,', hacker1.length ,'characters!!')
};

console.log(hacker1.toUpperCase().split('').join(' '));

console.log(hacker2.split('').reverse().join(''));

/*
var fh = hacker1.charAt(0);
var sh = hacker2.charAt(0);

var orderLetters = [fh, sh];
var sort = orderLetters.sort(fh, sh)
*/

if ('Kayne'<'Dylan'){
  console.log('The drivers name goes first');
}else if ('Kayne'>'Dylan'){
  console.log('Yo, the navigator goes first definitely');
}else if ('Kayne'=='Dylan'){
  console.log('What?! You both got the same name?');
}
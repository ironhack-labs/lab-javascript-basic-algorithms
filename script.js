console.log("I'm ready!");

let hacker1 = 'Robbie';

console.log('The drivers name is ' + hacker1);

let hacker2 = 'Nick';

console.log('The navigators name is ' + hacker2);

if (hacker1.length > hacker2.length) {
  console.log(hacker1 + ' has the longest name, it has ' + hacker1.length + ' characters')
}
else if (hacker2.length > hacker1.length) {
  console.log('Yo, ' + hacker2 + ' got the longest name, it has ' + hacker2.length + ' characters')
}
else {
  console.log('Wow, you both got equally long names, ' + hacker1.length + ' characters!')
}
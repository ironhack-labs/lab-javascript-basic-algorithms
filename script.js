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

let hack = '';
for (let i=0; i < hacker1.length; i++) {
  let upper = hacker1[i].toUpperCase();
  hack += upper + ' ';
}
console.log(hack);

let hack2 = '';
for (let i = hacker2.length-1; i >= 0; i--) {
  let lower = hacker2[i];
  hack2 += lower;
}
console.log(hack2);

if (hacker1.localeCompare(hacker2) < 0 ) {
  console.log(hacker1 + "'s name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, " + hacker2 + " goes first definetly.");
} else ("What?! You both got the same name?")
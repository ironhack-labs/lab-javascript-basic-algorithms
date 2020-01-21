let hacker1 = 'João';
console.log(hacker1);

let hacker2 = 'João';
console.log(hacker2);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name it has ${hacker1.length} characters!`);
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters!`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

hacker1String = '';
for (i = 0; i < hacker1.length; i++) {
  hacker1String += hacker1[i].toUpperCase() + ' ';
}
console.log(hacker1String);

let hacker2Order = '';
for (i = hacker2.length - 1; i >= 0; i--) {
  hacker2Order += hacker2[i];
}
console.log(hacker2Order);

//------------------------//

var arr = [hacker1, hacker2];
arr.sort(function(a, b) {
  return a.localeCompare(b);
});
console.log(arr);

if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
} else if (arr[0] === hacker1) {
  console.log(`The driver's name goes first.`);
} else if (arr[0] === hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
}

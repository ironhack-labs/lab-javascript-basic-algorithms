// Names and Input
let hacker1 = 'Nick';
console.log('The driver\'s name is ' + hacker1);

let hacker2 = 'Kristen';
console.log('The navigator\'s name is ' + hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!');
}

// Lorem ipsum generator
let result = '';
for (let i = 0; i < hacker1.length; i++){
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result)

let result2 = '';
for (let i = hacker2.length - 1; i >= 0; i--){
  result2 += hacker2[i];
}

console.log(result2);

var names = [hacker1, hacker2];
names.sort(names);
if (hacker1 === hacker2){
  console.log("What?! You both got the same name?")
} else if (hacker1 === names[0]) {
  console.log('The driver\'s name goes first');
} else {
  console.log('Yo, the navigator goes first definitely');
}

console.log(names);
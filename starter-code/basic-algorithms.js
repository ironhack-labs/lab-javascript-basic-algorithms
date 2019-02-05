// Names and Input
let hacker1 = 'Matias';
let hacker2 = '';

hacker2 = prompt('Write the name of the navigator')

console.log('The driver\'s name is ' + hacker1);

console.log('The navigator\'s name is ' + hacker2)

//Conditionals

if (hacker1.length > hacker2.length){
   console.log('The Driver has the longest name, it has ' + hacker1 + ' characters');
} else if (hacker2.length > hacker1.length){
   console.log('Yo, navigator got the longest name, it has ' + hacker2 + ' characters')
} else {
   console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!');
}

//Loops
let driverName = [];
let driverNameReverse;
for(let i = 0; i < hacker1.length; i++){
   driverName.push(hacker1[i])
}

driverNameReverse = driverName.reverse();
driverName = driverName.join(' ').toUpperCase(); 


console.log(driverName);

if(hacker1.localeCompare(hacker2) === -1){
   console.log('The' + hacker1 + 'name goes first');
  } else if (hacker1.localeCompare(hacker2) === 1) {
     console.log('Yo, the ' + hacker2 + ' goes first definitely')
  } else{
     console.log('What?! You both got the same name?')
}

// Bunus

let palindrome = prompt('Wirte your messaje');;

let arrayPalindrome = []; 
let reversePalindrome;

for(let i = 0; i < palindrome.length; i++){
   arrayPalindrome.push(palindrome[i]);
}
reversePalindrome = arrayPalindrome.reverse();

arrayPalindrome = arrayPalindrome.join('');
arrayPalindrome = arrayPalindrome.replace(' ', '');

reversePalindrome = reversePalindrome.join('');
reversePalindrome= reversePalindrome.replace(' ', '');

console.log(arrayPalindrome);
console.log(reversePalindrome);


if(arrayPalindrome === reversePalindrome){
  console.log('is a palindrome!');
} else {
  console.log('isn\'t a palindrome');
}
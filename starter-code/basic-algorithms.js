// Names and Input
var hacker1 =  'Pablo';
console.log(`The Driver's name is ${hacker1}`);

var hacker2 = window.prompt('Enter navigator\'s name');
console.log(`Navigator's name is ${hacker2}`);


//Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker2 > hacker1){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
}else{
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);
}

// Lorem ipsum generator
var driver = '';

for(let i = 0; i < hacker1.length; i++){
    driver = driver + hacker1[i]+' ';
}

console.log(driver);
console.log(hacker2.split('').reverse().join(''));

var navigator2 = hacker2.split('').reverse().join('');
var newDriver = driver.toLowerCase();

if(newDriver < navigator2){
  console.log(`The driver's name goes first`);
}else if(newDriver > navigator2){
  console.log(`Yo, the navigator goes first definitely`);
}else{
  console.log(`What?! You both got the same name?`);
}

var palindrome = window.prompt('Enter palindrome');
var newPalindrome = palindrome.split('').reverse().join('');


for(let i = 0; i < palindrome.length; i++){
  if(palindrome.includes(' ')){

  }
}

if(){

}

console.log(newPalindrome);
// Names and Input
var hacker1 = 'Anna';
console.log('The dirver´s name is ' + hacker1);
var hacker2 = prompt('What´s your name?');
console.log('The navigator´s name is ' + hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters.');
}else if (hacker2.length > hacker1.length){
  console.log('Yo, navigator got the logest name, it has ' + hacker2.length + ' characters.');
}else{
  console.log('WOW, you both got equally long names, ' + hacker1.length + 'characters.');
}

// Lorem ipsum generator
var hacker1Name = '';
for(i = 0 ; i < hacker1.length ; i++){
  hacker1Name += hacker1[i]
}
console.log(hacker1Name.toUpperCase());
// Names and Input
var hacker1 = 'Daniel';
console.log('The driver\'s name is '+hacker1);
//var hacker2 = prompt('What is the name of the navigator?');
console.log('The navigator\'s name is '+hacker2);


//Conditionals

if(hacker1.length>hacker2.length){
  console.log('The Driver has the longest name, it has '+hacker1.length+' characters ');} else if(hacker1.length<hacker2.length){
    console.log('Yo, navigator got the longest name, it has '+hacker2.length+' characters');
  }else{
    console.log('wow, you both got equally long names,'+hacker1.length+' characters!!');
  }

//loops
// Exercise 6:
var nameDef='';
for(let i=0;i<hacker1.length;i++){
  nameDef += hacker1[i].toUpperCase();
  nameDef += ' ';
}
console.log('Driver\'s name: '+nameDef);

//Exercise 7:
var nameDef2='';
for(let i=hacker2.length-1;i>=0;i--){
  nameDef2 += hacker2[i];
}
console.log('Navigator name: '+nameDef2);

//Exercise 8:
if(hacker1.localeCompare(hacker2) === -1) {
  console.log('The driver/s name goes first');
}
else if(hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely');
}
else {
  console.log('What?! You both got the same name?');
}



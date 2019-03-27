// Names and Input

let hacker1 = 'Arnold';

console.log(`The driver's name is ${hacker1}`);

//let hacker2 = prompt("Name Navigator:", "kelly");

let hacker2 = "Kelly";

console.log(`The navigator's name is ${hacker2}`);

//Conditionals

if(hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker2.length > hacker1.length){
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)

} else{
  console.log("wow, you both got equally long names, XX characters!!")
}



let hacker1UpperCase = hacker1.toUpperCase();
let hacker1UpperSpace;
let space = 0;

while(space <= hacker1UpperCase.lenght){
  
  hacker1UpperSpace += hacker1UpperCase.indexOf(space) + "";
  space +=1;
  
}  

console.log (hacker1UpperSpace);

let navigatorReverse;
let sizeNavigator = hacker2.length-1;

while( sizeNavigator > 0){
  navigatorReverse += hacker2[sizeNavigator];
  sizeNavigator -=1;

}

console.log(navigatorReverse);


let result = hacker1.localeCompare(hacker2);

if(result > 0 ){
  console.log("The driver's name goes first");
} else if (result < 0) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}




let palindrome = prompt ("Digite nova palabra:");

let palindromeLowerCase = palindrome.toLowerCase().replace(re, '');

let tamanho = palindromeLowerCase.length;

for( x = 0; x < tamanho/2; x++){
  if(palindromeLowerCase[x] !== palindromeLowerCase[tamanho-1-x]){
     return console.log("No palindrome");
  } 

}








// Lorem ipsum generator

//a.Use switch..case to change greeting language.

let lang = "FR";
switch(lang){
  case "ES":
  console.log('Hola, mundo!');
  break;
  case "FR":
  console.log('Bonjour tout le monde!');
  break;
  default:
  console.log("Hello World!");
  break;
}
 
//b.The same above using if..else..if statement.
//  lang = prompt("Enter your language:");// this work with HTML page to promt and type the language.
lang = "ES";
let name = 'Smith';
if(lang == "ES") console.log('Hola, mundo!', name);
else if(lang == "FR") console.log('Bonjour tout le monde!', name);
else console.log('Hello World!',name);

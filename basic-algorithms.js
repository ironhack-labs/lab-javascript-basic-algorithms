var hacker1= "Elise";
alert("The driver's name is "+ hacker1);
var hacker2= prompt("What is the navigator's name?");
alert("The navigator's name is "+ hacker2);

//Comparaison longueur noms hackers//
if(hacker1.length>hacker2.length){
  alert("The driver has the longest name, it has "+hacker1.length+ " characters.");
}else if (hacker1.length<hacker2.length){
  alert("The navigator has the longest name, it has "+hacker2.length+ " characters.");
}else{
  alert("You both got equaly long names, "+hacker2.length+ " characters.");
};

//Afficher toutes les lettres du nom du conducteur en capitale séparé par un espace//
var driver="";
for(let i=0; i<hacker1.length; i++){
  driver+=hacker1[i]+" ";
};
alert(driver.toUpperCase());

//Afficher toutes les lettres du nom du conducteur en capitale séparé par un espace à dans le sens inverse//
var driverReverse="";
for(let i=hacker1.length-1; i>=0; i--){
  driverReverse+=hacker1[i]+" ";
};
alert(driverReverse.toUpperCase());

//Comparaison de l'ordre alphabétique des noms//
switch (hacker1.localeCompare(hacker2)){
  case 1:
  alert("The navigator's name goes first.");
  break;
  case 0:
  alert("What? the both have the same names?");
  break;
  case -1:
  alert("The driver's name goes first.");
  break;
  default:
  alert("Names can't be compared");
};

//Bonus Palindrome//
var word= prompt("Enter a word or a sentence.");
var newWord=word.replace(/\W/g,"");

var reverseNewWord ="";
newWord=newWord.toLocaleLowerCase();
for(let i=newWord.length-1; i>=0; i--){
  reverseNewWord+=newWord[i];
};

if (newWord==reverseNewWord){
  alert("It's a palindrom");
}
else {
  alert("It's not a palindrom");
};

//Bonus Lorem ipsum generator


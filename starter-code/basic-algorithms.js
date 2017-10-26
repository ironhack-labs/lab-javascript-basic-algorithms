//
// Names and Input
//
var driverName = "Juancho";
console.log ("The drivers name is " + driverName);

var navigatorName=""; //definimos un valor vacio para que no sea undefined y genere error en caso de que el usuario no introduzca ningún nombre en el formulario
navigatorName = prompt ("What's the navigator's name?");
console.log ("The navigator's name is " + navigatorName);


//
//Conditionals
//
var driverNameLength = driverName.length;
var navigatorNameLength = navigatorName.length;
if (driverNameLength > navigatorNameLength){
  console.log ("The Driver has the longest name, it has " + driverNameLength + " characters");
}
else if (driverNameLength < navigatorNameLength){
  console.log ("Navigator got the longest name, it has " + navigatorNameLength + " characters");
}
else{
  console.log ("wow, you both got equally long names, " + driverNameLength + " characters!!!!!!");
}


//
//Loops
//Driver's name in capital letters, separeted by space
//
console.log ("\n Driver's name in capital letters, separeted by space:")
for (i=0; i<driverNameLength; i++) {
  console.log (driverName[i].toUpperCase())
}

//
//Driver's name in reverse order
//
console.log ("\n Driver's name in reverse order:")
var reverseName ="";
for (i = driverNameLength-1 ; i>=0 ; i--) {
reverseName += driverName[i];
}
console.log(reverseName);


//
//What name goes first in alphabetical order
//
console.log ("\n What name goes first in alphabetical order?")
if (driverName.toUpperCase() < navigatorName.toUpperCase()){
  console.log (driverName + "\n The driver's name: " + driverName +" , goes first than " + navigatorName);
}
else if(driverName.toUpperCase() > navigatorName.toUpperCase() ){
  console.log (navigatorName + "\n Yo, the navigator's name: " + navigatorName + " goes first definitely than the drive's name: " + driverName);
}
else {
  console.log ("What?! You both got the same name?");
}


//
//PALINDROME
//
var palindrome = ""; //definimos un valor vacio para que no sea undefined y genere error en caso de que el usuario no introduzca nada en el formulario
// palindrome = prompt ("Introduzca un palíndromo a validar:?");



//
//LOREM IPSUM 
//
var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lectus semper, mollis urna sed, dictum mi. Nulla sit amet porttitor eros, a gravida metus. In lacinia massa ac orci ultrices, a laoreet lorem fringilla. Phasellus massa erat, efficitur nec quam porta, ultrices posuere leo. Integer quam lacus, iaculis eu enim nec, efficitur gravida ex. Nunc vel accumsan sapien. Cras sollicitudin mi vel neque congue mattis. Aliquam non imperdiet nisi, in tempor felis. Phasellus lobortis neque vitae eros porttitor, ut efficitur velit dictum. \n Proin eu blandit tellus. Nulla mollis est purus, nec euismod nisi aliquam quis. Mauris id faucibus ligula. In sit amet mi vel risus feugiat sodales vel sed velit. Nam mattis elit eu quam vulputate congue. Aliquam vulputate leo sed mattis laoreet. Nam pulvinar arcu porttitor lacus aliquet pretium. Vestibulum placerat porttitor lobortis. Vivamus in est vestibulum, viverra lacus venenatis, imperdiet lectus. Vivamus laoreet tempor ligula, eget scelerisque tellus congue sed. Aliquam auctor ante eget nulla suscipit, sed hendrerit purus sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sapien augue, mollis et sapien vestibulum, rutrum fringilla odio. Phasellus massa enim, scelerisque ut porta nec, consequat at velit. Fusce pellentesque vel eros a tristique. Pellentesque vel sapien lacinia, pellentesque nunc eu, cursus erat. \n Sed vitae diam venenatis nulla sagittis pellentesque eu et dui. Phasellus ultrices eleifend diam eget eleifend. Nunc pulvinar convallis ultrices. Etiam nec tellus sed quam venenatis viverra sit amet non magna. Pellentesque varius sapien nisl, at fermentum nisi cursus id. Cras sollicitudin, mauris vel vehicula eleifend, felis turpis aliquam sapien, non vulputate tellus dui venenatis metus. Mauris porttitor eu orci a faucibus. Aliquam sit amet tincidunt magna, quis tempus sem. Aenean aliquet lorem non molestie venenatis. Fusce condimentum nulla sit amet est vestibulum rutrum. Nam nec ligula arcu. Nam feugiat, sapien eget fringilla tristique, magna eros posuere massa, ac dignissim quam ante ac sapien. Praesent vel dolor metus." ;

//
//Counting the number of words:
var numberOfWords = 1;
for (i=0; i<loremIpsum.length; i++) {
  if (loremIpsum[i] === " ") {
    numberOfWords ++ ;
  }
}
console.log ("The lorem ipsum text has a total number of words of "+ numberOfWords + "\n");

//
//Counting how many times appears the latin word "et"
var etCounter = 0;
var etPosition = 0;
while (etPosition < loremIpsum.length){
   etPosition = loremIpsum.indexOf(" et", etPosition) ;
         if (etPosition === -1){
           break;
         }
         else{
               switch ( loremIpsum[ etPosition + 3 ] ){
                case " " :  //all this is to ensure that the word finish and that "et" is not part of another word
                case "." : 
                case "," :
                case "!" :
                case "?" :
                 etPosition += 3;
                 etCounter ++ ;
                console.log( "encontrado " + etCounter + " en " + etPosition); 
               
               }
           }
}

console.log( "\nThe latin word \"et\" appears " + etCounter + " times") ;


/* 
Nota: Mirar esto para hacerlo de esta otra manera y también para pulir la sigunte parte.

En el siguiente enlace hay una tabla en la que explican los distintos simbolos y su significado para buscar en una cadena:
https://efunctions.wordpress.com/2011/12/09/expresiones-regulares-en-javascript/

También está bien echar un vistazo a las funciones? string.search() y string.match() en mozilla:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

*/

//
//PALINDROME
//
var palindrome=""; 
palindrome = prompt ("Please, enter a palindrome to validate:");
console.log(palindrome);

var searchParameters = /[a-zA-Z]/g;
var palindromeJustLetters = palindrome.match(searchParameters) ;
var palindromeLength = palindromeJustLetters.length ;
console.log(palindromeJustLetters);
console.log(palindromeLength);


var halfPalindromeLength = Math.floor(palindromeJustLetters.length/2 );
console.log(halfPalindromeLength);


var firstHalfPalindrome = "" ;
for (i = 0 ; i < halfPalindromeLength ; i++) {
  firstHalfPalindrome += palindromeJustLetters[i].toLowerCase();
}
console.log(firstHalfPalindrome);

var secondHalfPalindrome = "" ;
for (i = (palindromeLength-1) ; i > halfPalindromeLength ; i--) {
  secondHalfPalindrome += palindromeJustLetters[i].toLowerCase();
}
console.log(secondHalfPalindrome);

if (firstHalfPalindrome === secondHalfPalindrome) {
  console.log("Yeah, this is an awesome palindrome!!!!")
}
else {
  console.log("...oops, I'm sorry, this is not a palindrome!!!!")
}



//names and input
var hacker1 = 'Tommy';
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("which is the navegator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length +  " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loops
var result = '';
for (i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result.trim());


var result = '';
for (i = hacker1.length - 1; i > -1; i--) {
  result += hacker1[i];
}
console.log(result);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

//Bonus
var palindrome = prompt("Show me your Palindrome");
palindrome = palindrome.replace(/ /g,'');
palindrome = palindrome.replace(/,/g,'');
palindrome = palindrome.replace(/!/g,'');
palindrome = palindrome.replace(/'/g,'');
palindrome = palindrome.replace(/\?/g,'');
palindrome = palindrome.replace(/"/g,'');
palindrome = palindrome.toLowerCase();
var palength = palindrome.length;
var resultado = true;
for (i = 0; i < palindrome.length; i++) {
  if (palindrome[i] !== palindrome[palength - i -1]) {
   resultado = false;
  }
}
if (resultado) console.log("Looks like we got a Palindrome!!");
if (!resultado) console.log("Have you seen any Palindrome?");


var chiquitum = "Lorem fistrum qué dise usteer mamaar hasta luego Lucas torpedo me cago en tus muelas. Apetecan quietooor sexuarl apetecan pupita caballo blanco caballo negroorl. Ese que llega condemor a gramenawer diodeno hasta luego Lucas. De la pradera no te digo trigo por no llamarte Rodrigor ese hombree pupita. Torpedo a peich ese pedazo de benemeritaar pecador diodeno quietooor va usté muy cargadoo a wan. Me cago en tus muelas quietooor de la pradera fistro ahorarr no puedor a peich hasta luego Lucas a gramenawer. No te digo trigo por no llamarte Rodrigor fistro al ataquerl a wan ese que llega la caidita no puedor te va a hasé pupitaa se calle ustée apetecan la caidita. Sexuarl papaar papaar diodeno caballo blanco caballo negroorl apetecan diodeno condemor no te digo trigo por no llamarte Rodrigor jarl te va a hasé pupitaa caballo blanco caballo negroorl. Torpedo pecador mamaar diodeno va usté muy cargadoo amatomaa llevame al sircoo a peich ese hombree ahorarr qué dise usteer. A wan ese que llega al ataquerl caballo blanco caballo negroorl tiene musho peligro apetecan por la gloria de mi madre no puedor. A gramenawer ahorarr va usté muy cargadoo me cago en tus muelas quietooor mamaar se calle ustée te voy a borrar el cerito apetecan. Pupita sexuarl va usté muy cargadoo ahorarr te voy a borrar el cerito de la pradera benemeritaar a gramenawer me cago en tus muelas te va a hasé pupitaa pupita. A peich ese que llega no te digo trigo por no llamarte Rodrigor condemor mamaar está la cosa muy malar quietooor te voy a borrar el cerito. Se calle ustée qué dise usteer torpedo benemeritaar. Se calle ustée fistro mamaar se calle ustée qué dise usteer ese hombree caballo blanco caballo negroorl llevame al sircoo. Amatomaa fistro torpedo apetecan te voy a borrar el cerito sexuarl la caidita jarl por la gloria de mi madre te va a hasé pupitaa.Torpedo benemeritaar amatomaa no te digo trigo por no llamarte Rodrigor te va a hasé pupitaa. Por la gloria de mi madre llevame al sircoo a gramenawer se calle ustée diodeno. Benemeritaar por la gloria de mi madre condemor caballo blanco caballo negroorl pupita quietooor a peich. Fistro papaar papaar jarl te voy a borrar el cerito te voy a borrar el cerito pupita. Ese que llega ahorarr condemor sexuarl ahorarr tiene musho peligro ahorarr está la cosa muy malar.";

var wordCount = chiquitum.split(" ");
console.log("3 paragraphs of 'Lorem Chiquitum' contain " + wordCount.length + " words.");

var etCount = chiquitum.match(/et/g).length;
var fistroCount = chiquitum.match(/fistro/g).length;
console.log("There are " + etCount + " latin words 'et' in the Chiquitum, but there are also " + fistroCount + " 'fistro's.");
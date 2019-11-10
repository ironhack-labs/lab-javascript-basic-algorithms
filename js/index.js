/// Iteration 1: Names and Input

var hacker1 = "Alberto";
console.log("The drive´s name is" , hacker1);
var hacker2 = prompt("what´s your name");

//var hacker2 = "Carlos";
console.log("The navigator´s name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
{
console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}
else if (hacker1.length < hacker2.length)
{
console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
}
else 
{
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters");
} 

// Iteration 3: Loops
//apartado 1
var contador = "";
for (i = 0; i < hacker2.lenght ; i++)
{
contador += hacker2[i].toUppercase();
}
console.log(contador);

//apartado 2
var contadorReverso = 0

for (i = 0; i < hacker2.length ; i ++)
{
  contadorReverso += hacker2[i].toLowerCase();
}
console.log(contadorReverso);

//apartado3

if (hacker1 > hacker2)
{
  console.log("The drive´s name goes first")
}
else if(hacker1 < hacker2)
{
  console.log("Yo, the navigator goes first definitely");
}
else
{
  console.log("What?! You both have the same name ?")
}

//Bonus 
//apartado 1
var paragraphs = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum et."
//aparatado2 
var words = paragraphs.split(' ');
console.log(words.length);

//apartado3
var contador = 0;

for (var i = 0; i< words.length;i++)
{
  if (words[i] === "et")
  {
    contador ++;
  }
}
console.log(contador);


//Bonus 2

var str = prompt("verification palindrome")
function palindrome(str)
{
if (str === str.split(' ').reverse().join(''))
return;
}

palindrome(str);
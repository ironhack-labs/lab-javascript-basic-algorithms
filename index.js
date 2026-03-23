// Iteration 1: Names and Input
let hacker1 = "hacker2";
console.log("The driver's name is " + hacker1);
let hacker2 = "hacker1";
console.log("The navigartor's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) console.log("The driver has the longest name, it has " +hacker1.length+ " characters")
if (hacker1.length < hacker2.length) console.log("It seems that the navigator has the longest name, it has "+hacker2.length+ " characters.")
if (hacker1.length == hacker2.length) console.log("Wow!, you have equally long names, "+hacker1.length+" characters!")
// Iteration 3: Loops
let capitalizedAndSpaced = "";
let reverse = "";

// 3.1
for (let i = 0; i < hacker1.length; i++)
  capitalizedAndSpaced += hacker1.charAt(i).toUpperCase() + " ";
// 3.2
for (let i = hacker2.length; i > 0; i--) reverse += hacker2[i - 1];

// 3.3
const driver = capitalizedAndSpaced;
const navigator = reverse;
let isHacker1BiggerThan2;
hacker1.length < hacker2.length
  ? (isHacker1BiggerThan2 = false)
  : (isHacker1BiggerThan2 = true);
let smaller;
if (isHacker1BiggerThan2) smaller = hacker2.length;
if (!isHacker1BiggerThan2) smaller = hacker1.length;
let isSolved = false;
while (!isSolved) {
  if (hacker1 == hacker2) {
    console.log("What?! You both ave the same name?");
    break;
  }
  for (let i = 0; i < smaller; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log(driver + " goes first." + "\r\n" + navigator);
      isSolved = true;
      break;
    }
    if (hacker1[i] > hacker2[i]) {
      console.log(
        "Yo, "+navigator + " goes first, definitely" + "\r\n" + driver,
      );
      isSolved = true;
      break;
    }
  }
  if (isSolved) break;
  if (hacker1 < hacker2)
    console.log("The " + driver + " goes first." + "\r\n" + navigator);
  if (hacker1 > hacker2)
    console.log("The " + driver + " goes first." + "\r\n" + navigator);
}

// Bonus 1
let longText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \r\n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? \r\n At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
let numEt = 0;
let twoChars = "";

for (i = 1; i < longText.length; i++)
{
  twoChars = longText[i-1] + longText[i];
  if (twoChars.toLowerCase() == "et") numEt++;
}
console.log("Hay "+numEt+" 'et' en el párrafo: \r\n\n " +longText);

// Bonus 2
let phraseExample = "A man, a plan, a canal, Panama!"
let compressedPhrase = "";
let reverseCompPhr = "";
let isAPalindrome = true;
for (i = 0; i < phraseExample.length; i++)
{
  if (phraseExample[i] == ',' ||phraseExample[i] == " "||phraseExample[i] == "." ||phraseExample[i] == "!"||phraseExample[i] == "'"||phraseExample[i] == "?"){}
  else {compressedPhrase +=phraseExample[i].toLowerCase();}
  // Eliminación de caracteres especiales comunes.
}

for (i = compressedPhrase.length; i > 0; i--)
  {
    reverseCompPhr +=compressedPhrase[i-1];
    if (reverseCompPhr[compressedPhrase.length-i] != compressedPhrase[compressedPhrase.length-i]) {isAPalindrome = false; break;}
  } 
  console.log(compressedPhrase+"\n")
if (isAPalindrome) console.log(phraseExample+" es un palíndromo");
else console.log(phraseExample+ " no es un palíndromo.");
/*
Resolvamos por bucle. 
¿Sabemos cuántas iteraciones vamos a hacer? -> No. Por lo tanto usaremos un while. 
Tenemos dos variables, la A y la B. 
Tenemos 3 posibles resultados: 
A>B
A<B
A=B

1º Si A=B -> Hemos acabado. 
2º Si A != B -> Entramos en bucle while. 

¿Qué hace el while?

Compara caracter a caracter por orden lexicográfico. Cuando encuentra una diferencia, determina qué palabra es la que "gana". 

Pepe y Pepa

Carlos y María

¿Cómo podemos comparar letra a letra? -> Usando bucles. 

VariableA = Pepe
VariableB = Pepa

Iteración 1 -> P = P -> Sigue buscando
Iteración 2 -> e = e -> Sigue buscando
Iteración 3 -> p = p -> Sigue buscando
Iteración 4 -> e != a -> a gana a e.


while(No encontrado la solución){
    compara letra X de Variable A con letra X de variable B. 
}



VariableA = Ana  -> ["A","n","a"] -> ¿Cuál es la posición 3? -> Espacio o null o undefined.
VariableB = Anais


let found = 0;
let i = 0;

if(VariableA === VariableB) found = 3;

while(found == 0){
    if(VariableA[i] > VariableB[i]) found = -1; ----> Iteración 0: if("a" > "e") -> no entramos en el if. 
    if(VariableA[i] < VariableB[i]) found = 1;  ----> Iteración 0: if("a" < "e") -> entramos en el if, la variable found pasa a ser 1 y salimos del bucle.
    i++;
}

¿Cómo se lee el bucle de arriba?
Ve letra por letra comparando hasta encontra una letra que no coincida. Devuéveme 1 o -1 en función a qué palabra va antes si la palabra A o la palabra B. 

Mientras no encuentres una solución:
Compara la letra de la posición i de cada palabra. Si sigues sin encontrar la solución i++.
                                                   Si encuentras la solución, dame -1 si A va después alfabéticamente. Dame 1 si A va antes alfabéticamente.  


if(found == -1) console.log(VariableB va antes que VariableA); // Iteración 0 -> found != -1 -> No se activa el if. 
if(found == 1) console.log(VariableA va antes que variableB);  // Iteración 0 -> found == 1 -> Carlos va antes que María.
if(found == 3) console.log("La palabra es la misma")




*/

// let a = lexicName(hacker1);

// function lexicName(name) {
// let lexic= "abcdefghijklmnñopqrstuvwxyz0123456789";
// let letterValue= 0;

// for (let i = 0; i < lexic.length; i++)
// {
//     if (lexic[i].toLowerCase() == name[i].toLowerCase()) {letterValue = i; break;}
// }
// }

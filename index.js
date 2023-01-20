
/*Instruções
Iteração 1: Nomes e Entrada
1.1 Crie uma variável hacker1com o nome do piloto.
1.2 Imprimir "The driver's name is XXXX".
1.3 Crie uma variável hacker2com o nome do navegador.
1.4 Imprimir "The navigator's name is YYYY".

Iteração 2: condicionais
2.1. Dependendo de qual nome é mais longo , imprima:
- The driver has the longest name, it has XX characters.ou
- It seems that the navigator has the longest name, it has XX characters.ou
- Wow, you both have equally long names, XX characters!.

Iteração 3: Loops
3.1 Imprima os caracteres do nome do motorista, separados por espaço, e em letras maiúsculas , ou seja, "J O H N".

3.2 Imprima todos os caracteres do nome do navegador, na ordem inversa, ou seja, "nhoJ".

3.3 Dependendo da ordem lexicográfica das strings, imprima:

The driver's name goes first.
Yo, the navigator goes first definitely.
What?! You both have the same name?


// Iteration 2: Conditionals



// Iteration 3: Loops
*/



let hacker1 =  "Lucas Padueli";
let hacker2 =    "Joao Victor";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker2 > hacker1){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


let spacedName = "";

for(let i = 0; i < hacker1.length;i++){
    spacedName += hacker1[i] + " "
}
console.log(spacedName.toUpperCase());

let reversedName = "";
for(let i = hacker2.length-1; i >= 0; i--){
    reversedName += hacker2[i]
}
console.log(reversedName);

if(hacker1.toUpperCase().localeCompare(hacker2.toUpperCase())===1){
    console.log("Yo, the navigator goes first definitely")
}

else if(hacker1.toUpperCase().localeCompare(hacker2.toUpperCase())===-1){
    console.log("The driver has the longest name, it has XX characters")
}

else if(hacker1.toUpperCase().localeCompare(hacker2.toUpperCase())===0){
    console.log("What?! You both have the same name?")
}


/* bonus */

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus faucibus urna, eget mattis quam. Sed eget purus nec sapien auctor sodales. Ut ut porta felis. Etiam laoreet consectetur nibh non elementum. Maecenas nec tortor in lorem cursus semper. Etiam in urna felis. Aliquam efficitur vehicula magna vel venenatis. Vivamus at venenatis augue. Morbi aliquet ipsum ac pulvinar condimentum. Donec pharetra turpis vel felis sodales volutpat.

Ut ac tellus ut purus venenatis dignissim sed id nunc. Sed ac urna eu nunc dignissim vestibulum eget vel ex. Pellentesque ac urna urna. Donec tincidunt nisi nibh, in viverra sem elementum sed. Sed vel laoreet metus. Nulla commodo mauris quis odio mollis pulvinar. Donec vel elementum odio.

Sed enim nulla, dignissim finibus nulla id, semper pulvinar dolor. Morbi semper viverra augue, eu pellentesque erat vulputate vitae. Curabitur lacinia, sem et rhoncus blandit, lacus tellus dapibus odio, id posuere nibh mi sit amet arcu. Morbi id lobortis urna. Integer arcu dolor, fringilla sed sem gravida, congue egestas risus. Duis quis libero et metus lacinia condimentum eu id leo. Mauris non magna in eros viverra consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi sagittis dolor in odio placerat commodo. Duis nec nisl urna. Etiam sit amet vehicula purus, tincidunt posuere massa. Curabitur feugiat ante urna, vitae tempus magna interdum eu. Cras arcu libero, semper quis sem sit amet, tristique posuere tortor. Integer at vestibulum dolor. Fusce eget rhoncus urna. Praesent hendrerit tincidunt risus, sed luctus elit tincidunt et.`


let seppareted = longText.split(" ");
let textWordsNum = seppareted.length;
console.log(textWordsNum)

let count = 0;

for(let i = 0; i < seppareted.length; i++){
  
  if(seppareted[i]==="et"){
    count ++
  }
  
}
console.log(count);


let phraseToCheck = "step on no pets";
let invertedPhrase = "";

for (let i = phraseToCheck.length-1;i >= 0; i--){
  
  invertedPhrase += phraseToCheck[i]
  
}

if(phraseToCheck===invertedPhrase){
  console.log("It's a Palindrome")
}

else{
  console.log("not a Palindrome")
}



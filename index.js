//Interaction 1

let hacker1= 'Pepe';
console.log(`The driver's name is ${hacker1}`);

let hacker2= 'Dani';
console.log(`The navigator's. name is ${hacker2}`);

//Interaction 2

if (hacker1.lenght > hacker2.lenght) {console.log(`The driver has the longeest name, it has ${hacker1.length} characters`)}

else if (hacker2.length > hacker1.length) {console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)}

else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)}

//Interaction3
let printHacker1 = ''

for (let i=0; i<hacker1.length; i++) {
  printHacker1 += `${hacker1[i].toUpperCase()} `
} 
console.log(printHacker1)


//Bonus one Realizado por Pepe Alacid

let longText =`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`

let wordsCount = longText.split(' ').length;

console.log (`There are ${wordsCount} at the paragraph`);






let etCount=0;

for (i=0; i<longText.length; i++){
    let fourChars = longText[i] + longText[i+1]+longText[i+2] + longText[i+3];
  
  if (fourChars === " et ") {
    etCount++;}
}

if (etCount===1){console.log(`The word "et" appears 1 time in the paragraph`)}

else {
console.log(`The word "et" appears ${etCount} times in the paragraph`)}


//Bonus two

let phraseToCheck = '';

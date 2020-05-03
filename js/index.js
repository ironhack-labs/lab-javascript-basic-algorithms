// Iteration 1: Names and Input

const hacker1 = "Mateo";
const hacker2 = "Rodrigo";

console.log(`"The driver's name is ${hacker1}"`);
console.log(`"The navigtor's name is ${hacker2}"`);

const h1length = hacker1.length;
const h2length = hacker2.length;

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length) {
    console.log(`The driver has the longest name, it has ${h1length} characters`);
  } else if ( h2length < h1length) {
    console.log(`It seems that the navigator has the longest name, it has ${h2length} characters`);
  } else 
    console.log(`Wow, you both have equally long names, ${h1length} characters!`);

// Iteration 3: Loops

let newDriver="";

for (let i = 0; i < h1length; i++){
 newDriver += hacker1.charAt(i) + " ";
}

let upperCased = newDriver.toUpperCase()
console.log(`${upperCased}`);

let newDriverDown ="";
let counter2 = 0;
let counterLength = h1length - 1;

while (counter2 <= counterLength){
  newDriverDown += hacker1[counterLength];
  counterLength--;
}

console.log(`${newDriverDown}`);


let firstLetterHacker1 = hacker1.charCodeAt(0);
let firstLetterHacker2 = hacker2.charCodeAt(0);

console.log(`${firstLetterHacker1}`);
console.log(`${firstLetterHacker2}`);


if (firstLetterHacker1 < firstLetterHacker2) {
  console.log("The driver's name goes first");
} else if (firstLetterHacker1 > firstLetterHacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else
  console.log("What?! You both have the same name?");


 //bonus 1
 
  const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;

let numWords;

function WordCount(paragraph) {
  if (paragraph.split(" ")  ) 
  return paragraph.split(" ").length;
}

console.log(WordCount(paragraph));

function WordCountEt(paragraph) {
  let count = (paragraph.match(/et/g) || []).length;
return count;

}

console.log(WordCountEt(paragraph));

//bonus 2

function phraseToCheck(str) {


for (i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    return false;
  }
    
  }
return true;
}

phraseToCheck("amor roma")




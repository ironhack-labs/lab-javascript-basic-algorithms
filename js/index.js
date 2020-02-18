// Iteration 1: Names and Input
let hacker1 = 'Pedro';
console.log('the drivers name is '+ hacker1);

let hacker2 = 'Pedro'
console.log('the navigators name is '+ hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`the driver has the longest name, it has ${hacker1.lenght} characters`);
} else if (hacker1.length < hacker2.length){
   console.log(`the navigator has the longest name, it has ${hacker2.length} characters`)
} else{ 
  console.log(`wow, you both have equally long names ${hacker2.length}characters!`)
}


// Iteration 3: Loops
console.log(hacker1.toUpperCase());

let mayus = hacker1.toUpperCase();

let arr = (mayus.split(""));
console.log(mayus.split(""));

console.log(arr.reverse())

console.log(arr.join(" "));



function lexicOrder (hacker1, hacker2){
  if (hacker1.localeCompare(hacker2) == 1){
  return "Yo, the navigator goes first definitely."
} else if (hacker1.localeCompare(hacker2)== -1){
  return "The driver's name goes first"
 }else{
   return "What?! You both have the same name?"
 }
}
lexicOrder(hacker1, hacker2);


// Bonus 1

let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. , comes from a line in section 1.10.32."

console.log(`el texto tiene ${lorem.trim().replace(/|,|!/g,' ').split(' ').length} palabras`);

let arr = lorem.split(" ");

console.log(arr.length);




let contador = 0;


for (let i = 0; i < arr.length; i++){

if (arr[i].toLowerCase() === "et"){contador++}
}
console.log(contador)

// Bonus 2

var phraseToCheck = "Amor, Roma";
var fraseLimpia = (phraseToCheck.replace(/ |,|!/g,""))

var fraseInvertida = "";


for (let i=fraseLimpia.length-1; i>=0; i--){
fraseInvertida += fraseLimpia.charAt(i)
console.log(fraseInvertida);
}

  if (fraseInvertida.toLowerCase() == fraseLimpia.toLowerCase()){
    console.log('Esto es un palindromo')
  }else{
    console.log('NO es un palindromo')
  }



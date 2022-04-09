// Iteration 1: Names and Input
let hacker1 = "Carlos";
let hacker2 = "Cristhian";

let length1 = hacker1.length;
let length2 = hacker2.length;

if (length1>length2){
  console.log (`The driver has the longest name, it has ${length1} characters`);
}else if (length2>length1){
  console.log(`It seems that the navigator has the longest name, it has ${length2} characters.`)
}else if (length1===length2){
  console.log(`Wow, you both have equally long names, ${length1} characters!`);
};
// Iteration 2: Conditionals

let driver = hacker1.toUpperCase();
let driverSeparated = driver.split('');
driver = driverSeparated;

let navigator = hacker2.split('');
let navigatorReverse = navigator.reverse();
navigator = navigatorReverse.join('');

console.log(driver[0]+' '+driver[1]+' '+driver[2]+' '+driver[3]+' '+driver[4]+' '+driver[5]);
console.log(`${navigator}`);

// Iteration 3: Loops

let primero = hacker1.localeCompare(hacker2);

if (primero===-1){
  console.log("The driver's name goes first.");
}else if (primero===1){
  console.log("Yo, the navigator goes first definitely.");
}else{
  console.log('What?! You both have the same name?');
};

//BONUS 1
let paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;

let divide = paragraph.split(' ');
let words = divide.length;

let wordEt = paragraph.includes(' et ');
let divide2 = paragraph.split('  et ');
let wordsEt = divide2.length;


console.log('Number of words:'+" "+words);
console.log('Number of word Et:'+' '+wordsEt);


//BONUS 2

let palindromo = "Amor,Roma";
palindromo = palindromo.toUpperCase;
palindromo = palindromo.split("");
palindromo = palindromo.reverse();
palindromo = palindromo.join();

let positive = "";
let negative = "";

for (i=0;i<palindromo.length;i++){
  if (prueba[i] === '' || prueba [i] === ',' || prueba[i] === '?' || prueba[i] === '!' || prueba[i] === '.'){
    continue;
  }
  positive += palindrome[i];
}

for (i=palindromo.length;i>=0;i--){
  if (prueba[i] === '' || prueba [i] === ',' || prueba[i] === '?' || prueba[i] === '!' || prueba[i] === '.'){
    continue;
  }
  negative += palindrome[i];
}

if (positive === negative){
  console.log("Es un palindromo");
}else{
  console.log("No es un palindromo");
}

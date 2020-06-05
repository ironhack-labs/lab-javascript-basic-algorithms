// Iteration 1: Names and Input
let hacker1 = 'Pierre-Alderic';
let hacker2 = 'Claire';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
//1. Déterminer la taille du prénom du driver et du navigateur
if(hacker1.length > hacker2.length) {
    console.log(`The driver's name has ${hacker1.length}`);
}else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops
//1. Créer une string avec le nom du driver en majuscule et espacé
let prenomCapital = ""; // Créer une string pour afficher le prenom sur une seule ligne
for (let i = 0; i < hacker1.length; i++) {
  prenomCapital = prenomCapital + " " + hacker1[i].toUpperCase(); // variable prenom et on rajoute + " " + pour afficher les espaces
}
console.log(prenomCapital.trim()); // la méthode trim() permet d'enlever les espaces entre la lettre et la quote


//2. Créer le prénom du navigateur à l'envers
let result = "";
for (let i = 0; i < hacker2.length; i++) {
  let letter = hacker2[i];
  result = letter + result; // Concatenation , si on fait l'inverse, ça fait "Claire"
}
console.log(result);

//3. Créer une boucle et une condition pour comparer le driver et le navigateur alphabétiquement
let sameName = true; // J'initialise cette variable à true : ça veut dire que la lettre du hacker1 est la même que la lettre du hacker2
for (let i = 0; i < hacker1.length && i < hacker2.length; i++) {
  let compareLetter = hacker1[i] > hacker2[i];
  if (hacker1[i] < hacker2[i]) {
    sameName = false;
    console.log("The driver's name goes first.");
    break; // Je n'oublie pas d'ajouter break pour sortir de la boucle dans le cas où c'est la lettre du driver qui est placé en premier dans l'alphabet
  } else if (hacker1[i] > hacker2[i]) {
    sameName = false;
    console.log("Yo, the navigator goes first definitely.");
    break; // Je n'oublie pas d'ajouter break pour sortir de la boucle dans le cas où c'est la lettre du navigateur qui est placé en premier dans l'alphabet
  }
}
if (sameName) {
  console.log("What?! You both have the same name?");
}

let compareName = hacker1.localeCompare(hacker2);
console.log(compareName); // Methode + simple et moins longue mais ce n'est pas une boucle



/*Bonus 1*/
// 1.Créer une variable avec 3 paragraphes dedans.
// 2.Compter le nombre de mots dans la variable


let threeParagraphes = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

let countWords = 0;
for(let i = 0; i < threeParagraphes.length; i++) {
  if(threeParagraphes[i] === " ") {
    countWords += 1;
  }
}
console.log(countWords); 


// 3. Compter le nombre de fois où le mot Latin "et" apparaît dans ma variable
let wordEt = 0;
let words = threeParagraphes.split(" "); // La méthode .split() va découper mon paragraphe
for(let i = 0; i < words.length; i++) {
  if(words[i] === "et") { // Je fais une boucle sur ma variable words pour qu'il trouve le mot "et"
    wordEt += 1;
  }
}
console.log(wordEt); 

/*Bonus 2*/
// Créer une variable phraseToCheck, lui assigner une valeur et vérifier si c'est un Palindrome

let phraseToCheck = "lamor romal";
let resultPalindrome = true;
for (let i = 0; i < phraseToCheck.length; i++) {
  let letterWord = phraseToCheck[i]; // Variable qui passe sur mes lettres de la gauche vers la droite (de l'index 0 au dernier index de la chaine)
  let letterWord2 = phraseToCheck[phraseToCheck.length - 1 - i]; // Variable qui passe sur mes lettres de la droite vers la gauche (de la chaine(-1) à l'index 0)
  if (letterWord !== letterWord2) { // JE SUIS DANS MA BOUCLE .Si des lettres ne sont pas égales, c'est false et ça sort de mon code. Ex = roma amir, ça passe au "r" mais pas au "i"
    resultPalindrome = false;
    break;
  }
}
if (resultPalindrome === true) {
  console.log("This is a Palindrome");
} else {
  console.log("This is not a Palindrome");
}
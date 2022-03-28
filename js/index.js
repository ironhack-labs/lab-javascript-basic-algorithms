// Iteration 1: Names and Input
let hacker1 = "Jide";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Thu";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};

// Iteration 3: Loops
//3.1
let driverTrick = "";
for (i = 0; i < hacker1.length; i++) {
  driverTrick = driverTrick + " " + hacker1[i].toUpperCase();
};

console.log(driverTrick);

//3.2
let navigatorTrick = "";
for (i = (hacker2.length - 1); i >= 0; i--) {
  navigatorTrick += (hacker2[i]);
};
console.log(navigatorTrick);

//3.3
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log(`What?! You both have the same name?`)
}


//Bonus 1
let text = `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.

On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).

Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.`
let arrayText = text.split(" ")
let textWord = arrayText.length
console.log(textWord)

let arrayEt = []
arrayText.map(function (element) {
  if (element.startsWith("et")) {
    arrayEt.push(element)
  }
})
console.log(arrayEt.length)


//Bonus 2
let randomPhrase = "race car";

function checkPalindromes(phraseToCheck) {
  let phraseFinal = "";
  phraseToCheck = phraseToCheck.replace(",", "").replace(" ", "").toLowerCase();

  for (i = (phraseToCheck.length - 1); i >= 0; i--) {
    phraseFinal += phraseToCheck[i];
  }

  if (phraseToCheck === phraseFinal) {
    console.log(`This is a Palindrome`)
  } else {
    console.log(`This is not a Palindrome`)
  }
};

checkPalindromes(randomPhrase);
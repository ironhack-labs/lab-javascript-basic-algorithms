// Iteration 1 : Names and Input
// Identification de l'équipe pair programming
const hacker1 = "Nina";
const hacker2 = "Enine";

console.log(`The driver's name is ${hacker1}`); // ==> "The driver's name is Nina"
console.log(`The navigator's name is ${hacker2}`); // ==> "The navigator's name is Enine"



// Iteration 2: Conditionals
// Trouver le plus long des noms et imprimer son nombre de caractères

var longdriverName = hacker1.length; // ==> 4 pour Nina driver
var longnavigName = hacker2.length; // ==> 5 pour Enine navigator

if (longdriverName > longnavigName){
  console.log(`The driver has the longest name, it has ${longdriverName} characters.`);
} else if (longdriverName < longnavigName){
  console.log(`It seems that the navigator has the longest name, it has ${longnavigName} characters`);
} else if (longdriverName === longnavigName){
  console.log(`Wow, you both have equally long names, ${longdriverName} characters!`);
} // ==> "It seems that the navigator has the longest name, it has 5 characters"



//  Iteration 3: Loops
//3.1 Transformer nina en N I N A

let str ='';
for (i = 0; i < hacker1.length; i++){
  if(hacker1[i] === hacker1.length){ // Help. pour suppr. l'espace après la dernière lettre ne marche pas !
    str = str + hacker1[i].toUpperCase();
    }else{
    str = str + hacker1[i].toUpperCase() + ' ';
  };
};

console.log(str);


//3.2 Transformer Enine en eninE
console.log(hacker2.split("").reverse().join("")); // eninE


// 3.3 Classer dans l'ordre lexicographique.
// Utilisation de .localeCompare() pour savoir l'ordre lexicographic 
console.log(hacker1.localeCompare(hacker2)); // ===> 1 ce qui veut dire que OUI : Nina est avant Enine.


// Imprimer des chaînes sous conditions.
if(hacker1.localeCompare(hacker2) === 1){
  console.log(`The driver's name goes first.`)
} else if(hacker1.localeCompare(hacker2) === -1){
  console.log(`Yo, the navigator goes first definitely.`)
} else if(hacker1.localeCompare(hacker2) === 0){
  console.log(`What?! You both have the same name?`);
}


// //Bonus 1
//Generate 3 paragraphs. Store the text in a variable type of string.

let lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet leo quis arcu ornare rhoncus at quis neque. Fusce nec porta neque. Nullam efficitur nunc nec eros lacinia, eu consectetur lectus ornare. Quisque magna lacus, pretium sed mauris ac, dapibus blandit nulla. Maecenas nec justo maximus, laoreet justo sed, eleifend est. Nam lorem tortor, accumsan pharetra mauris aliquam, sollicitudin pharetra lorem. Pellentesque faucibus pretium odio, eget viverra mauris mollis vitae. Aliquam quis lectus libero. Etiam ac gravida nunc. Quisque non placerat quam. Phasellus nec ultricies justo.Nunc rutrum est sit amet mi eleifend elementum. Nunc tempus, quam eu cursus eleifend, lacus turpis pharetra est, eu finibus ante augue ut risus. Sed condimentum id lorem quis tincidunt. Donec nisl neque, commodo vitae mollis eu, porttitor sed erat. Aliquam at ex sapien. Ut sed euismod erat. Curabitur massa nibh, commodo in semper at, rutrum faucibus sapien. Sed massa nibh, rhoncus commodo rutrum vitae, dignissim ac metus. Etiam faucibus sem vel magna imperdiet, at aliquet sapien lacinia. Nunc elementum dignissim malesuada. Nulla facilisi. Fusce arcu ipsum, egestas et enim eu, imperdiet mattis lacus. Praesent finibus in tortor a finibus. Vivamus sagittis elit in facilisis sollicitudin. In sed purus velit. Aliquam et sapien euismod, porttitor dolor eu, imperdiet nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce et sapien ut dui sodales mattis. Curabitur id porta neque, eget maximus sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus dui erat, pulvinar et ornare quis, volutpat ultricies augue. Vivamus rutrum tortor arcu, non volutpat sem cursus a."

// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

for(let i = 0; i < lipsum.length; i++){
  if (i === ' ' || '.') {
    console.log(lipsum.length - 1);
  }
  // if (i === "et") {
  //   var numberOfTimes += 1;
  //   console.log(numberOfTimes);    // Bloqué
  // }
}

//Bonus 2
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.

var phraseToCheck = "Mon prénom est un palindrome, il peut se lire dans les deux sens, je m'appelle enine"

var phraseToCheckArr = phraseToCheck.split(' ');

for (let i = 0; i <phraseToCheckArr.length; i++){
  if (phraseToCheckArr[i].split("").reverse().join("") === phraseToCheckArr[i]) {
    console.log('Hey there is a palindrome in your phrase !');
    }
}




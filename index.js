//1.ITERATION//
let hacker1 = "Alberto";
console.log("The driver's name is", hacker1);

let hacker2 = "Juan";
console.log("the navigator's name is", hacker2);

//2.CONDITIONALS//
let longitudHacker1 = hacker1.length;
let longitudHacker2 = hacker2.length;

if (longitudHacker1 > longitudHacker2) {
  console.log("The driver has the longest name, it has " + longitudHacker1 + " characters.");
}
else if (longitudHacker2 > longitudHacker1) {
  console.log("It seems that the navigator has the longest name, it has " + longitudHacker2 + " characters.");
}
else {
  console.log("Wow, you both have equally long names, " + longitudHacker1 + " characters!.");
}

//3.LOOPS//
let result = "";

for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase();
}

console.log(result);

let result2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  result2 += hacker2[i];
}

console.log(result2);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
}
else {
  console.log("What? You both have the same name?");
}

//BONUS 1//
const parrafo1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const parrafo2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
const parrafo3 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

const longText = parrafo1 + parrafo2 + parrafo3;

let words = longText.split(" ");

const wordsNum = words.length;

console.log(wordsNum);

let etWord = longText.split(" ");

let count = 0;

for (let i = 0; i < etWord.length; i++) {
  if (etWord[i].toLowerCase === "et"){
    count += 1;
  }
}

console.log(count); //No se me ocurre otra forma de hacerlo//

//BONUS 2//
const phraseToCheck = "reconocer";

let resultBonus2 = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  const char = phraseToCheck[i];

  resultBonus2 += char;
}

if (resultBonus2 === phraseToCheck) {
  console.log("SI");
}
else {
  console.log("NO");
}
// Iteration 1: Names and Input
const hacker1 = "Atanas";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "John";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let spacedLetterName = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    spacedLetterName += hacker1[i].toUpperCase();
    break;
  }
  spacedLetterName += `${hacker1[i].toUpperCase()} `;
}
console.log(spacedLetterName);

let navigatorNameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReverse += hacker2[i];
}
console.log(navigatorNameReverse);

/////////////////////////////////////////////////////////////////

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

/////////////////////////////////////////////////////////////////

const longText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas minus itaque iusto animi ipsa consequuntur vero dignissimos a fuga debitis fugit harum blanditiis voluptatum dolor, consectetur eaque libero maxime quisquam alias. Ex ducimus placeat iusto, a quia illum laborum beatae neque eum natus. Sit voluptatum, exercitationem ad a officia amet corrupti voluptatibus blanditiis quas maiores, ex, nisi doloremque corporis repudiandae aspernatur dignissimos earum ut? Deserunt et explicabo adipisci harum, tempora nihil quaerat fugiat optio, a voluptate quam culpa aut nobis omnis cupiditate quos doloremque autem, ut est. Doloremque officia illo enim architecto cumque quibusdam magnam qui dolorem laboriosam aspernatur reiciendis blanditiis ratione, asperiores delectus accusantium odit sed quae a esse quisquam ab minima ipsam numquam? Ad reprehenderit repellat fuga ipsum facere aliquam, iusto illum sapiente eveniet perferendis maxime commodi? Voluptate voluptatum est aperiam commodi, debitis incidunt recusandae distinctio natus rem quae ut minus harum modi totam cupiditate laboriosam? Molestiae asperiores debitis doloribus repellendus illum pariatur nulla sit labore eius placeat odit temporibus maiores provident fugit, nisi iure vero, suscipit autem molestias necessitatibus, id voluptas voluptatum ea deserunt. Sequi nisi minima repudiandae quibusdam accusamus placeat id pariatur, assumenda consectetur quos illum, esse quis dolorum natus ad maxime labore molestiae illo autem enim quod odio commodi eaque porro? Explicabo qui fugit quaerat, quo illum autem possimus optio dolore labore quidem iusto, molestias hic alias similique fuga eveniet numquam? Non deleniti dolorum sit facilis sunt in architecto vitae ducimus. Sunt culpa tempora cupiditate dolorem, deserunt debitis at minima rem quisquam illum. Quo eius ipsa eos, dolorem tenetur fugit reprehenderit magnam autem vero quasi incidunt alias sint velit deserunt ad perspiciatis provident adipisci quos ut minima ipsam libero quaerat hic? Esse minus veniam ex, mollitia vel magnam error voluptatem at accusantium, nulla natus rem consequatur. Blanditiis tempora doloribus repellendus numquam nisi iusto, ducimus quos corporis suscipit nemo amet praesentium magnam quisquam explicabo, repudiandae id odio ut excepturi aperiam itaque. Numquam, nisi. Officia nam facere nihil tempora. Aut explicabo dolore, esse cupiditate quo ipsam perferendis voluptas non qui, facilis ex sunt cum ipsum atque? Tempore, quo, deserunt eos asperiores unde harum doloribus aperiam ex eligendi cumque repellat, delectus neque temporibus non eius doloremque rerum. Repellat voluptatum ex autem sapiente!";

let spaceCounter = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    spaceCounter++;
  }
}
const numberOfWords = spaceCounter + 1;
console.log(numberOfWords);

let substrCounter = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] + longText[i + 1] === "et") {
    substrCounter++;
  }
}
console.log(substrCounter);

/////////////////////////////////////////////////////////////////

const phraseToCheck = "A man, a plan, a canal, Panama".toLocaleLowerCase();

let noIntervalsPhraseToCheck = "";
let noIntervalsPhraseToCheckReverced = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] !== " " && phraseToCheck[i] !== ",") {
    noIntervalsPhraseToCheck += phraseToCheck[i];
  }
}

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  if (phraseToCheck[i] !== " " && phraseToCheck[i] !== ",") {
    noIntervalsPhraseToCheckReverced += phraseToCheck[i];
  }
}

const isPalindrome =
  noIntervalsPhraseToCheck.localeCompare(noIntervalsPhraseToCheckReverced) ===
  0;

if (isPalindrome) {
  console.log("The word is a palindrome");
} else {
  console.log("The word is not a palindrome");
}

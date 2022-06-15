let hacker1 = "Palash";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Chadha";
console.log(`The driver's name is ${hacker2}`);
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
let h1str = "";
for (let i = 0; i < hacker1.length - 1; i++) {
  h1str = h1str + hacker1.toUpperCase()[i] + " ";
}
console.log(h1str + hacker1.toUpperCase()[hacker1.length - 1]);

let h2str = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  h2str += hacker2[i];
}
console.log(h2str);

switch (hacker1.localeCompare(hacker2)) {
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
  default:
    console.log("What?! You both have the same name?");
}
let para1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let para2 =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
let para3 =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

function calculateWordsAndET(str) {
  let countWords = 0;
  let countET = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      countWords++;
    } else if (str[i] + str[i + 1] === "et") {
      countET++;
    }
  }
  console.log(`the words are ${countWords} and the et are ${countET}`);
}
calculateWordsAndET(para1);
calculateWordsAndET(para2);
calculateWordsAndET(para3);

function isLetter(char) {
  return char.toUpperCase() != char.toLowerCase();
}

let phraseToCheck = "Was it a car or a cat I saw?";
let newPhrase = "";
let reversePhrase = "";
for (let letter of phraseToCheck.toLowerCase()) {
  if (isLetter(letter)) {
    newPhrase += letter;
  }
}
for (let i = newPhrase.length - 1; i >= 0; i--) {
  reversePhrase += newPhrase[i];
}
if (newPhrase === reversePhrase) {
  console.log("it is a palindrome!!!");
} else {
  console.log("not a palindrome");
}

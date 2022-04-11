// Iteration 1: Names and Input

let hacker1 = `Marcelo Milhomem`;
let hacker2 = `Dino Marchiori`;
console.log(`The driver's name is ${hacker1}`);
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
} else if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log("Ops, we have some unexpected result in the length comparison.");
}
// Iteration 3: Loops

let nameWithSpace = ``;
for (const value of hacker1) {
  nameWithSpace += value.toUpperCase() + " ";
}
console.log(nameWithSpace);

let inverseName = ``;
for (let i = hacker2.length - 1; i >= 0; i--) {
  inverseName += hacker2[i];
}
console.log(inverseName);

const lexicographOrder = hacker1
  .toLowerCase()
  .localeCompare(hacker2.toLowerCase());

if (lexicographOrder == 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (lexicographOrder == -1) {
  console.log(`The driver's name goes first.`);
} else if (lexicographOrder == 0) {
  console.log(`What?! You both have the same name?`);
} else {
  console.log("Ops, we have some unexpected result in the lexicograph order.");
}

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare venenatis ante eu aliquet. Pellentesque rhoncus consequat dui, non lobortis neque luctus id. Cras porta lorem ac tincidunt posuere. Suspendisse congue, erat eu maximus volutpat, sapien erat tristique est, eu semper massa quam at sapien. Pellentesque vulputate ornare enim ut tempus. Nam elementum urna sit amet risus pellentesque consequat. Nunc pulvinar tellus eget egestas pretium. Aenean eu tellus dapibus, feugiat augue non, aliquam libero.

Morbi nec orci nunc. Nam venenatis suscipit ligula nec vulputate. Aenean egestas, magna non vulputate eleifend, neque risus scelerisque lacus, in mollis justo eros varius lectus. Aliquam fringilla ex id ipsum luctus tincidunt. Quisque ut libero rutrum, suscipit odio at, suscipit sem. Quisque in laoreet augue. Suspendisse finibus metus libero, sit amet sollicitudin nisi maximus sit amet. Fusce et dapibus odio. Sed a lacinia justo. In mauris tortor, ultrices a leo ultricies, accumsan auctor mi. Suspendisse augue sem, mattis in volutpat id, semper ut risus. Nunc interdum quis lorem at blandit. Curabitur laoreet tempor ipsum, vitae fringilla justo hendrerit ut. In vitae fermentum nulla. In a augue a leo imperdiet laoreet in vitae dui.

In ut ante vel mauris mattis ornare. Donec convallis orci at dui gravida, ut ullamcorper metus sagittis. Integer quis lorem leo. Quisque mattis orci blandit, congue nisi in, ullamcorper massa. Ut elementum purus non vehicula feugiat. Pellentesque massa eros, imperdiet sit amet sapien tristique, facilisis bibendum orci. Fusce vehicula, sapien ut posuere mattis, sem tellus posuere leo, id mattis lectus enim non odio. Maecenas aliquam ipsum nec urna pellentesque, non commodo ex rutrum. Vestibulum varius magna vel tristique interdum. Maecenas eu ex facilisis, porttitor nunc sed, maximus augue. Morbi luctus molestie enim, tristique rutrum arcu convallis in. Sed cursus libero nec massa condimentum pretium. Duis iaculis scelerisque sapien, sit amet facilisis nunc commodo tincidunt. In hac habitasse platea dictumst. Morbi consequat eget metus quis lacinia. Nunc in ante quis sem aliquam rhoncus eget at leo.`;
let countEt = 0;
for (let i = 0; i < loremIpsum.length; i++) {
  let latinWord = `${loremIpsum[i - 3]}${loremIpsum[i - 2]}${
    loremIpsum[i - 1]
  }${loremIpsum[i]}`.toLowerCase();
  if (latinWord == " et ") {
    countEt++;
  }
}
console.log(loremIpsum.split(" ").length);
console.log(countEt);

const phraseToCheck = `Hey Madam madam`;
let invertPhrase = ``;
let wordsPhrase = phraseToCheck.split(" ");
let palindrome = false;
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  invertPhrase += phraseToCheck[i];
}
for (i = 0; i <= wordsPhrase.length; i++) {
  if (
    invertPhrase
      .toLocaleLowerCase()
      .includes(wordsPhrase[i].toLocaleLowerCase())
  ) {
    palindrome = true;
    break;
  }
}
console.log(palindrome);

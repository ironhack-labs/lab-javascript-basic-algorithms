// Iteration 1: Names and Input
let hacker1 = "Feryal";
let hacker2 = "Raphaël";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let lengthHacker1 = hacker1.length;
let lengthHacker2 = hacker2.length;

if (lengthHacker1 > lengthHacker2) {
  console.log(
    `The driver has the longest name, it has ${lengthHacker1} characters.`
  );
} else if (lengthHacker1 < lengthHacker2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`
  );
} else {
  console.log(`Wow, you bot h have equally long names, XX characters!`);
}

// Iteration 3: Loops
hacker1Upper = hacker1.toUpperCase();
let space = "";
for (let i = 0; i < hacker1.length; i++) {
  space += hacker1Upper[i] + " ";
}
console.log(space);

let reverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverse += hacker1[i];
}
console.log(reverse);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1:
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum, leo eget feugiat tristique, dolor velit fringilla nisl, ac sodales tortor nunc quis sapien. Maecenas et mauris cursus, iaculis purus ut, blandit est. Donec scelerisque, tellus non laoreet dignissim, risus justo feugiat quam, non tempor neque odio sit amet augue. Nunc varius magna quis egestas pretium. Sed consequat erat posuere, semper ex vel, tristique sem. Quisque quis neque lacus. Proin ut scelerisque ipsum. Integer quis hendrerit neque, congue auctor augue. Nulla rutrum leo sed metus vestibulum pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eget consequat nulla.
Cras eu neque mi. Nullam mattis sapien vel dui fringilla imperdiet. Integer ac iaculis metus. In erat dolor, tempor et feugiat sit amet, pulvinar sit amet sapien. Cras ut ullamcorper quam, eu consectetur turpis. Nam ultrices, lectus a interdum hendrerit, tellus mi porttitor lacus, nec faucibus lacus risus eget turpis. Quisque in vestibulum dui. Quisque vitae nibh aliquet, rhoncus lorem sit amet, dignissim tellus. Sed ut est pellentesque, maximus augue ut, aliquet magna. Aenean ut porta massa. Vivamus ac rhoncus orci. Donec egestas ullamcorper porttitor. Sed aliquet quam a ligula facilisis, vitae sollicitudin eros fermentum. Cras ut efficitur mauris, sagittis condimentum tellus.
Quisque interdum tincidunt ipsum, sit amet molestie nulla suscipit at. Proin at ligula eget justo auctor pretium. Nam convallis ut orci non varius. Suspendisse finibus ac urna eu egestas. Vivamus bibendum ligula vitae enim ultricies, id pharetra ligula convallis. Nullam scelerisque tortor libero, a laoreet diam semper id. Quisque at cursus metus, et porttitor turpis. Ut non eros dignissim, fringilla massa id, congue ligula. Integer nec mi non tortor tincidunt rhoncus. In hac habitasse platea dictumst. Fusce imperdiet quis erat quis egestas. Nunc consectetur sem tortor, ac facilisis justo ultrices id. Proin at odio a arcu venenatis ullamcorper a ac urna. Curabitur suscipit, lorem non volutpat dapibus, sem nisi tincidunt ligula, et lobortis odio orci ut magna. Integer elementum dignissim viverra. Sed aliquet luctus odio id iaculis.`;

let wordNumber = 1;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " " || longText[i] === "\n") {
    wordNumber++;
  }
}

console.log(wordNumber);

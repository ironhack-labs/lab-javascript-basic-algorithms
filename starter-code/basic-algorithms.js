// Names and Input

let hacker1 = "Noor";
console.log("The driver's name is", hacker1);

let hacker2 = window.prompt("What's your Name ?");
console.log("The navigator's name is", hacker2);

let shortestName = hacker2;
let longestName = hacker1;

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has",
    hacker1.length,
    "characters"
  );
  shortestName = hacker2;
  longestName = hacker1;
} else if (hacker1.length < hacker2.length) {
  console.log(
    "Yo, navigator got the longest name, it has",
    hacker2.length,
    "characters"
  );
  shortestName = hacker1;
  longestName = hacker2;
} else {
  console.log(
    "wow, you both got equally long names,",
    hacker1.length,
    "characters!!"
  );
}

// Loops

console.log(
  hacker1
    .split("")
    .join(" ")
    .toUpperCase()
);
console.log(
  hacker2
    .split("")
    .reverse()
    .join("")
);

for (let i = 0; i < shortestName.length; i++) {
  if (hacker1[i].toUpperCase() < hacker2[i].toUpperCase()) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker2[i].toUpperCase() < hacker1[i].toUpperCase()) {
    console.log("Yo, the navigator goes first definitely");
    break;
  } else if (i === shortestName.length - 1) {
    if (shortestName.length === longestName.length) {
      console.log("What?! You both got the same name?");
    } else if (shortestName === hacker1) {
      console.log("The driver's name goes first.");
    } else if (shortestName === hacker2) {
      console.log("Yo, the navigator goes first definitely");
    }
  }
}

// Easy Way ;)

// if (hacker1 > hacker2){
//   console.log("The driver's name goes first.")
// } else if (hacker1 < hacker2){
//   console.log("Yo, the navigator goes first definitely")
// } else {
//     console.log("What?! You both got the same name?")

// }

// Bonus

let sentence = window.prompt("Write Something Here", "Amor, Roma");

let regex = /[^a-zA-Z0-9_]/;

newSentence = sentence
  .toUpperCase()
  .split(regex)
  .join("");
let newSentenceReversed = newSentence
  .split("")
  .reverse()
  .join("");

if (newSentence === newSentenceReversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus tellus, commodo vitae magna vitae, iaculis viverra enim. Aenean consequat consectetur porttitor. Aenean sapien felis, hendrerit eu mi a, hendrerit ullamcorper turpis. Pellentesque tempor ultrices purus, et mattis lacus hendrerit vitae. Nullam facilisis neque eget dapibus finibus. Aenean ut ex nec massa auctor lacinia. Donec et hendrerit dolor. In hac habitasse platea dictumst. Curabitur ut malesuada leo. Cras pulvinar vel justo quis scelerisque. Fusce vitae ultrices risus, et semper eros.
Sed posuere quam nunc, eu laoreet ex consequat in. Suspendisse pulvinar consequat massa, eu pellentesque quam dapibus vitae. Pellentesque non tortor massa. Donec interdum interdum mi semper hendrerit. Etiam accumsan ut tellus id maximus. Aenean ut tristique odio, ac tempus neque. Quisque venenatis blandit nisl, ut ullamcorper nulla commodo a. In leo neque, condimentum non velit sit amet, volutpat tincidunt orci. Suspendisse in malesuada eros.
Duis in porttitor orci, a molestie sapien. Phasellus volutpat in metus ac dictum. Integer in velit a mauris condimentum laoreet. Vivamus egestas luctus ex, nec porta felis porta vitae. Mauris condimentum turpis nec vulputate vulputate. Ut eget dolor vitae tortor commodo tempor in id nibh. Phasellus id augue id est laoreet efficitur. Vivamus porta dui quis risus aliquet pellentesque. Sed fermentum massa mattis, pellentesque odio sed, malesuada justo. Vestibulum mollis volutpat felis, nec tempus purus volutpat non. Cras aliquet felis diam, a pharetra felis interdum eu. Aliquam iaculis velit eu erat fermentum, vitae viverra risus lacinia. Donec consequat odio est, in congue neque maximus sit amet. Integer mauris nunc, venenatis in ex eget, sodales condimentum magna.`;

let loremArr = loremIpsum.split(" ");
console.log("The number of words are:", loremArr.length);

let count = 0;
for (let i = 0; i < loremArr.length; i++) {
  if (loremArr[i] === "et") {
    count++;
  }
}

console.log(`"et" was repeated:`, count, "times");

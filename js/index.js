// Iteration 1: Names and Input

let hacker1 = "Claudia";

let hacker2 = "Adrián";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length}characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length}characters!`
  );
}

// Iteration 3: Loops
// 3.1

// Without loop
let UAB = hacker1.split("").join(" ").toUpperCase();
console.log(UAB);

// With loop
let UAB2 = "";

for (let i = 0; i < hacker1.length; i++) {
  UAB2 += hacker1.charAt(i).toUpperCase() + " ";
}

console.log(UAB2);

// 3.2 Reverse
let rever = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  rever += hacker1[i];
}

console.log(rever);

// 3.3 Lexicographic Order

if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`The ${hacker2} name goes first.`);
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The ${hacker1} name goes first.`);
} else {
  console.log("What?! You both have the same name?");
}

// Bonus #1

let lorem1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum sed sapien vel finibus. Fusce congue, sapien id rutrum porttitor, neque lectus tincidunt ipsum, sit amet maximus enim sem quis nibh. Fusce ac justo est. Nullam malesuada sapien sit amet convallis dictum. Phasellus ipsum arcu, efficitur posuere lobortis sit amet, dictum in nunc. Integer at cursus lacus. Aliquam porttitor quis lacus et placerat. Curabitur vitae lorem metus. Aliquam egestas vulputate porta. Sed efficitur magna mi, at laoreet elit facilisis id. Praesent consectetur volutpat orci quis pellentesque. Etiam eu odio viverra, commodo dolor a, aliquet elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras blandit sapien eu erat imperdiet eleifend. Donec ut turpis enim. Fusce arcu nibh, auctor et pulvinar id, dignissim in enim. Etiam placerat lectus dictum ultricies aliquam. Donec urna leo, ornare in malesuada vel, sollicitudin quis leo. In hac habitasse platea dictumst. Fusce eu erat gravida, porttitor risus ut, vehicula libero. Nullam orci odio, ultrices a pretium eu, volutpat eu est. Donec feugiat tortor et elit facilisis ornare. Integer et rhoncus justo, non lobortis eros. Mauris in tristique lectus. Aenean lacus massa, mollis vel imperdiet in, ultrices eu ligula. Nullam eros ligula, laoreet et consectetur id, posuere a libero. Aenean velit leo, sagittis vitae posuere sed, lacinia suscipit nisl. Pellentesque lacus metus, finibus non felis sed, venenatis congue urna. Aenean sodales accumsan ipsum. Vivamus sed ligula at nisi interdum dapibus in varius lorem. In vestibulum consectetur elit sit amet tempus. Donec auctor lacus enim, et porttitor quam pulvinar eget. Nam convallis pellentesque elit, quis dapibus nibh convallis eget. Nam vitae mauris ac massa tempus accumsan ut nec velit. Morbi rutrum nisi eu arcu efficitur malesuada. Integer lacinia sem vitae diam tincidunt, vel elementum justo molestie. Donec ullamcorper eu nulla at ultrices. In ut rutrum sem. Mauris quis magna suscipit, mattis tortor a, posuere ante. Nulla blandit urna posuere tempor finibus. Sed efficitur erat sed varius posuere. Nulla ultricies nunc sed risus facilisis rutrum. Donec tincidunt mauris erat, ac tempor sem porta et. Nunc sapien purus, maximus quis ante vel, luctus volutpat orci.";

// split()

for (let i = 0; i <= lorem1.length; i++) {
  console.log("Total words of this string is: " + lorem1.split(" ").length);
}

// identify 'et'

let word = lorem1.indexOf(" et");
let count = 0;

while (word !== -1) {
  count++;
  word = lorem1.indexOf(" et", word + 1);
}

console.log(`The total amount of "et" words is: ${count}`);

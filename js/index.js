// Iteration 1: Names and Input
console.log("I'm ready!");
let hacker1 = "Mathias";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Anne";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    "Wow, you both have equally long names," + hacker1.length + " characters!"
  );
}

// Iteration 3: Loops
let i = -1;
do {
  i += 1;
  console.log(hacker1.toUpperCase().charAt(i));
} while (i < hacker1.length);
let j = hacker2.length;
do {
  j -= 1;
  console.log(hacker2.charAt(j));
} while (j >= 0);
let teamCobra = [hacker1, hacker2];
teamCobra.sort();
console.log(teamCobra);
if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else if (teamCobra[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else if (teamCobra[0] === hacker1) {
  console.log("The driver's name goes first.");
}

// Bonus 1
let p1 =
  "cursus. Maecenas purus massa, viverra sit amet ipsum sit amet, mollis tincidunt nunc. Sed vulputate risus non odio fermentum scelerisque. In dictum cursus tortor et sodales. Maecenas dignissim nibh eget ligula pretium molestie. Aenean quam odio, ullamcorper ut eros ut, iaculis tempus arcu. Duis porttitor vitae purus vitae pellentesque. Aliquam semper magna eget ligula sollicitudin, quis maximus risus ultricies. Curabitur justo libero, venenatis eget consectetur id, semper sed nisl. Vivamus quis pulvinar lorem. Curabitur ornare eleifend quam, ac ullamcorper est aliquet id. Praesent vel cursus leo, nec congue tortor. Nulla vehicula, mauris nec luctus pulvinar, mauris mauris semper mi, et laoreet sapien lectus nec risus. Proin et nibh cursus, semper sapien quis, sodales orci. Vestibulum ut mi sagittis metus blandit convallis tristique sed nunc. Vestibulum tempus nisi sem, in facilisis arcu aliquam ut. Aliquam a ultrices est. Fusce ac quam in quam semper fermentum non quis nisi. Maecenas non magna id augue semper feugiat. In tincidunt scelerisque sapien, euismod blandit ex euismod sed. Pellentesque mattis nec tellus non suscipit. Maecenas gravida, nibh sed vulputate condimentum, eros dui luctus odio, non congue ante urna ultrices est. Curabitur condimentum leo ornare aliquet tempor. Nullam eleifend nisi nec tincidunt placerat. Sed felis est, hendrerit sit amet dignissim pretium, accumsan nec mauris. Aliquam sit amet nisi ac est porta dictum. Cras tempor semper ex, eget tempus magna accumsan id. Mauris elit diam, iaculis eu ante quis, gravida varius odio. Nam viverra magna ex, eget pretium arcu ultrices eu. Vestibulum nec nibh tristique, posuere sem cursus, fermentum neque. In sed nibh eu nunc condimentum commodo. Maecenas vulputate dui vitae ex egestas congue ut sit amet libero. Quisque vitae arcu lacus. Phasellus metus nibh, faucibus eu turpis vitae, dignissim laoreet tellus. Proin imperdiet quis arcu vel imperdiet. Duis euismod urna arcu, sed fringilla nisi pretium vitae.";

function wordCount(p1) {
  return p1.split(" ").length;
}

console.log(wordCount(p1));

console.log(p1.match(/ et /g));
console.log(p1.match(/ et /g).length);

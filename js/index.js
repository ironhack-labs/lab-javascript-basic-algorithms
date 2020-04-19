// Iteration 1: Names and Input

let hacker1 = "Mr Bean";

let hacker2 = "Mr Bear";

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
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

//3.1

let uppercase = "";

for (let i = 0; i < hacker1.length; i++) {
  uppercase += hacker1[i].toUpperCase() + " ";
}
console.log(uppercase);

//3.2

let reverse = ""; //it's empty because otherwise it would not be lined up with the rest of the text

for (i = hacker1.length - 1; i >= 0; i--) {
  reverse += hacker1[i];
}
console.log(reverse);

//3.3

if (hacker1.toUpperCase() > hacker2.toUpperCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let bonus1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit quis dui sit amet eleifend. Nulla sollicitudin iaculis convallis. Cras ac tempor nulla, at tristique purus. Nunc mollis a nunc vitae feugiat. Aliquam et elit in velit auctor ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit, sapien lacinia fermentum tincidunt, nulla enim pulvinar erat, ac dictum odio sapien a metus.

Ut ornare orci erat, id pellentesque quam gravida eu. Praesent tincidunt suscipit ipsum quis pretium. Etiam dui risus, ullamcorper eu tincidunt et, egestas sed magna. Nullam tortor nisl, mollis eu malesuada eget, venenatis a sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eleifend quam ipsum, bibendum luctus arcu varius nec. Aliquam erat volutpat. Mauris quis tincidunt libero. Cras nec nibh et orci blandit interdum vel eu nunc.

Etiam tincidunt bibendum justo a tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ut diam metus. Nunc quis velit et ante interdum feugiat eget vel ipsum. Aenean arcu mi, porttitor vel turpis a, gravida mattis enim. Vivamus lacinia erat sapien, pulvinar feugiat nisi elementum in. Etiam iaculis aliquam erat fermentum ultricies. Donec non ligula eu quam ornare mollis non eget quam. Aenean vitae elit et justo suscipit viverra. Nunc gravida massa orci, ullamcorper tincidunt eros congue eget. Nullam vel interdum magna, et pharetra mauris. Nulla pellentesque nisl ut ante pulvinar rhoncus. Donec quam eros, ullamcorper quis ornare porttitor, vestibulum id nulla. Maecenas at eleifend ligula. Vestibulum bibendum ante ac massa vestibulum scelerisque vitae nec est.`;

console.log(bonus1.split(" ").length); // number of words in this string

console.log(bonus1.split("et").length - 1); // number of times that "et" exists

//Bonus 2 --> not finished

let phraseToCheck = "A man, a plan, a canal, Panama!";
/*"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/

console.log(phraseToCheck.replace(" ", "").replace(",", "").replace("!", ""));
// replace just remove the first special character of each one, so nthat's not the answer

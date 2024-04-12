// Iteration 1: Names and Input
let hacker1 = "Pedro";
console.log("The driver's name is " + hacker1);
let hacker2 = "Marisa";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}

// Iteration 3: Loops
//3.1
//console.log(hacker1.toUpperCase().split('').join(' '));
let answer = "";
for (let i = 0; i < hacker1.length; i++) {
  answer += hacker1[i].toUpperCase() + " ";
}
answer = answer.trim();
console.log(answer);

//3.2 Print all the characters of the navigator's name in reverse order, i.e., `"nhoJ"`.
let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName = reverseName + hacker2[i];
}
console.log(reverseName);

//3.3
//localeCompare
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus Time!
//Bonus 1:
let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis euismod mi, non blandit sapien elementum non. Phasellus egestas erat ante, pretium suscipit lacus pretium commodo. Vivamus porta pellentesque ornare. Mauris eleifend euismod libero, vel viverra metus ullamcorper laoreet. Fusce a feugiat est. Maecenas mi nulla, eleifend ut cursus in, sagittis nec mauris. Etiam cursus, ex non ultricies condimentum, est ante aliquet augue, nec blandit purus neque id elit. Quisque nec aliquam felis. Morbi luctus enim non est vehicula luctus. Proin et consequat eros. Nullam feugiat eros sit amet blandit consectetur. Integer malesuada massa risus, a dignissim felis finibus nec. Nunc eleifend diam vel ipsum ultricies viverra. Sed urna libero, euismod in cursus eu, laoreet nec turpis. Fusce vitae dolor fermentum, dictum quam lacinia, pretium elit. Nullam ut massa felis. Vestibulum pretium tincidunt tortor, eget sollicitudin urna. Etiam id est porta, vestibulum diam in, aliquam ante. Praesent ultrices venenatis justo, sed blandit libero ultricies eget. Praesent lobortis massa augue, nec malesuada tellus finibus eget. Morbi aliquet ultrices dui vel ultricies. In non nisl commodo nisi feugiat euismod sed sit amet odio. Vestibulum mi quam, sollicitudin quis tincidunt id, luctus vitae libero. Duis dapibus at augue vitae tincidunt. Curabitur pellentesque in ligula non scelerisque. Aenean facilisis id elit et faucibus. Etiam eget ligula arcu. Donec varius ut nisi porta dapibus. Phasellus interdum mollis interdum. Sed finibus blandit arcu ac finibus. Nunc ut nunc eu elit consectetur placerat nec eget metus. Quisque cursus aliquam urna sed interdum. Vivamus ut maximus justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
console.log(longText.split(" ").length);

console.log(longText.split("et").length -1);
/*
let search ="et";
let counter = 0;
for(i=0;i<=longText.split(" ").length - search.length; i++){
  if(longText.split(" ")[i] == search){
    counter++;
  }
}
*/
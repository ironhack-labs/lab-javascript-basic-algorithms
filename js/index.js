console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'EvertonJackson';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'JessicaPamela';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length == hacker2.length) {
  `Wow, you both have equally long names, ${hacker1.length} characters!.`
}

// Iteration 3: Loops

for (let letter of hacker1) {

  console.log(letter.toUpperCase());
  console.log('');

}

for (let i = hacker2.length; i >= 0; i--) {

  console.log(hacker2[i]);
  // more statements
}


if (hacker1.localeCompare(hacker2) > 0) {

  console.log("Yo, the navigator goes first definitely.");

} else if (hacker1.localeCompare(hacker2) < 0) {

  console.log("The driver's name goes first.")

} else {

  console.log("What?! You both have the same name?")
}


let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum vestibulum placerat. In id metus ac elit blandit pretium. Duis malesuada eu dui in lacinia. Nulla fermentum purus sit amet imperdiet rutrum. Duis ex metus, dictum id orci sit amet, dignissim tempus purus. Curabitur placerat diam nunc, in accumsan leo lobortis eget. Morbi ac tincidunt tellus. Vivamus imperdiet mollis dolor et dapibus. Duis nec egestas est. Maecenas id aliquet augue. Morbi dignissim ut mauris et lobortis. Cras sagittis id erat sit amet maximus.Curabitur quis accumsan arcu, quis ornare quam. Etiam neque enim, sagittis id laoreet vitae, finibus non massa. Nulla lobortis ex in efficitur egestas. Proin eget nunc ut nisl maximus sodales quis in nisl. Donec feugiat ultrices diam, maximus pharetra tellus condimentum et. Nullam elementum odio sed felis congue facilisis. Pellentesque facilisis efficitur enim vitae varius. Integer eu finibus nibh. Mauris placerat mattis eros, eu suscipit mi luctus sit amet. Fusce ut dui et metus rutrum mollis. Integer dapibus eget neque et volutpat. Aenean vel nisl tincidunt, laoreet justo eget, malesuada risus. Mauris non tincidunt purus. Nulla a augue ut augue iaculis ullamcorper quis at ante.Pellentesque lacus lacus, bibendum quis semper non, convallis quis ipsum. Nunc eu efficitur dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tempor quam imperdiet rutrum varius. Nulla facilisi. Ut at velit nec diam consequat cursus. Donec at ornare libero, in suscipit sapien."

let words = string.split(" ");
let wordsCount = 0;
let etCount = 0;

for (let i = 0; i < words.length; i++) { wordsCount++; }

for (let i = 0; i < words.length; i++) {
  if (words[i].match("et")) etCount++;
}

console.log(wordsCount);
console.log(etCount);






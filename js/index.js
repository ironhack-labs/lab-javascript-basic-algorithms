// Iteration 1: Names and Input
let hacker1 = 'Carlos';
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = 'Chucho';
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
};

// Iteration 3: Loops
// 3.1
let capSpace = hacker1.toUpperCase().split("").join(" ");
console.log(capSpace);
// 3.2
let reversedArr = []
for (let i = hacker2.length - 1; i >= 0; i-- ) {
  reversedArr.push(hacker2[i]);
}
let reversedStr = reversedArr.join("");
console.log(reversedStr);
// 3.3
let lex = hacker1.localeCompare(hacker2);
if (lex < 0) {
  console.log(`The driver's name goes first.`)
} else if (lex > 0) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}
console.log(lex)

//al final new pull request
//WEB-PT2 "nombre"
//comentarios dudas

//Bonus 1

const latinTxt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae eros nulla. Praesent dignissim, purus in luctus scelerisque, ipsum nulla iaculis nibh, eget sodales nulla eros eget sem. Praesent ipsum eros, laoreet quis ligula in, dapibus euismod mauris. Ut non nulla turpis. Pellentesque ligula enim, sagittis quis dictum ut, condimentum sit amet nisl. Donec non massa at orci elementum malesuada. Duis sed elit vel tellus sodales semper vitae eu mi. Donec non magna consequat, accumsan metus quis, maximus mauris. Cras interdum malesuada faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent orci leo, maximus ac neque at, egestas fermentum quam.
Donec a lobortis nisi. Suspendisse dignissim eget massa sit amet accumsan. Maecenas quam libero, vestibulum sed nisl quis, eleifend luctus sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eget hendrerit ex. Vestibulum nec nibh nec nunc maximus placerat. Fusce lacus neque, maximus nec felis at, convallis euismod ante. Ut a massa eget orci tristique finibus non at mi. Praesent a leo malesuada, aliquet erat vitae, faucibus tortor. Morbi justo sapien, consequat et scelerisque tincidunt, faucibus a mi. Aenean vel sodales orci. Praesent nibh ligula, sollicitudin a sem nec, volutpat venenatis lorem. Sed rutrum urna eget dolor rutrum volutpat.
Aenean malesuada mi id lorem cursus posuere. Etiam mollis et urna eu eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non interdum turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sed facilisis diam. Integer ut vehicula lectus, a dictum ex. Sed et ante a sapien rutrum sollicitudin mattis at nibh. Quisque vestibulum malesuada massa, ac commodo felis euismod at. Nullam interdum nibh vitae nunc efficitur, non egestas odio pharetra. Donec vestibulum tellus vitae nisi sodales fermentum.`;
let x=0;
for (i=0; i<latinTxt.length; i++) {
  if (latinTxt[i] === " ") {
    x++;
  }
}
console.log(x+1);

//Bonus 2

const palin = "Anita lava la tina"
const baseStr = palin.toLowerCase().replace(/ /g,"");
console.log(baseStr);
const reverse = palin.toLowerCase().replace(/ /g,"").split("").reverse().join("");
console.log(reverse);

const isPalin = baseStr === reverse ? "Is palindrome" : "Is not palindrome";

console.log(isPalin);

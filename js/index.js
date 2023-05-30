console.log("I'm ready!");


const hacker1 = "Felipe";

console.log("The driver's name is ${hacker1}");

const hacker2 = "Manoel";

console.log("The navigator's name is ${hacker2}");


if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has ${hacker1.length} characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has ${hacker2.length} characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, ${hacker1.length} characters!"
  );
}


console.log("Driver's name");
for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}

console.log("Navigator's name");

for (let i = hacker2.length - 1; i > -1; i--) {
  console.log(hacker2[i]);
}



if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}



let lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum accumsan arcu faucibus rutrum. Quisque sollicitudin nibh id tincidunt lacinia. Aenean dolor purus, ullamcorper vitae neque non, tempor luctus odio. Curabitur consectetur quis eros vehicula scelerisque. Sed consectetur pulvinar mauris, id sagittis eros mollis ac. Proin non felis quis lectus dapibus volutpat ac quis velit. Sed ornare faucibus ex id ultricies. Vestibulum fringilla metus in nisl porta ultrices. Nam est libero, vestibulum eget tincidunt quis, interdum id ligula. Vivamus et malesuada nisl. Curabitur ullamcorper nisi vitae nisl ultricies sodales. Nullam massa diam, ultrices at mi nec, consequat ullamcorper erat. Vestibulum sit amet odio accumsan, laoreet nisi sed, posuere lorem. Sed elementum id nulla at venenatis. Vivamus sed elit vel magna suscipit cursus. Phasellus tempor, erat eu luctus sollicitudin, sem libero sagittis tortor, eget faucibus sem purus ut mi. Curabitur imperdiet euismod nunc ac feugiat. In a suscipit tellus. Aliquam pretium interdum neque quis auctor. Cras eget elementum justo, id interdum libero. Morbi et scelerisque ligula. Mauris porta, magna vel lacinia faucibus, sapien lorem accumsan nisl, at aliquet lacus ante vel ligula. Sed laoreet consequat varius. Vestibulum quis leo et nisl suscipit elementum sit amet ut leo. Integer consequat nisi et velit faucibus, eu luctus ante efficitur. Nunc egestas porta justo. Cras facilisis, nulla sit amet viverra feugiat, leo dui facilisis ante, consequat tincidunt metus orci vitae nunc. Phasellus nec consectetur mi. Donec dapibus lobortis purus, vestibulum porttitor nisl semper ut. Nullam congue feugiat justo a bibendum. Duis eget quam in eros volutpat molestie. Quisque nec massa nec lectus cursus volutpat nec et libero. Fusce et ullamcorper est, non blandit sapien.";
const wordsArray = lorem.split(" ");

console.log(wordsArray.length);

let contadorEt = 0;
for (let i = 0; i <= wordsArray.length; i++) {
  if (wordsArray[i] === "et") {
    contadorEt++;
  }
}
console.log(contadorEt);


let phraseToCheck = "Amor, Roma";
let straightPhrase = "";
let reversedPhrase = "";
let cleanPhrase = phraseToCheck.toLowerCase();
const re = new RegExp(/[a-z]/);

for (let i = 0; i < cleanPhrase.length; i++) {
  if (re.test(cleanPhrase[i])) {
    straightPhrase += cleanPhrase[i];
  } else {
    continue;
  }
}
console.log(straightPhrase);

for (let i = cleanPhrase.length - 1; i > -1; i--) {
  if (re.test(cleanPhrase[i])) {
    reversedPhrase += cleanPhrase[i];
  } else {
    continue;
  }
}

if (straightPhrase === reversedPhrase) {
  console.log("It´s a Palindrome!");
} else {
  console.log("Is not a Palindrome, better luck the next time :(");
}

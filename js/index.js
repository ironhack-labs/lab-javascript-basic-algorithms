// Iteration 1: Names and Input
let hacker1 = "Lia";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Chris";
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
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let driverArr = hacker1.split("");

console.log(driverArr.join(" ").toUpperCase());

let navigatorArr = hacker2.split("");
console.log(navigatorArr.reverse().join(""));

driverArr.sort();
navigatorArr.sort();

for (let i = 0; i < navigatorArr.length; i++) {
  if (driverArr[0] > navigatorArr[0]) {
    console.log("The driver's name goes first.");
  } else if (driverArr[0] < navigatorArr[0]) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}

//Bonus 1
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo sem ipsum, sed aliquet augue bibendum quis. Cras nec tempor sem, nec faucibus ante. Donec faucibus metus quis diam vehicula commodo. In non semper leo. Nunc ullamcorper ex id sem blandit pulvinar. Morbi a dictum magna. Vivamus varius varius erat, vel ornare libero consequat ac. Aliquam pharetra erat vitae elit vulputate varius. Praesent at vulputate urna, et interdum arcu. Donec ultrices ultricies porttitor. Etiam vitae nisl at lorem dapibus dictum. Sed vel arcu eu nulla bibendum sagittis non et justo. Nullam vel pretium nisl, vel auctor libero. Fusce sit amet lobortis nunc. Nullam consectetur ex nunc, nec molestie urna ornare eu. Integer eget massa vel elit hendrerit congue. Aliquam a accumsan sem, vitae finibus nulla. Phasellus et risus at augue facilisis iaculis a sed urna. Etiam in diam sit amet lacus placerat cursus ut vel lectus. Aenean in egestas nulla, at faucibus augue. Quisque tristique dui est, quis egestas quam mattis eget. Sed id tellus aliquam eros semper tristique scelerisque at nibh. Etiam accumsan odio eget massa consectetur, ut tempor risus pharetra. Nunc mattis elit non dolor sagittis, at rutrum est scelerisque. Phasellus vitae eros at orci blandit pharetra in at leo. Aenean posuere dapibus ornare. Sed luctus diam sed ipsum ullamcorper, eget malesuada nibh auctor. Aliquam fermentum sollicitudin volutpat. Vivamus tincidunt sapien ac eros accumsan vulputate. Sed porttitor ullamcorper libero. Suspendisse hendrerit sed leo non luctus. Duis malesuada malesuada tellus pulvinar fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce blandit tincidunt sodales. Mauris id lectus placerat arcu consectetur accumsan in non nisl. Proin quis lorem malesuada nisl pellentesque fermentum. Nunc id elit vel leo viverra laoreet. Cras condimentum facilisis feugiat.";
textArr = text.split(" ");
console.log(textArr.length);

let numberOfEt = 0;

textArr.forEach((element) => {
  if (element == "et") {
    numberOfEt++;
  }
});
console.log(numberOfEt);

//Bonus 2
let phraseToCheck = "Was it a car or a cat I saw?"
let newPhraseToCheck = phraseToCheck.replace(/[.!?]/g, '').toLowerCase();
let phraseToCheckArr = newPhraseToCheck.split("");
let reversePhraseToCheck = phraseToCheckArr.reverse();

phraseToCheckArr.forEach(() => {
 if(phraseToCheckArr[0] == reversePhraseToCheck[reversePhraseToCheck.length - 1]){
    console.log("wow! it's a palindrome!");
  } else {
    console.log("aww, it's not a palindrome:(");
  }
});





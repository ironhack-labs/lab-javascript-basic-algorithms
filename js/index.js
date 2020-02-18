// Iteration 1: Names and Input

var hacker1 = "Miguel";
console.log("The driver's name is " + hacker1);
var hacker2 = "Adrian";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

function long(nombre1, nombre2) {
    if (nombre1.length > nombre2.length) {
      console.log("The driver has the longest name, it has " + nombre1.length + "characters");
    } else if (nombre2.length > nombre1.length) {
      console.log("It seem that navigator has the longest name, it has" + nombre2.length + "characters.");
    } else {
      console.log("Wow, you both have equally long names, " + nombre1.length
      + "characters");
    }
  }
  long(hacker1, hacker2);

// Iteration 3: Loops

let resultado = '';
function capital(nombre) {
    for (let i = 0; i < nombre.length; i++) {
        resultado = resultado + nombre[i].toUpperCase() + ' ';
    }
    console.log(resultado);
}
capital(hacker2);
function reverseName(name) {
  var dividir = name.split("");
  var vuelta = dividir.reverse();
  var unir = vuelta.join("");
  return unir;
}
reverseName("Miguel");
function compare(name1, name2) {
  var temp = name1.localeCompare(name2);
  if (temp === -1) {
    console.log("The driver's name goes first");
  } else if (temp === 1) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}
compare(hacker2, hacker1);

// Bonus 1:

var text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et molestie mauris. Nam non lorem non quam porttitor laoreet vel at lacus. Vivamus at neque vulputate, tincidunt arcu ut, efficitur sapien. Suspendisse vehicula facilisis eros eget pulvinar. Sed pretium neque nibh. Curabitur at mi sit amet leo dignissim aliquet. Ut tincidunt, velit eget ultricies mattis, erat lectus feugiat risus, id mattis mauris diam eget risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse varius orci sed ante commodo, in fermentum purus rutrum.
Sed quis urna sed justo bibendum tristique. Nunc sollicitudin dui enim. Praesent sodales felis diam, ut mattis massa bibendum tincidunt. In vel congue massa. Phasellus ornare porttitor sem sit amet commodo. Curabitur nibh augue, porttitor a pretium at, aliquam ac est. Vestibulum cursus nibh arcu, eu mollis tellus ullamcorper eu. Donec porta nisi iaculis imperdiet molestie. Quisque facilisis aliquam odio. Ut ultricies auctor euismod.
Duis sodales ligula vel quam faucibus dignissim. Proin ut ligula ullamcorper, gravida elit eget, dignissim tortor. Suspendisse luctus risus fermentum ante pellentesque maximus. Phasellus sollicitudin viverra velit vel cursus. Maecenas sed ligula porta, vestibulum massa ut, pulvinar lorem. In quam leo, faucibus sit amet mauris nec, fermentum laoreet purus. Nulla posuere, ex eget auctor accumsan, diam quam tincidunt neque, eu vestibulum elit arcu ac ligula. Vestibulum aliquet augue neque, in finibus risus feugiat at. Donec sit amet commodo arcu, sit amet tempor lorem. Duis egestas ex nibh, a sagittis libero accumsan at.`;
function WordCount(str) { 
    return str.split(" ").length;
}
console.log(WordCount(text));
var count = (text.match(/ et /g)).length;
console.log(count);

// Bonus 2:

var pali = "Was it a car or a cat I saw?\" and \"No \'x\' in Nixon";
var onlyLowerChar = pali.replace(/ |,|!/g, "").toLowerCase()
console.log(onlyLowerChar);
if (onlyLowerChar === reverseName(onlyLowerChar)) {
    console.log("Es un Palindromo");
} else {
    console.log("No es Palindromo");
}
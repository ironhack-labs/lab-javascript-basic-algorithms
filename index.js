// Iteration 1: Names and Input
let hacker1 = prompt("What's the driver name?");
console.log(`The driver's name is ${hacker1}`);

let hacker2 = prompt("What's the navigator name?");
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
let cap = "";
for (const char of hacker1) { 
  cap += char.toUpperCase() + ' ';
}
console.log(cap);

let reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2[i];
}
console.log(reverse);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`${hacker1} goes first.`);
}
if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, ${hacker2} goes first definitely.`);
}
if (hacker1.localeCompare(hacker2) === 0) {
    console.log(`What?! You both have the same name?`);
}

//BONUS________________________________________________________
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non convallis tortor. In tincidunt tortor ex, sit amet hendrerit enim fermentum eu. Fusce congue, ipsum eu porta eleifend, tellus ante tristique arcu, vitae aliquet nisl ligula eget arcu. Nunc a efficitur est, in pharetra arcu. Maecenas in sapien at turpis congue euismod. Nullam tincidunt ac eros in euismod. Mauris consectetur pulvinar sem, ac lacinia arcu accumsan a.

Pellentesque quis diam egestas risus pellentesque tristique. Cras ut purus vitae metus lacinia egestas ac quis felis. Donec id nisl orci. Mauris quis nibh convallis, fringilla justo posuere, ornare sapien. Quisque sodales vitae nulla in feugiat. Duis volutpat sapien dolor, non pulvinar massa sodales vel. Maecenas a mattis justo. Curabitur iaculis nulla a risus feugiat blandit. Proin accumsan placerat lectus, consequat convallis velit. Donec auctor ut augue vitae pharetra. Suspendisse sit amet elit semper, accumsan erat vitae, gravida tortor.

Suspendisse leo felis, commodo et pulvinar nec, posuere ut nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris a turpis dolor. Aliquam cursus urna sed placerat tempor. Aenean semper pulvinar convallis. Integer posuere ornare orci non faucibus. Aliquam pretium bibendum neque, nec sagittis tortor molestie in. Nullam in nulla eu felis semper convallis. Cras volutpat nisl non libero tincidunt egestas. Morbi maximus magna ipsum, eget sollicitudin risus blandit nec. Nunc dolor risus, tempor et laoreet sed, tincidunt vitae orci. Donec facilisis nunc eros, at fermentum mi placerat at. Vivamus malesuada ipsum vel odio fringilla posuere. Duis nec est convallis, iaculis arcu eget, egestas dolor.`;

function counter(longText) {
    let spaces = 0;
    for (let i = 0; i < longText.length; i++) {
        if (longText[i]===" ") {
            spaces++;
        }
    }
    return spaces + 1;
}
console.log(counter(longText));

//_____________________________________________________________

let phraseToCheck = "A man, a plan, a canal, Panama!";
function check(phrase) {
    let re = /[^A-Za-z0-9]/g;
    phrase = phrase.toLowerCase().replace(re, '');
    for (var i = 0; i < phrase.length / 2; i++) {
      if (phrase[i] !== phrase[phrase.length - 1 - i]) {
          return false;
      }
    }
    return true;
}
console.log(check(phraseToCheck));
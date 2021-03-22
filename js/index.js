var hacker1 = "Chrome";
console.log(`The driver's name is ${hacker1}.`);
var hacker2 = "Pikachu";
console.log(`The navigator's name is ${hacker2}.`);

//

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

//

let driver = "";

for(let i = 0; i < hacker1.length; i++){
  const upCase = hacker1[i].toUpperCase();
  driver = driver + upCase + " ";
} 
console.log(driver);

//

let navigator = "";

for(let i = hacker2.length - 1; i >= 0; i--){
  const backwards = hacker2[i];
  navigator = navigator + backwards;
}
console.log(navigator);

//

if (hacker1 < hacker2){
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2){
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae neque semper, ultrices metus at, interdum tortor. Morbi ullamcorper rutrum augue eu ultrices. Proin sed hendrerit dolor. Sed sed maximus enim, in aliquet enim. Integer ac massa magna. Aenean dignissim vitae est quis dictum. Duis blandit sem aliquam nulla sodales ornare. Curabitur porttitor orci ut nibh elementum bibendum. Vestibulum at mauris eget sem vestibulum accumsan. Vivamus scelerisque purus nunc, sed tincidunt velit ultrices eu. Ut interdum dignissim lectus sit amet aliquet.

Donec facilisis nunc quis metus consectetur mollis. Nunc fermentum gravida elementum. Sed interdum vel ex id dapibus. Aliquam erat volutpat. Aliquam erat volutpat. Curabitur est arcu, aliquam eget interdum non, efficitur id dolor. Morbi lacinia risus eu porta gravida.

Integer ut venenatis purus, in tempor est. Nullam cursus, sapien eu bibendum laoreet, est lacus luctus lectus, rutrum venenatis velit ante eu sem. Aliquam cursus et turpis sit amet congue. Integer lobortis at velit ac vehicula. Aenean maximus posuere semper. Donec porta metus ac ex pellentesque fringilla. Praesent in consectetur odio. Vestibulum sed rutrum diam, eu ultricies massa. Suspendisse faucibus et nibh eget euismod. Aliquam eget posuere nulla, nec ultricies nisi. Donec eget tellus at lacus malesuada finibus. Nunc ultricies gravida accumsan. Duis tincidunt egestas elit, vel congue dolor eleifend nec. Ut viverra lobortis nunc, sed venenatis odio cursus eu. Suspendisse accumsan dui vel vehicula elementum. Pellentesque a turpis nisi.

`;

let count = 0;

for (let i = 0; i < loremIpsum.length; i++){
  if (loremIpsum[i] === " "){
    count++;
  }
}
console.log(count);

// et
if (loremIpsum.indexOf('et') === -1) {
  console.log(0);
} else {
  let count = 0;
  let start = 0;
  while (loremIpsum.indexOf('et', start) !== -1) {
    count = count + 1;
    start = loremIpsum.indexOf('et', start) + 1;
  }
  console.log(count);
}


// Bonus 2
const text ='step on no pets';
let palStart = 0;
let palEnd = text.length - 1;

while(palStart < (text.length - 1) && palEnd > 0) {
  if (text[palStart] === '.' || text[palStart] === ',' || text[palStart] === ' ' || text[palStart] === '?' || text[palStart] === '!') {
    palStart = palStart + 1;
    continue;
  }
  if (text[palEnd] === '.' || text[palEnd] === ',' || text[palEnd] === ' ' || text[palEnd] === '?' || text[palEnd] === '!') {
    palEnd = palEnd - 1;
    continue;
  }

  if (text[palStart] !== text[palEnd]) {
    break;
  }
  palStart = palStart + 1;
  palEnd = palEnd - 1;
}

if (palEnd === 0){
  console.log("palindrome");
  } else {
    console.log("not palindrome");
  }

// Iteration 1: Names and Input
let hacker1 = "Laura";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Michelle";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`,
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`,
  );
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "));
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}   
console.log(reversedName);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget fermentum lorem, a placerat enim. Mauris tincidunt, urna vel bibendum pellentesque, enim leo hendrerit nisi, et posuere quam ligula a eros. Sed commodo lobortis laoreet. Praesent porttitor porttitor posuere. Etiam accumsan tellus eget sapien imperdiet, ut convallis lorem tempus. Sed eleifend risus quis dui ornare, quis tempus arcu placerat. Suspendisse potenti. Proin vel blandit velit, eget congue urna. Aenean elit justo, sollicitudin eget mattis nec, scelerisque et nulla. Proin pulvinar sapien quam. Mauris rhoncus, tortor nec bibendum tristique, justo urna pretium odio, ultricies mollis ipsum dolor vel quam. Donec scelerisque libero at metus sollicitudin, feugiat condimentum justo tristique. Suspendisse tortor tortor, vestibulum eget condimentum sodales, pulvinar vel dolor. Suspendisse porta ipsum sed quam elementum dapibus. Nullam sit amet sollicitudin est. Nullam fringilla tellus ut eros gravida, sed aliquam turpis feugiat. Proin bibendum lorem nunc, eget finibus turpis gravida eu. Vivamus sed urna tristique, aliquam est a, venenatis tellus. Mauris eu dapibus lorem. Nullam leo nisl, scelerisque et ipsum condimentum, laoreet vehicula velit. Integer bibendum vulputate leo sed viverra. Cras non lectus in nisi sagittis luctus. Sed congue in risus in ultrices. Proin sit amet massa volutpat, volutpat enim sit amet, fermentum nunc. Nullam facilisis varius tempus. Praesent bibendum aliquet enim, eget auctor libero rutrum ut. Sed efficitur felis eu dui auctor, nec imperdiet libero tristique. Nulla vel tortor vitae erat vulputate ornare. Sed venenatis maximus rhoncus. Sed id pulvinar ante. Nunc quis scelerisque diam, ornare lobortis justo. Aenean tincidunt arcu fringilla ex ullamcorper luctus. Nunc justo neque, volutpat et massa pretium, condimentum rutrum dui. Aenean vitae varius nisl. Nam felis urna, vestibulum id lectus sed, ullamcorper mattis felis. Proin hendrerit maximus ex, sit amet accumsan sem pellentesque consectetur. Etiam eu dui ac tellus vestibulum feugiat id ac augue. Fusce sed aliquam ipsum.';
let wordCount = text.split(" ").length;
console.log(`The text contains ${wordCount} words.`);

let etCount = text.split("et").length - 1;
console.log(`The word "et" appears ${etCount} times in the text.`);

let phraseToCheck = "A  man, a plan, a canal, Panama";  
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]/g, '');
let reversedCleanedPhrase = cleanedPhrase.split('').reverse().join(''); 
if (cleanedPhrase === reversedCleanedPhrase) {
  console.log("The phrase is a palindrome.");
} else {
  console.log("The phrase is not a palindrome.");
}

let phraseToCheck1 = "Amor, Roma";  
let cleanedPhrase1 = phraseToCheck1.toLowerCase().replace(/[^a-z]/g, '');
let reversedCleanedPhrase1 = cleanedPhrase1.split('').reverse().join(''); 
if (cleanedPhrase1 === reversedCleanedPhrase1) {
  console.log("The phrase is a palindrome.");
} else {
  console.log("The phrase is not a palindrome.");
}

let phraseToCheck2 = "Was it a car or a cat I saw?";  
let cleanedPhrase2 = phraseToCheck2.toLowerCase().replace(/[^a-z]/g, '');
let reversedCleanedPhrase2 = cleanedPhrase2.split('').reverse().join('');           
if (cleanedPhrase2 === reversedCleanedPhrase2) {
  console.log("The phrase is a palindrome.");
} else {
  console.log("The phrase is not a palindrome.");
}
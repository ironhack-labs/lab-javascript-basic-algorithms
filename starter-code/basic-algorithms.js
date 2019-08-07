// Names and Input
const hacker1 = "baby driver";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = prompt("what's the navigator his name?");
console.log(`The navigator's name is ${hacker2}`);
//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name it has  ${hacker1.length} charachters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `The navigator has the longest name it has  ${hacker2.length} charachters`
  );
} else {
  console.log(
    `wow, you both got equally long names,  ${hacker1.length} charachters`
  );
}

// loops

//-------- capitall name

hacker1_upper = hacker1.toUpperCase;
let name_spaced = hacker1_upper[0];

for (let i = 1; i < hacker1.length; i++) {
  name_spaced += " " + hacker1_upper[i];
}

console.log(name_spaced);

//------- reverse name

let name_reverse;

for (let i = hacker2.length; i > -1; i--) {
  name_reverse += hacker2[i];
}

// ------ sorted name

let longer = hacker1.length > hacker2.length ? hacker1.length : hacker2.length;

for (let i = 0; i < longer; i++) {
  if (hacker1[longer] < hacker2[longer]) {
    console.log("The driver's name goes first");
    break;
  } else if (hacker1[longer] > hacker2[longer]) {
    console.log("Yo, the navigator goes first definitely");
    break;
  } else if (hacker1 === hacker2) {
    console.log("What?! You both got the same name?");
    break;
  }
}

//---- palindrome

const possible_palindrome = prompt(
  "give in to check for palindrome"
).toUpperCase();

const length_palindrome = possible_palindrome.length;

let palindrome = true;

for (let i = 0; i < length_palindrome; i++) {
  if (possible_palindrome[i] !== possible_palindrome[length_palindrome - i]) {
    palindrome = false;
    break;
  }
}

if (palindrome) {
  console.log(`${possible_palindrome} is NOT a palindrome!`);
} else {
  console.log(`${possible_palindrome} is a palindrome!`);
}

// Lorem ipsum generator

const paragraphs =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et enim non elit dapibus sodales sit amet sed urna. Donec sed dui sed risus fringilla varius sed et arcu. Pellentesque elementum ligula non sapien malesuada vehicula. Aenean sagittis enim ut feugiat porta. Sed pellentesque eleifend metus, vel malesuada lorem sodales eu. Cras venenatis nisl at libero mattis, quis posuere neque sollicitudin. Sed arcu dolor, laoreet non ornare sed, sollicitudin in lacus. Etiam ac mattis dolor, ut pretium elit. Aenean rutrum diam elit, at efficitur leo mollis eu. Ut sed tellus suscipit erat ultricies imperdiet. Fusce volutpat mauris in blandit auctor. Donec scelerisque mollis ante at finibus. Sed lobortis eleifend metus tempus laoreet. Nullam viverra dictum risus eu porta. Nam consequat eget diam eu faucibus. Proin hendrerit quam ac leo elementum, vel molestie quam auctor. Suspendisse commodo tempus mi, et congue dui hendrerit eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce mollis, erat ut venenatis tempus, tellus libero imperdiet felis, a placerat dui mi in elit. Aliquam imperdiet, nisi ut aliquet faucibus, est orci consectetur dolor, eu lacinia urna metus id nisl. Suspendisse potenti. Praesent ut malesuada diam, id efficitur sem. Aliquam nec sapien quis neque blandit tempus quis vel mauris. Fusce non leo tellus. Nam id sem ultricies, lacinia erat id, feugiat lorem. Mauris sagittis arcu augue, in laoreet velit euismod sit amet. Praesent accumsan augue ornare, commodo sapien fermentum, venenatis ligula. Donec facilisis eros sapien, in pellentesque turpis commodo sit amet. Aliquam vitae sapien erat. Nam faucibus scelerisque feugiat. Sed et quam sit amet leo suscipit dictum. Nullam at nisl sit amet massa dictum faucibus.";
let paragraphs_clean = paragraphs.replace(",", "").replace(".", "");
const paragraphs_word_array = paragraphs_clean.split(" ");
const paragraphs_word_array_length = paragraphs_word_array.length;
console.log(
  paragraphs_word_array_length + " are the amount of words in the string"
);
const len_par = paragraphs.length;

let count = 0;
paragraphs_clean = " " + paragraphs_clean;

for (let i = 0; i < paragraphs_clean.length; i++) {
  if (paragraphs_clean[i] == " ") {
    count++;
  }
}

console.log(
  count + " are the amount of words in the string according to the loop"
);

let et_count = 0;

paragraphs_word_array.forEach(function(element) {
  if (element === "et") {
    et_count++;
  }
});

console.log(`The word et is encountered ${et_count} in the string`);

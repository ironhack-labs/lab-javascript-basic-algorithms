//Iteration 1
let hacker1 = "Luke";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Yoda";
console.log(`The navigator's name is ${hacker2}`);


//Iteration 2
if (hacker1.length > hacker2.length){
  console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length < hacker2.length){
  console.log(`The driver ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`);
}


//Iteration 3
let driversNameUpperCase = "";

for (let i = 0; i < hacker1.length; i++){
  driversNameUpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(driversNameUpperCase);

/* Only a test to remember the logic behind
for (let i = 100; i > 0; i--){
  console.log(i);
}
*/

//console.log(hacker2.length);

let navigatorsNameReverse = "";

for (let i = hacker2.length - 1; i >= 0; i--){
  navigatorsNameReverse += hacker2[i];
}
console.log(navigatorsNameReverse);

// Q: if hacker2.length is 4, why does the loop run 5 times and prints out "undefinedadoY" if i don't write "hacker2.length - 1"? Shouldn't it only run 4 times?



/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

/* --- THIS WORKS, BUT I DIDN'T USE A LOOP
if(hacker1<hacker2){
  console.log("The driver's name goes first.");
}else if (hacker1>hacker2){
  console.log("Yo, the navigator goes first definitely.");
}else{
  console.log("What?! You both have the same name?");
}
*/

/*
let lexicographicOrder ="";

// console.log(hacker1.localeCompare(hacker2));

for (let i = 0; i < 1; i++){
  if(hacker1.localeCompare(hacker2) === -1){
    lexicographicOrder += "The driver's name goes first.";
    break;
  }else if(hacker1.localeCompare(hacker2) === 1){
    lexicographicOrder += "Yo, the navigator goes first definitely.";
    break;
  }else{
    lexicographicOrder += "What?! You both have the same name?";
    break;
  }
}

console.log(lexicographicOrder);
*/

if(hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.");
  }else if(hacker1.localeCompare(hacker2) > 0){
    console.log("Yo, the navigator goes first definitely.");
  }else{
    console.log("What?! You both have the same name?");
  }




// BONUS TIME!

let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas diam neque, vitae egestas ligula faucibus sit amet. Sed sit amet justo vel quam sagittis tincidunt. Nulla in tristique orci. In rutrum, erat eu cursus malesuada, ipsum nisl cursus urna, sed mattis eros nisi vel lacus. Aliquam faucibus elit sed nunc tempus hendrerit. Aliquam eleifend, lectus in laoreet sagittis, mauris neque rutrum turpis, ut cursus arcu lacus a justo. Fusce dui dui, bibendum nec porttitor sit amet, gravida eget metus. Donec rhoncus ac ligula a egestas. Sed dolor augue, efficitur at vestibulum eget, mollis ut lorem. Praesent tortor lacus, mattis at lectus a, congue convallis magna. Fusce quam enim, dignissim at tempus ac, vulputate non massa. Integer non leo eu velit consequat efficitur rutrum in eros. Cras a tristique dolor. Phasellus et aliquam ante. Mauris lacus lacus, interdum vitae massa sit amet, tincidunt commodo ligula. Vestibulum dui leo, semper eu leo posuere, vehicula ullamcorper leo. Nullam tincidunt ex vitae dapibus mollis. Cras pharetra vestibulum sagittis. In sit amet enim faucibus, rutrum lacus sed, sodales urna. Donec a molestie nisi. Etiam vehicula auctor nisl nec porta. Donec blandit neque nisi, vel convallis ex vehicula ac. Aliquam posuere, metus a fermentum pulvinar, mi eros efficitur nunc, vel malesuada turpis erat at dolor. Nulla at lectus odio. Nam id pretium lectus, a pharetra justo. Nam elementum vel elit molestie euismod. Cras ut eros quis odio volutpat bibendum quis vitae enim. Donec iaculis, massa id faucibus maximus, mauris nulla pulvinar lectus, a pretium dui enim euismod nulla. Duis hendrerit, lectus in efficitur tincidunt, lectus ex volutpat leo, eu sagittis erat est et dui. Nunc vel magna efficitur, pharetra sem sed, volutpat eros. Aenean facilisis ultrices odio nec blandit. Mauris aliquam lectus at mi vulputate tincidunt. Fusce nec erat vitae ligula porttitor interdum. Suspendisse at orci at risus finibus scelerisque. Donec congue ex ligula, et egestas dui cursus ullamcorper. Sed ac ligula ultricies, interdum quam nec, tempor justo. Maecenas in arcu a ipsum tempor aliquet nec in odio. Fusce mattis viverra feugiat. Morbi luctus, nibh sit amet vulputate gravida, diam metus fermentum sem, et placerat metus massa nec risus. Vivamus et sagittis quam, in ultrices massa. Fusce fringilla ex nec eros mattis, sit amet lacinia orci pretium. Nam vel velit et mauris faucibus consequat. In venenatis, dolor eu convallis elementum, nunc nibh tristique ante, ac sodales arcu lacus sed augue.";

/*
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/


let wordCounter = paragraphs.split(" ").length;

console.log(wordCounter);

let etCounter = paragraphs.split(" et ").length - 1;
console.log(etCounter);



//CHECK IF STRING IS PALINDROME

let phraseToCheck = "A man, a plan, a canal, Panama!";
let lowerCase = phraseToCheck.toLowerCase();
//console.log(lowerCase);

let onlyLetters = lowerCase.slice(0,-1).match(/[a-z]/gi);
//console.log(onlyLetters);

let isPalindrome = "";

for (let i = 0; i < onlyLetters.length/2; i++) {
   if (onlyLetters[i] !== onlyLetters[onlyLetters.length - 1 - i]){
      isPalindrome = "It's not a Palindrome.";
      break;
   } else{
     isPalindrome = "It's a Palindrome!";
   }
}

console.log(isPalindrome);
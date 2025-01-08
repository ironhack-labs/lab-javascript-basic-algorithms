// Iteration 1: Names and Input
let hacker1 = "Artur";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Nune";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let hacker1Upper = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Upper += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Upper);

let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--){
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

if(hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}


// Bonus 1 
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo urna enim, eget porttitor odio consectetur id. Donec iaculis lorem ut pellentesque lobortis. Proin a nisi nisl. Proin lorem augue, porta eu ullamcorper sed, bibendum rutrum risus. Aenean urna nulla, aliquam sit amet pulvinar ut, fringilla nec sapien. Duis dignissim sed eros eu mollis. Aliquam tempus enim vel leo consectetur pulvinar. Etiam a egestas turpis, eu commodo lorem. Duis nec ante condimentum, tincidunt elit accumsan, aliquam massa. Praesent aliquam enim id velit faucibus maximus. Ut aliquet mattis tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat elementum quam, eu laoreet ipsum consequat a. Phasellus nulla libero, vehicula in tortor at, mollis vulputate diam. Fusce faucibus scelerisque augue, ut auctor justo. Pellentesque scelerisque elit nec nisl auctor semper. Etiam quis felis tellus. Praesent non dapibus nibh. Cras ultrices urna id sem sagittis ultrices. Nunc posuere turpis quis varius porttitor. Fusce laoreet leo nec sapien malesuada auctor. Integer maximus, velit in viverra mollis, turpis felis tincidunt ex, nec hendrerit risus nisi non odio. Aliquam erat volutpat. Nunc tempor enim volutpat nulla venenatis commodo non vitae risus.
Maecenas non porttitor purus. Ut quis dapibus felis, ullamcorper pretium nunc. Sed felis dolor, gravida vitae ipsum vitae, tincidunt lacinia orci. Mauris ultrices ex non risus tincidunt iaculis. Vivamus auctor arcu sit amet purus porta, nec elementum nisi venenatis. Praesent quis metus mollis nisi aliquet hendrerit ut ac ipsum. Fusce fermentum porta urna quis auctor. Ut a lobortis ante, vitae hendrerit ligula. Mauris a finibus justo. Ut gravida risus vitae nibh mattis, sit amet convallis tellus tristique. Pellentesque euismod elit erat, et ullamcorper turpis lobortis quis. Donec hendrerit nulla mi, non eleifend augue ultrices vitae. Praesent tempus, lacus quis dapibus congue, nisl magna tincidunt nibh, eget cursus risus nibh id turpis. Suspendisse potenti. Curabitur dapibus aliquet egestas.
Vestibulum vehicula vehicula ipsum sed mollis. Etiam dignissim volutpat maximus. Donec quis neque vel quam accumsan ultricies id vel metus. Sed arcu nisi, dictum in tempus quis, tincidunt eget orci. Nullam cursus eu erat quis volutpat. Mauris eleifend ultrices posuere. Vestibulum tincidunt libero vitae orci congue dignissim. Praesent pretium risus at elementum congue. Phasellus at interdum nibh. Aenean lacinia nec arcu eget lacinia. Vestibulum sollicitudin, libero eu varius eleifend, velit leo interdum tellus, nec suscipit nulla diam eu tortor. Duis vel lectus ut nisi aliquam consectetur. Phasellus maximus dui metus, ut lacinia lectus hendrerit ut. Aliquam mollis, urna et vehicula rutrum, diam nulla feugiat mauris, sed egestas dolor lorem et eros. Sed scelerisque felis nec porttitor volutpat.
In in orci odio. Nam faucibus malesuada lacus, eu pretium dui gravida luctus. Sed tellus sem, molestie nec libero id, pulvinar vehicula mi. Curabitur porta elementum pulvinar. Donec dictum augue eu pharetra bibendum. Fusce consectetur, enim non ultrices vulputate, nulla est pretium sem, eget ornare neque diam nec neque. Integer at blandit nulla. Quisque eleifend, massa a cursus porta, arcu lacus congue arcu, nec consequat tortor neque ut nunc. Phasellus feugiat nulla nisi, at consectetur magna consectetur non. Donec sit amet aliquet leo. Mauris non libero sapien. In id ultrices sem. Nam maximus ipsum non turpis mattis, bibendum ultrices erat maximus.`

function countWords(text) {
  return text.split(" ").length; // .split() returns an array of words and .length returns the number of elements in the array
 }

console.log(countWords(longText));


function countWordsIfet(text) {/*  */
    let words = text.split(" "); // generate an array of words A/*  */
    let etCount = 0; // initialize a counter for the number of times 'et' appears
    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'et') { 
            etCount++; 
        }
    }
    return etCount;
  }

  console.log(countWordsIfet(longText));

// Bonus 2:

let phraseToCheck = "Artur";
let isPalindrome = true;

function palindromeCheck(phrase) {
    
    let lowerCasePhrase = phrase.toLowerCase(); 
    console.log(`lowerCasePhrase: ${lowerCasePhrase}`);
    let removeNonAlphanumeric = lowerCasePhrase.replace(/[^a-z0-9]/g, '');
    console.log(`removeNonAlphanumeric: ${removeNonAlphanumeric}`);
    
    for (let i = 0; i < removeNonAlphanumeric.length; i++) {

        // console.log(`first element: ${removeNonAlphanumeric[i]}`);
        // console.log(`last element: ${removeNonAlphanumeric[removeNonAlphanumeric.length - 1 - i]}`);
        if (removeNonAlphanumeric[i] !== removeNonAlphanumeric[removeNonAlphanumeric.length - 1 - i]) {
            isPalindrome = false;
            return isPalindrome;
        } 
    }
    return isPalindrome;
};

console.log(palindromeCheck(phraseToCheck));
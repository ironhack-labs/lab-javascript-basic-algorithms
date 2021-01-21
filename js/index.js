// Iteration 1: Names and Input
let hacker1 = "Michelle";
let hacker2 = "Somebody";

const hacker1Sentence = "The driver's name is" + " " + hacker1;
const hacker2Sentence = `The navigator's name is ${hacker2}`;

console.log(hacker1Sentence);
console.log(hacker2Sentence);

// Iteration 2: Conditionals
let hacker1 = "Michelle";
let hacker2 = "Somebody";

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker2Length > hacker1Length) {
  console.log(
    `It mees that the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log(
    `WOW, you both have equally long names, ${hacker1Length} characters. `
  );
}

// Iteration 3: Loops
let hacker1 = "Michelle";
let hacker2 = "Somebody";

let hacker1CaptilizedName = "";
for (let i = 0; i < hacker1.length; i += 1) {
  hacker1CaptilizedName += `${hacker1[i].toUpperCase()} `;
}

console.log(hacker1CaptilizedName.trim()); //trim pega os espaços do começo e final da string -não pega entre- e tira esses espaços

//3.2
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("Somebody");

Bonus 1 

const phrase = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat ipsum id faucibus iaculis. Ut eget libero sed erat egestas pellentesque. Cras eu vehicula magna. Suspendisse viverra ligula sit amet tellus varius, vitae pretium odio gravida. Proin consectetur neque ex, non vehicula ex pretium sed. Nam finibus purus eu sapien euismod, a pretium ex accumsan. Sed faucibus vulputate mattis. Vivamus id bibendum quam, sit amet ultricies leo. Maecenas ac felis non massa egestas hendrerit eget rhoncus neque. Nulla semper hendrerit est, imperdiet finibus diam viverra ut. Curabitur diam nisi, sagittis et rutrum vel, aliquet quis diam.\n\nQuisque facilisis enim elit, eu dictum sem tempus vel. Duis fringilla mauris eget turpis finibus commodo. Pellentesque accumsan purus sed urna vestibulum venenatis. In vitae lacus vel turpis fringilla suscipit et porta ipsum. Vivamus facilisis consectetur laoreet. Phasellus iaculis sem quis mi tempus, non congue lorem lacinia. Nam ullamcorper felis ac ipsum consectetur tincidunt. Mauris facilisis est eget nisi suscipit, non dictum ipsum pharetra. Maecenas convallis risus malesuada sem vestibulum, eu ultrices felis ullamcorper. Donec lacinia sit amet arcu sit amet iaculis.\n\nFusce quis ex ac justo lobortis euismod vitae a arcu. Maecenas nulla mauris, fermentum vitae nunc eleifend, convallis porta tortor. Integer scelerisque ante blandit, dapibus sapien eu, tristique orci. Duis non dignissim augue. Donec quis nisl ac turpis venenatis condimentum. Integer diam odio, lobortis nec quam vitae, porta porttitor quam. Curabitur aliquet turpis quis tellus vulputate porttitor. Nunc quis imperdiet ante, eget pretium velit. Duis sollicitudin vitae mauris in hendrerit.`;

//contador de palavras
let result = phrase.split(' ').length;
 
for(let i = 0; i < phrase.length; i += 1){
 if (phrase[i - 1] !== '\n' && ((phrase[i] === '\n' && phrase[i + 1] === '\n') || phrase[i] === '\n')){
   result += 1
 }
}

//contador 'et'
let countEtWords = 0;
for (let i = 0; i < phrase.length; i+= 1){
  if(phrase.slice(i, i+2) === 'et') { 
    const characterBeforeIsALetter = phrase.charCodeAt(i-1) >= 65 && phrase.charCodeAt(i-1) <=90 || phrase.charCodeAt(i-1) >= 97 && phrase.charCodeAt(i-1) <= 122;

    const characterAfterIsALetter = phrase.charCodeAt(i + 2) >= 65 && phrase.charCodeAt(i + 2) <=90 || phrase.charCodeAt(i + 2) >= 97 && phrase.charCodeAt(i + 2) <= 122;

    if(!characterBeforeIsALetter && !characterAfterIsALetter){
      countEtWords += 1;
    }
  }
}



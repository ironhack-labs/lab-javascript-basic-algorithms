// Iteration 1: Names and Input

const hacker1 = "Flavia"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Eliana"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

// 3.1 

let stupidName = "";
for (let i = 0; i < hacker1.length; i++) {
    const newName = hacker1[i].toUpperCase();
    stupidName += newName + " ";
}

console.log(stupidName);

// 3.2
let stupidName2 = "";

for (let i = hacker2.length - 1; i > -1; i--) {
    const newName2 = hacker2[i];
    stupidName2 += newName2 + " ";
}

console.log(stupidName2);

//3.3
if (hacker1 > hacker2) {
    console.log(`The driver's name goes first.`);
}
else if (hacker1 < hacker2) {
    console.log(`Yo, the navigator goes first, definitely.`);
}
else if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1: Palindrome
// Palindrome

const paragraph1 ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare lorem at tellus vestibulum, quis semper libero vulputate. Nullam lacinia sed lacus non suscipit. Quisque sit amet dui tincidunt, pulvinar arcu non, malesuada orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit enim sapien, a maximus ex venenatis eget. Donec sollicitudin non lorem eget ornare. Curabitur facilisis est turpis, ac viverra nunc posuere sodales. Donec tincidunt viverra magna, convallis volutpat arcu vehicula non. Morbi posuere semper ante sit amet euismod. Cras consequat, mi non gravida posuere, eros ligula imperdiet urna, sed bibendum urna dui aliquam quam. Praesent congue, odio condimentum placerat tristique, odio velit imperdiet metus, eget tincidunt sapien arcu non quam. Pellentesque dignissim malesuada feugiat. Phasellus id lorem pellentesque, accumsan turpis vitae, gravida est. Etiam et erat diam. Integer iaculis diam massa, nec sagittis nulla placerat ac. Sed in tellus a massa facilisis dapibus a non felis."

const paragraph2 = "Nunc quam ipsum, aliquam ut libero in, ullamcorper scelerisque eros.Morbi ut urna pharetra, viverra arcu et, fringilla elit.Mauris sollicitudin, massa id fermentum sollicitudin, lectus diam volutpat nulla, at accumsan justo risus sed lorem.Phasellus malesuada dignissim commodo.Fusce accumsan aliquet hendrerit.Nullam sed quam luctus, commodo mauris in, rutrum nibh.Duis consectetur urna nunc, sit amet hendrerit massa suscipit quis.Nam a gravida est.Aenean quis libero sed ex tristique dictum et sed nibh.Donec et quam in diam interdum cursus.Aenean varius quis eros sit amet rutrum.";

const paragraph3 = "Proin nisi libero, blandit eu semper vitae, ultricies eu dui.Phasellus accumsan, neque convallis aliquam convallis, risus erat dignissim magna, cursus sagittis sapien arcu nec turpis.Pellentesque ut ligula metus.Quisque vulputate ligula at purus lacinia scelerisque vitae ut tortor.Nullam molestie est id nisi fermentum, in semper risus tristique.Fusce auctor quam in ultrices aliquam.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Nam sit amet orci a velit placerat accumsan a ut augue.Suspendisse vulputate accumsan elit, in posuere nibh accumsan in.Ut bibendum ligula in ante mattis, nec tincidunt tortor molestie.Aliquam ac dui convallis, condimentum nulla vel, lacinia tortor.Nam tristique urna vel elementum gravida.Nulla pretium erat lectus, a sodales magna rutrum non.Sed consectetur, velit in tincidunt efficitur, quam odio euismod massa, eu pharetra nisi est quis enim.Phasellus mattis eleifend elit, ac fringilla risus pellentesque quis."; 

const longText = paragraph1 + " " + paragraph2 + " " + paragraph3;

const demo = "Eliana no sabe codear. No sabe lo que está haciendo."

function wordCounter (str) {
  let wordTotal = 0;
  
    for (let i = 0; i < str.length; i++) {
        
        if (str[i] === " ") {
            wordTotal++;
          }
   
    }
    return wordTotal +1;
}

function wordFinder (str) {
    let wordTimes = 0;
    
      for (let i = 0; i < str.length; i++) {
          
          if (str[i] === "et") {
              wordTotal++;
            }
     
      }
      return wordTotal;
  }

console.log(wordCounter(longText));

let wordCount = longText.split(' et').length -1;
  
console.log(wordCount);  ///////// me cago en todo lo que escribí antes.

// Bonus 2: Count the repetitions of a word in a text



phraseToCheck = "Amor, Roma" ;

function checkStupidPalindrome (phrase) {

  const preparedPhrase = phrase.toLowerCase().replace(/[, . " "!?']/g, '');  
  phraseReversed = "";
    
for (let i = preparedPhrase.length - 1; i > -1; i--) {
    const charReversed = preparedPhrase[i];
    phraseReversed += charReversed;
}
    
        if (preparedPhrase === phraseReversed) {
            return true;
        } 
  else {
            return false;
        }

}

console.log(checkStupidPalindrome(phraseToCheck));


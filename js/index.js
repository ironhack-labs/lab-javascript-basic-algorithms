// Iteration 1: Names and Input

let hacker1 = 'Amandaaaa';
console.log(`The driver's name is ${hacker1} `);
let hacker2 = 'BettyBoop';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if(hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long name, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let separated = '';
let reverse ='';

for(let i = 0; i < hacker1.length; i++){
    separated += hacker1[i].toUpperCase() + " ";
}

console.log(separated);

for(let i = hacker2.length-1; i >= 0; i--){
    reverse += hacker2[i];
}

console.log(reverse);

if(hacker1.localeCompare(hacker2) < 0){
    console.log(`The driver's name goes first.`);
}
else if(hacker1.localeCompare(hacker2) > 0){
    console.log(`Yo, the navigator's name goes first defnitely.`);
}
else if (hacker1.localeCompare(hacker2) == 0){
    console.log(`What?! you both have the same name?`);
}

//Bonus 1
let text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin metus nibh, molestie nec placerat vitae, placerat gravida ligula. Vivamus sed ante massa. Etiam luctus aliquet rutrum. Praesent vel aliquam felis, rutrum fringilla neque. Aliquam pharetra imperdiet tempus. Maecenas sodales dolor at eleifend pulvinar. Duis odio enim, suscipit ut libero ut, tempor molestie erat. Suspendisse et varius diam. Nullam fermentum elementum odio. Sed feugiat dignissim pulvinar. In leo sem, tempus nec elit eu, eleifend placerat turpis. Aenean lacinia viverra tincidunt. Donec non metus at dolor elementum pretium. Nam nec dictum dolor. Morbi vitae magna sit amet ante viverra vehicula. Quisque vitae sapien vel ante fringilla faucibus. Ut nunc enim, mollis vel semper at, molestie quis eros. Proin justo sapien, volutpat in libero interdum, tincidunt semper dolor. Aliquam maximus accumsan dolor porta suscipit. Maecenas porttitor magna arcu, in tincidunt velit suscipit id. Proin at tincidunt erat. Ut finibus est et massa cursus, sollicitudin ornare libero tincidunt. Ut sem leo, efficitur a tincidunt quis, gravida vitae eros. Sed dictum augue sit amet ornare tempor. Suspendisse nec augue vitae nunc viverra ornare feugiat id lacus. Donec condimentum augue nec orci aliquet aliquet. Nulla quis nulla mattis, mollis velit quis, rutrum mi. Curabitur sed pharetra neque. Sed volutpat, purus quis tristique finibus, risus leo tristique felis, vel dapibus velit libero ut tortor. Integer quis massa enim. Aliquam ut quam accumsan, fringilla leo in, sollicitudin augue. Morbi fringilla libero pharetra erat lobortis, vel imperdiet magna tincidunt. Etiam semper, libero sit amet vestibulum lobortis, orci ipsum tristique quam, sit amet iaculis tellus nibh ac mi. Sed fermentum lacinia tempor. Donec at volutpat massa. Fusce dapibus diam sodales cursus cursus. Duis sed bibendum nulla, ac imperdiet purus. Vestibulum lacinia felis vitae venenatis imperdiet. Integer at turpis ante. Maecenas felis mauris, pellentesque a porttitor nec, eleifend at diam.";

let wordCount = 1;

for(let i = 0; i <= text.length; i++){
    if(text.charAt(i) == ' '){
        wordCount++;
    }
}

console.log("Word Count: " + wordCount);

let etCount = 0;
for(let i = 0; i <= text.length; i++){
    if(text[i] == 'e' && text[i+1] == 't'){
        etCount++;
    }
}

console.log("There are " + etCount + " ets in the text");

//Bonus 2

let phraseToCheck = `A man, a plan, a canal, Panama!`;
let palindrome;
let adjusted = '';

for(let i = 0; i < phraseToCheck.length; i++){
    if(phraseToCheck.charCodeAt(i) > 64){
        adjusted += phraseToCheck[i];
    }
}

for(let i = 0; i < phraseToCheck.length/2-1; i++){
    if(adjusted[0+i].toLowerCase() == adjusted[adjusted.length-1-i].toLowerCase()){
        palindrome = true;
    }
    else{
        palindrome = false;
    }
}
 
console.log(`Is ${phraseToCheck} a palindrome? ${palindrome}`);

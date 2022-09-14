// Iteration 1: Names and Input

const hacker1 = 'Sainz';
const hacker2 = 'Leclerc';
console.log (`Iteration 1: The 1rst driver's name is ${hacker1}, the 2nd driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`Iteration 2: ${hacker1} has the longest name, it has ${hacker1.length} characters`);
} if (hacker2.length > hacker1.length){
    console.log(`Iteration 2: ${hacker2} has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Iteration 2: Wow you both have equally long names with ${hacker1.length} characters!`);
}
// Iteration 3: Loops

let hacker1Up = hacker1.toUpperCase();
let character = '';

for (i=0;i<hacker1.length;i++){  //1rst method with Arrays
  character += `${hacker1Up[i]} `;
};

console.log(`Iteration 3 : ${hacker1} uppercased name is ${character}`);
 
let reverseName = '';
for(let i=hacker2.length -1;i>=0;i--){
    reverseName += hacker2[i];
}
console.log(`Iteration 3 : ${hacker2} reversed name is ${reverseName}`);

// Bonus 1 - with .search() property

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend mattis gravida. Quisque semper sit amet est et fringilla. Cras semper eget mi eu lacinia. In hac habitasse platea dictumst. Proin tempus orci nec tortor sodales placerat. Aliquam ornare eu lorem ac finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ornare maximus nulla eu volutpat. Nam sit amet augue scelerisque, pretium est sit amet, efficitur arcu. Ut imperdiet, nisl vel faucibus pretium, tortor turpis molestie dui, finibus accumsan ligula metus ut libero. Cras a aliquam velit. Nam tincidunt mauris vel congue iaculis. Aliquam eu elit dapibus ante ultrices tincidunt. Aliquam erat volutpat. In id imperdiet felis. Morbi varius nulla nulla. Nam ex urna, scelerisque sodales magna id, semper finibus magna. Sed ac malesuada ante. Maecenas nisi lorem, pellentesque id porttitor ac, vulputate ornare dolor. Donec vulputate lobortis justo sed venenatis. Fusce semper molestie diam quis volutpat. Donec dignissim, tellus vel varius ornare, libero purus volutpat est, id consequat diam mauris non erat. In ut ipsum accumsan, volutpat est non, tincidunt tortor. Fusce in venenatis risus. Morbi nunc metus, egestas ac imperdiet sed, pellentesque in diam. Integer sagittis euismod quam at tristique. Vivamus nec erat et orci mattis interdum venenatis ut purus. Nulla in tortor velit. Cras dapibus ante sit amet blandit gravida. Aenean dolor nisl, porta non metus nec, dignissim molestie libero. Praesent feugiat risus in scelerisque egestas. Fusce arcu nulla, venenatis at dolor ut, tincidunt sollicitudin nulla. Vestibulum dignissim mauris augue, pretium accumsan sem ultrices eu. Ut nec feugiat quam.";
console.log(`Bonus 1: The text has ${text.length} characters`); 
let wordToFind = 'et';

console.log(`Bonus 1: The word et appears ${text.search(wordToFind)} times in the ${typeof text}`); // this returns 24 instead of 20 - why?

// Bonus 1 - with for loop
let counter = 0;
for (i=0;i<text.length;i++){
    if (text[i] === 'e' && text[i+1] === 't'){
        
        counter += 1;
    } else {
        continue;
    }
}
console.log(`Bonus 1: The word et appears ${counter} times in the ${typeof text}`); //returns 20 which is correct but why does the .search() property find 24 occurences of the 'et' word?

// Bonus 2

let phraseToCheck = 'A man, a plan,!!!! a canal, Panama!';

function palindrome(){
    let lowerCased = phraseToCheck.toLowerCase();
    let noCommas = lowerCased.replaceAll(',','');
    let noSymbols = noCommas.replaceAll('?'&&'!','');
    let unspaced = noSymbols.replaceAll(/\s+/g, '');
    let half = Math.ceil(unspaced.length/2);
    let firstHalf = unspaced.substring(0,half);
    let secondHalf = unspaced.substring(half-1);
    let secondHalfReversed = '';
    for (i=secondHalf.length-1;i>=0;i--){
        secondHalfReversed += secondHalf[i];
    }
    if (secondHalfReversed === firstHalf){
        console.log('Bonus 2: It is a palindrome')
    } else {
        console.log('Bonus 2: It is not a palindrome')
}
}

palindrome();
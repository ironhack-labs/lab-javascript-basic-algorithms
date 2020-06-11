// Iteration 1: Names and Input

var hacker1 = "Menhaj";
console.log(`The driver name\'s is ${hacker1}`);

var hacker2 = "Axel";
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

function printName(name){
    let outcome = "";
    for(let i = 0; i < name.length; i++){
        outcome += name[i].toUpperCase() + " ";
    }
    return outcome;
}
console.log(printName(hacker1));

function printNameReverse(name){
    let outcome = "";
    for(let i = name.length - 1; i >= 0; i--){
        outcome += name[i];
    }
    return outcome;
}
console.log(printNameReverse(hacker2));

function compareLexico(){
    let outcome;
    let comparaisonOngoing = true;
    let index = 0;
    while(comparaisonOngoing === true){
        if(hacker1[index] !== undefined && hacker2[index] !== undefined){
            if(hacker1[index] < hacker2[index]){
                outcome = "The driver's name goes first.";
                comparaisonOngoing = false;
            } else if(hacker1[index] > hacker2[index]){
                outcome = "Yo, the navigator goes first definitely.";
                comparaisonOngoing = false;
            }
        } else if(hacker1[index] === undefined && hacker2[index] !== undefined){
            outcome = "The driver's name goes first.";
            comparaisonOngoing = false;
        } else if(hacker1[index] !== undefined && hacker2[index] === undefined){
            outcome = "Yo, the navigator goes first definitely.";
            comparaisonOngoing = false;
        } else{
            outcome = "What?! You both have the same name?";
            comparaisonOngoing = false;
        }
        index++;
    }
    if(outcome === undefined){
        outcome = "What?! You both have the same name?";
    }
    return outcome;
}

console.log(compareLexico());

// Bonus 1 
var text = "Loremet ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris lorem, hendrerit hendrvarius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In vitae auctor est. Duis sit amet nibh ultrices, imperdiet lorem nec, molestie elit. Integer at sapien justo. Praesent at faucibus est, ut maximus ante. Nunc varius est nec posuere interdum. Cras at magna erat. Curabitur at mauris ac purus bibendum iaculis ut nec eros. Donec gravida nisi vitae sollicitudin sagittis. Curabitur sodales felis non nisi posuere accumsan feugiat sit amet diam. Praesent velit nisl, consectetur vitae venenatis ut, sagittis id libero.";

function countWords(par){
    let wordCount = 0;
    for(let i = 0; i < par.length; i++){
        if(par[i] === " " && par[i-1] !== " "){
            wordCount++;
        }
    }
    if(par !== false){
        wordCount++;
    }
    return wordCount;
}

console.log(`Number of words: ${countWords(text)}`);

console.log(`Occurence of \"et\": ${text.match(/\bet\b/g).length}`);

// Bonus 2

function isPalindrome(word){
    let index = 0;
    let reverseIndex = word.length -1;
    let isPalin = true;
    let outcome = `${word} is a palindrome`;
    if(word !== ""){
        while((index !== reverseIndex) && (index < reverseIndex) && isPalin === true){
            if(word[index] === "," || word[index] === " " || word[index] === "'" || word[index] === "?"){
                index++;
            } else if(word[reverseIndex] === "," || word[reverseIndex] === " " || word[reverseIndex] === "'" || word[reverseIndex] === "?"){
                reverseIndex--;
            } else if(word[index].toLowerCase() !== word[reverseIndex].toLowerCase()){
                isPalin = false;
                outcome = `Hmmm no... "${word}" is not a palindrome`;
                console.log(index);
                console.log(reverseIndex);
            } else{
                index++;
                reverseIndex--;
            }
            
        }
    } else{
        outcome = "Empty string";
    }
    return outcome;
}

console.log(isPalindrome("No 'x' in Nixon"));
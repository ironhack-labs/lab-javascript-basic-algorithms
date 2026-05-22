// Iteration 1: Names and Input
let hacker1="Leyla";
console.log("The driver's name is "+hacker1);
let hacker2="Kamran";
console.log("The navigator's name is "+hacker2);


// Iteration 2: Conditionals
const hacker1Length=hacker1.length;
const hacker2Length=hacker2.length;
if(hacker1Length>hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
}
else if(hacker1Length<hacker2Length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}


// Iteration 3: Loops
let result="";
for(let i=0; i<hacker1Length;i++){
    result+=hacker1[i].toUpperCase()+" ";
}
console.log(result.trim());

let reverse="";
for(let i=hacker2Length-1; i>=0; i--){
    reverse+=hacker2[i];
}
console.log(reverse);

if(hacker1<hacker2){
    console.log("The driver's name goes first.");
}
else if(hacker1>hacker2){
    console.log("Yo, the navigator goes first, definitely.");
}
else{
    console.log("What?! You both have the same name?");
}

//Bonus 1: Lorem ipsum generator
const longText=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.`

let wordCount=0;
let inword=false;
for(let i=0; i<longText.length; i++){
    if(longText[i]!==" " && longText[i]!=="\n" && longText[i]!=="\t"){
        if(!inword){
            wordCount++;
            inword=true;
        }
    }
    else{
        inword=false;
    }
}
console.log(`The number of words in the long text is ${wordCount}.`);

let etCount = 0;

for (let i = 0; i < longText.length - 1; i++) {
    if (longText[i] === "e" && longText[i+1] === "t") {
        let beforeOk = (i === 0 || longText[i-1] === " " || longText[i-1] === "\n");
        let nextChar = longText[i+2];
        let afterOk = (i + 2 === longText.length || nextChar === " " || nextChar === "\n" || nextChar === "." || nextChar === ",");
        if (beforeOk && afterOk) {
            etCount++;
        }
    }
}
console.log(`The number of "et" words in the long text is ${etCount}.`);

//Bonus 2: Palindrome
let phraseToCheck = "This is apple";

let cleanPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
    let char = phraseToCheck[i].toLowerCase();
    
    if (char !== " " && char !== "," && char !== "." && char !== "!" && char !== "?") {
        cleanPhrase += char;
    }
}
let newPhrase = "";
for (let i = cleanPhrase.length - 1; i >= 0; i--) {
    newPhrase += cleanPhrase[i];
}

if (cleanPhrase === newPhrase) {
    console.log("The phrase is a palindrome.");
} else {  
    console.log("The phrase is not a palindrome.");
}
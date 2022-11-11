// Iteration 1: Names and Input
let hacker1 = "Jack";
console.log("The driver's name is " + hacker1);
let hacker2 = "Jhon";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

/* Iteration 3: Loops
   3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e.
   1rst solution
*/

let upperName = ""
for (let ch of hacker1) {
    upperName += ch.toUpperCase() + " ";
}
console.log(upperName)

// 2nd solution
console.log(hacker1.toUpperCase().split("").map(function(ch) { return ch}).join(" "));


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e.
// 1rst solution
var reversed = "";
for (i = hacker1.length; i>=0; i--){
    reversed += hacker1.charAt(i);
}
console.log(reversed);

// 2nd solution

console.log(hacker1.split("").map(function(ch) { return ch}).reverse().join(""));


function whoFirst(name1, name2){
    name1.toLowerCase;
    name2.toLowerCase;

    if (name1.charCodeAt(0) < name2.charCodeAt(0)) {
        console.log("The driver's name goes first.");
        
    } else if (name1.charCodeAt(0) === name2.charCodeAt(0)){

        for (let i in name1){
            
            if (i == name2.length-1 || i == name1.length-1){
                
                if (name1.length < name2.length || name1.charCodeAt(i) < name2.charCodeAt(i)){
                    console.log("The driver's name goes first.");
                    break;
                }
                else if (name1.length > name2.length || name1.charCodeAt(i) > name2.charCodeAt(i)){
                    console.log("Yo, the navigator goes first definitely.");
                    break;
                }
                else{
                    console.log("What?! You both have the same name?");
                    break;
                }
            }
            else {
                
                if (name1.charCodeAt(i) < name2.charCodeAt(i)){
                    console.log("The driver's name goes first.");
                    break;
                }
                else if (name1.charCodeAt(i) > name2.charCodeAt(i)){
                    console.log("Yo, the navigator goes first definitely.");
                    break;
                }
            }
        }
        
    } 
    else {console.log("Yo, the navigator goes first definitely.");}
}

whoFirst(hacker1, hacker2);


// Bonus 1

// Count the number of words in the string.

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et rutrum enim. Phasellus imperdiet varius felis bibendum placerat. Nam tincidunt elit nec nisl aliquam lacinia. Pellentesque ac ex quam. Duis ornare nulla quis quam mattis dapibus. Cras vel sollicitudin lectus, quis pulvinar purus. Aliquam nec vehicula mi. Aliquam erat volutpat. Pellentesque ullamcorper auctor ligula, in lobortis arcu convallis nec. Sed a auctor mauris. Proin ante magna, aliquam quis purus sed, porta placerat leo. Aenean vitae mauris lacus. Donec at sem nec mi feugiat porttitor. Phasellus aliquam, massa egestas porta mollis, magna turpis feugiat dui, eget iaculis libero mi a nisi. ethos Mauris eu ipsum turpis. Donec ex metus, sodales id elit ut, dictum ultricies eros. Sed egestas leo eu purus scelerisque consequat. Proin nulla enim, volutpat sed accumsan et id, egestas eget ex. et Duis quis felis lacus. Pellentesque sit amet magna dui. et Pellentesque quis nunc orci. Proin efficitur mi sit amet aliquet imperdiet. Phasellus vestibulum efficitur leo, fermentum semper turpis et venenatis ut. Mauris suscipit tellus ex, non malesuada ipsum posuere a. Phasellus ut accumsan tellus. Praesent sed nulla quis mauris et suscipit auctor. Suspendisse volutpat sapien diam, vitae egestas diam commodo ac. Fusce at lobortis ligula. Sed a quam ut ex efficitur viverra. Donec ullamcorper neque eget erat porttitor imperdiet. Duis rhoncus sed nibh sed maximus. Morbi vel elit mi. Sed quis ante mauris. Donec semper vitae lorem at interdum. Nunc finibus in lorem posuere dignissim. Morbi ultricies lorem hendrerit enim molestie tincidunt.";

console.log(text.split(" ").length);

// OR 
let count = 1;
for (let ch of text){
    if (ch === " "){
        count++;
    }
}
console.log(count);


// Count the number of times the Latin word 'et' 

text.toLowerCase()
let etCount = 0;
for (i=0; i<text.length; i++){
    if (text[i]+text[i+1]+text[i+2]+text[i+3] === " et "){
        etCount++;
    }
}
console.log(etCount)



// Bonus 2

var palindromeList = ["ciao", "A man, a plan, a canal, Panama!", "Amor, Roma", "race car", "stack cats", "step on no pets", "taco cat", "put it up", "Was it a car or a cat I saw?", "No 'x' in Nixon"]
var symbols = `!"#$%&'()*+,-./:;<=>?@[\]^_ `

function isPalindrome(phrase){
    let cleanPhrase = ""
    for (i=0; i<phrase.length; i++){
        if (symbols.includes(phrase[i])){continue;}
        else { cleanPhrase += phrase[i].toLowerCase();}
    }
    
    for (i=0; i<cleanPhrase.length; i++){
        if (cleanPhrase[i] === cleanPhrase[cleanPhrase.length-(i+1)]){continue;}
        return false;
    }
    return true;
}


palindromeList.forEach(sentence => {
    console.log(isPalindrome(sentence))
})





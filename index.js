// Iteration 1: Names and Input
//1.1
const hacker1 = "Fares"
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
const hacker2 = "Fares"
//1.4
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
//2.1
if(hacker1.length > hacker2.length){
    console.log(`Driver ${hacker1} has the longers name with ${hacker1.length} characters`);
}
else if(hacker1.length < hacker2.length){
    console.log(`Navigator ${hacker2} has the longer name with ${hacker2.length} characters`);
}
else{
    console.log(`Both names have ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let newNameHacker1 = "";
for ( let i = 0; i < hacker1.length; i++) {
    newNameHacker1 += hacker1[i].toUpperCase()
    if ( i !== hacker1.length -1 ) {
        newNameHacker1 += " "
    }
}
//3.1
console.log(newNameHacker1)


let reversedHacker2 = "";
for ( let i = hacker2.length -1 ; i >= 0; i--) {
    reversedHacker2 += hacker2[i]
}
//3.2
console.log(reversedHacker2)

//3.3
if ( hacker2.localeCompare(hacker1)===1) {
    console.log("The driver's name goes first")
}
else if ( hacker1.localeCompare(hacker2)===1) {
    console.log("Yo, the navigator goes first, definitely.")
}
else if (hacker2 === hacker1) {
    console.log("What?! You both have the same name?")
}



//Bonus 1:
const longText = 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum ante vel metus elementum, et gravida mi tristique. Morbi vestibulum mauris vitae felis interdum bibendum. Suspendisse semper, mauris eget auctor ullamcorper, leo nunc porta risus, id mattis metus lorem in urna. Ut tortor justo, laoreet non massa sed, viverra tempus libero. Quisque ultricies, lacus vitae efficitur posuere, eros ligula congue nisl, sit amet tempus ipsum lectus ac justo. Duis a efficitur dolor. Nulla facilisi. Sed urna orci, ultricies vitae euismod ut, maximus quis nisi.

Maecenas pharetra accumsan arcu, sed aliquet nibh porttitor at. Cras nec vehicula velit. Nam ac tincidunt lorem. Sed augue sapien, vehicula quis congue finibus, ornare vel neque. Phasellus tincidunt tincidunt vestibulum. Curabitur pharetra mi ultricies vulputate blandit. Sed porttitor arcu vitae sapien mollis finibus nec at leo. Cras nec magna sem. Duis tristique hendrerit diam, in mollis lorem eleifend sed. Phasellus et luctus metus. Vivamus convallis euismod vulputate. Morbi pulvinar, felis sed lobortis hendrerit, tellus libero tempus velit, nec malesuada purus eros in nunc. Morbi metus felis, mollis eget condimentum ac, ultrices a ligula. Proin vulputate vitae magna sit amet laoreet.

Suspendisse tincidunt et purus faucibus rutrum. Fusce in gravida magna. Nullam placerat ultricies ipsum, bibendum pulvinar leo dignissim vitae. Nullam eu consequat eros, vitae congue mauris. Aenean leo purus, dignissim ac finibus ut, pulvinar in turpis. Integer nisl massa, pulvinar viverra nisl eget, lobortis facilisis dui. Mauris scelerisque nibh nunc, sed hendrerit arcu dictum vel. Praesent facilisis mi ac eleifend sagittis. Phasellus faucibus et eros ornare sagittis. Nullam purus dui, efficitur in urna at, tempor fringilla libero. Phasellus facilisis nunc non orci ultrices efficitur. Aliquam rutrum euismod dui a dictum. Vestibulum nisi sapien, maximus vel purus ut, posuere consequat est.`
 
let wordCount = 0;
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
    if(longText[i]===" "){
        wordCount++
    }
    if(i===longText.length-1 && longText[i]!==" "){
        wordCount++;
    }
    if((longText[i].toLowerCase()==="e" && longText[i+1].toLowerCase()==="t")){
        if(longText[i-1]===" " && longText[i+2]===" "){
            etCount++;
        }
        if(i===0) {
            etCount++;
        }
        if(i+1===longText.length -1){
            etCount++;

        }
    }
}

console.log(wordCount)
console.log(etCount)


//Bonus 2:

let phraseToCheck = "A man, a plan, a canal, Panama!";
let filtered = "";
for(let i=0;i<phraseToCheck.length;i++){
    switch(phraseToCheck[i]){
        case "?": case "!": case " ": case ".": case ",": case "'":
            break;
        default: filtered+=phraseToCheck[i].toLowerCase();
    }
}

let endI = filtered.length-1;
let palindromeChecker = true;
for(let i=0;i<phraseToCheck.length/2;i++){
    if(filtered[i]!==filtered[endI]){
        palindromeChecker = false;
    }
    endI--
} 

console.log(palindromeChecker)
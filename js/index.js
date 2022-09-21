// Iteration 1: Names and Input
let hacker1 = "Oscar"
console.log("El nombre del conductor es " + hacker1);
let hacker2 = "Eloi"
console.log("El nombre del navigator es " + hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if(hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
// console.log(hacker1.toUpperCase().split('').join(' '));
let resp ='';
for(i=0; i<hacker1.length; i++){
    resp += hacker1[i].toUpperCase() + ' ';
}
console.log(resp)

let resp2='';
for(j=hacker2.length-1; j>=0; j--){
    resp2 += hacker2[j]
}
console.log(resp2)

let resp3 = hacker1.localeCompare(hacker2)
if(resp3 < 0){
    console.log("The driver's name goes first.")
} else if (resp3 > 0){
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What?! You both have the same name?")
}

let newLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt eleifend pulvinar. Donec ac nisl porttitor, commodo dolor eu, convallis nisl. Fusce massa nunc, sodales in libero eu, dignissim tempus orci. Quisque eget nisi finibus lorem tincidunt efficitur ac at urna. Praesent quis sapien tortor. Vivamus quis varius diam. Aenean ullamcorper interdum risus, et tincidunt risus posuere eu. 

Morbi condimentum auctor lorem et pretium. Morbi ornare mi felis, consequat finibus nisl maximus non. Integer a nunc a lorem pulvinar luctus. Vestibulum pharetra velit vitae nulla pulvinar laoreet. In hac habitasse platea dictumst. Phasellus congue id nibh cursus interdum. Curabitur vitae lacus nec nisi vehicula sodales at in erat. Nulla facilisi. 

Pellentesque vel efficitur velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec lectus dolor, ullamcorper nec posuere et, aliquet non orci. Nulla a auctor dui. Nulla tristique in dui nec pulvinar. Nulla facilisi. Aliquam finibus elementum enim. Mauris sit amet ante eu ligula finibus accumsan.`


let totalWords=1;
for(i in newLorem){
    if(newLorem[i] === " "){
        totalWords +=1       
    }
}
console.log(totalWords);

// let timesForEt=0;
// for(i in newLorem){
//     let holding = newLorem[i] + newLorem[i+1]
//     if( holding === 'et'){
//         timesForEt++
//     }
// }
// console.log(timesForEt)

let response = (newLorem.match(/et/g) || []).length;
console.log(response)

let phraseToCheck="A man, a plan, a canal, Panama!";
let phraseWithoutEspChar = phraseToCheck.split('').replace(/[^a-zA-Z0-9]/g, '');    
for(i in phraseWithoutEspChar){
    for(j in phraseWithoutEspChar){
        if(phraseWithoutEspChar[i] === phraseWithoutEspChar[phraseWithoutEspChar.length-j]){
            console.log('is a Palindrome')
        } else {
            console.log('is not a Palindrome')
        }
    }
}
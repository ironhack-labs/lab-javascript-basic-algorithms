// Iteration 1: Names and Input
const hacker1 = "Juan";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Pedro";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
hacker1NameLength = hacker1.length;
hacker2NameLength = hacker2.length;
if(hacker1NameLength>hacker2NameLength){
console.log(`The driver has the longest name, it has ${hacker1NameLength} characters.`)
}
else if(hacker1NameLength<hacker2NameLength)
    {console.log(`It seems that the navigator has the longest name, it has ${hacker2NameLength} characters.`)
}
else console.log(`Wow, you both have equally long names, ${hacker1NameLength} characters!.`)

// Iteration 3: Loops
let driver = ""
for (let i = 0; i < hacker1.length; i++) {
    driver = driver + hacker1[i]+" ";
}
console.log(driver.toUpperCase());
let navigator = ""
for (let i =hacker2.length -1; i >= 0 ; i--){
    navigator = navigator + hacker2[i];
}
console.log(navigator);
if(hacker1.localeCompare(hacker2)===1){
    console.log("The driver's name goes first.")
} else if(hacker1.localeCompare(hacker2)===-1){
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

//Bonus Time
//Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus purus, et ullamcorper quis egestas in, tincidunt tincidunt risus. In id est sapien. In orci erat, imperdiet non lobortis in, pulvinar eget velit. Aliquam et rutrum lectus. Morbi rhoncus molestie gravida. Duis aliquet, lectus quis tincidunt scelerisque, augue dui mattis metus, in maximus ex tortor sed metus. Vestibulum sit amet elementum erat. Aenean lobortis, enim id scelerisque sagittis, lacus dolor ultrices est, sit amet blandit turpis dolor aliquet lectus. Sed mollis sapien condimentum, tristique metus at, bibendum nibh. Donec quis est porta ante rhoncus vehicula ac in libero. Morbi quis scelerisque nisi, vel aliquet velit. Maecenas sit amet lorem a augue ultricies faucibus. Phasellus vitae luctus risus. Nam molestie nisl ut blandit hendrerit. Phasellus justo felis, ullamcorper quis ipsum ut, elementum ultrices neque.

Proin libero lectus, venenatis quis tellus in, pellentesque iaculis lectus. Cras metus nibh, suscipit quis ex non, mollis ullamcorper purus. In vel tempus ante. Pellentesque sed nibh volutpat, hendrerit nibh sit amet, mattis quam. Maecenas blandit mattis velit vel molestie. Morbi congue leo sit amet leo vulputate, sed fringilla ante luctus. Pellentesque accumsan risus eget varius ultricies. Curabitur non imperdiet magna, non tincidunt dui. Proin ullamcorper libero ac fermentum sodales.

Nullam sapien arcu, efficitur eget nisi vitae, iaculis commodo urna. Donec et purus sem, pharetra ac dapibus vel, porttitor id magna. Donec metus mi, faucibus vel sem eget, maximus commodo ipsum. Sed at enim id dui interdum volutpat non vel turpis. Integer dictum ante eget dignissim varius. Nulla facilisi. Proin ornare laoreet urna nec finibus. Ut ligula ex, condimentum nec ultricies ac, dapibus id sem. Maecenas vel pharetra tellus, at elementum lacus.`

let count = 0;
let et = 0;

for( let i = 0; i < longText.length; i++){
 if(longText[i]===" "){
    count = count +1;
 }
 if (longText[i]==="e" && longText[i+1]==="t" && longText[i+2] ===" "){
    et = et + 1;
 }    
}
console.log(count);
console.log(et);

// Bonus 2
const phraseToCheck = "Amor, Roma!!"

let phraseSimplify = ""
for(let i=0; i<phraseToCheck.length; i++){
if(phraseToCheck[i]!== "," && phraseToCheck[i]!==" " && phraseToCheck[i]!=="!" && phraseToCheck[i]!=="."){
    phraseSimplify = phraseSimplify + phraseToCheck[i];
}
}
let phraseSimplifyLowercase = phraseSimplify.toLowerCase()
//console.log (phraseSimplifyLowercase);
let phraseReversed = ""
for( let i=phraseToCheck.length-1; i >= 0; i--){
    if(phraseToCheck[i]!== "," && phraseToCheck[i]!==" " && phraseToCheck[i]!=="!" && phraseToCheck[i]!=="."){
        phraseReversed = phraseReversed + phraseToCheck[i];
    }   
}
let phraseReversedLowercase = phraseReversed.toLowerCase()
//console.log (phraseReversedLowercase);
if (phraseSimplifyLowercase===phraseReversedLowercase){
    console.log("Your phrase is a Palindrome")
} else {
    console.log("Your phrase is not a Palindrome")
}
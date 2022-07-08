console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1="Mario"
console.log(`The driver's name is ${hacker1}`)
let hacker2="Nacho"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
}
if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

var driverName =""
var navigatorName =""
const driverLength = hacker1.length
const navigatorLength = hacker2.length

for (let i=0; i<driverLength; i++){
    if(i ===driverLength -1 ){
        driverName += `${hacker1[i].toUpperCase()}`
    } else
    driverName += `${hacker1[i].toUpperCase()} `
}
console.log(driverName)

for (let i=navigatorLength -1 ; i>=0; i--){
    navigatorName += hacker2[i]
}
console.log(navigatorName)

if(hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.")
} else if(hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}


// BONUS 1

var text =`Etiam est mi, pulvinar id lectus et, bibendum ultricies odio. Duis vitae tincidunt sapien. Etiam accumsan pellentesque risus. Vestibulum dictum ultricies urna a gravida. Duis dignissim vehicula ipsum et porttitor. Mauris ex lectus, bibendum eu nunc vel, gravida placerat massa. Nulla ornare, lectus sed convallis dictum, nisi mi posuere enim, pharetra maximus arcu ex non mauris. In vel dictum nibh. Integer ullamcorper luctus magna ac eleifend. Aliquam quis nibh hendrerit, placerat turpis eget, molestie neque. Aenean massa ex, blandit at bibendum ut, consequat et purus. Ut commodo diam lacus, sed feugiat ipsum vehicula eget.

Proin mattis sapien a tortor pretium, ut maximus turpis tincidunt. Nulla sed sodales metus. Quisque condimentum pulvinar arcu sed sodales. Donec malesuada bibendum velit, in commodo sem volutpat sit amet. Duis eleifend, quam non tincidunt lobortis, tortor libero bibendum ante, ut vulputate nunc purus eu dui. Vestibulum diam nulla, scelerisque ac lobortis quis, consectetur nec risus. Vestibulum vel nulla sed ligula condimentum tristique. Integer auctor dictum lectus eu volutpat. Maecenas et justo et erat feugiat pharetra. Donec ut quam sodales, tincidunt purus id, fermentum neque.

Etiam augue ipsum, tempus feugiat ullamcorper id, posuere et velit. Sed lobortis tellus lorem. Donec non ipsum leo. Donec ut elit vitae mauris pretium tincidunt. Praesent placerat posuere tortor, pharetra pretium sem viverra id. Nam eget nunc tempus, sodales velit nec, iaculis urna. Nulla eu augue fermentum, bibendum justo in, efficitur mauris. In nec velit congue, euismod risus in, egestas risus. Duis venenatis urna est, non scelerisque ipsum pretium ac. Phasellus quis faucibus libero. Vestibulum in mi tristique, semper tortor at, blandit enim. Duis rutrum ligula in quam consectetur malesuada. Vivamus tempus sem eu congue tempus. Suspendisse in nibh consectetur eros mollis volutpat. Sed quis mollis elit, id ornare arcu. Sed sollicitudin ante nec consequat pretium.`
let numberOfWords=1;
textClean = text.replace(/[^a-zA-Z ]/g, "");
for (i=0; i<textClean.length; i++) {
    if (textClean[i]===" " && textClean[i-1]!==" "&& textClean[i+1]!==" "){
        numberOfWords++
    }
}
console.log(numberOfWords)

let etWords=0;
for (i=0; i<textClean.length; i++) {
    if (textClean[i]==="e" && textClean[i+1]==="t" && textClean[i+2]=== " " && textClean[i-1]===" "){
        etWords++
    }
}
console.log(etWords)

// BONUS 2

let phraseToCheck = "Was it a car or a cat I saw?"
let phraseClean = phraseToCheck.replace(/[^a-zA-Z_]/g, "").toLowerCase();
let palindrome = true;

for (i=0; i<phraseClean.length/2; i++){
    if (phraseClean[i]!==phraseClean[phraseClean.length - i -1]) {
        palindrome=false;
        break;
    }
}

if (palindrome){
    console.log("IS A PALINDROME!")
} else {
    console.log("IS NOT A PALINDROME!")
}

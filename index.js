// Iteration 1: Names and Input
const hacker1 = "John"
const hacker2 =  "Gabi"
console.log("The driver's name is " + hacker1)
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
    else if (hacker1.length<hacker2.length){
        console.log(` It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else{
        console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length } characters!`)

    }

// Iteration 3: Loops
let driverToUpper = hacker1[0].toUpperCase()
for (let i=1; i<hacker1.length;i++){
    driverToUpper += " " + hacker1[i].toUpperCase()
}
console.log(driverToUpper)

let navigatorReversed=""
for(let i=hacker2.length-1; i>=0;i--){
    navigatorReversed += hacker2[i]
}
console.log(navigatorReversed)
if(hacker1 < hacker2){
    console.log("The driver's name goes first.")
}
else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first, definitely.")
}
else {
    console.log("What?! You both have the same name?")
}

const longText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ligula vel suscipit sollicitudin. Vestibulum pretium tellus vel suscipit mattis. Suspendisse eu arcu porta, bibendum ex vel, laoreet lorem. Vestibulum efficitur felis sit amet mauris maximus, nec scelerisque turpis aliquam. Nullam risus orci, fringilla a justo ut, rhoncus sollicitudin ante. Donec sodales tristique lobortis. Praesent bibendum eget lorem vitae porttitor. Cras non lacus gravida, tristique magna eget, venenatis ante. Fusce vel elit nec nulla imperdiet maximus. Aliquam ornare auctor elit, sit amet lacinia lectus porttitor non. Mauris et dapibus nibh, at ultrices nisi. Vivamus sapien magna, blandit a faucibus sit amet, facilisis at magna. Nam maximus, urna ac interdum imperdiet, dui risus rutrum nibh, in venenatis lacus mi vitae erat. Aenean at nisl id risus euismod ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce nec vehicula leo. Nullam malesuada purus sed leo tempus interdum. Quisque commodo felis lectus, sit amet viverra mi rhoncus eget. Praesent iaculis nec nisl et hendrerit. Fusce lacinia sem at bibendum ultricies. Duis tempus in metus in vulputate. Donec ipsum ante, cursus porta sodales tristique, lobortis et diam. Integer pulvinar eu ligula ut commodo. Morbi bibendum ex tellus, in semper quam accumsan nec. Vestibulum convallis mauris augue, quis feugiat enim pharetra vel. In sed laoreet orci, eget auctor leo."

let wordCount = 0
for(let i = 0 ; i<longText.length ; i++ ) {
    if(longText[i]== " ") 
        wordCount ++
    else{
        continue
    }
}
console.log(wordCount)

let etcount = 0
for (let i=0; i<longText.length;i++){
    const char = longText[i] + longText[i+1]
    if(char === "et"){
        etcount ++
    }
}
console.log(etcount)

let phraseToCheck = "Was it a car or a cat I saw?"
let cleaned = ""
let wordReversed = ""
let palindrome
for (let i = 0; i < phraseToCheck.length; i++) {
    const char = phraseToCheck[i].toLowerCase();
    if (char >= 'a' && char <= 'z')
      cleaned += char;
    }
for(let i=cleaned.length-1;i>=0;i--){
wordReversed += cleaned[i]

if(wordReversed === cleaned){
    palindrome = true
}
else {
    palindrome = false
}
}
console.log(palindrome)


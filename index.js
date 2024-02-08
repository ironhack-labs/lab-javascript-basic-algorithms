// Iteration 1: Names and Input
let hacker1 = `Luis`
console.log("The driver's name is " + `${hacker1}.`)

let hacker2 = `Emily`
console.log("The navigator's name is " + `${hacker2}.`)

// Iteration 2: Conditionals
let dChar = hacker1.length
let nChar = hacker2.length

if (hacker1.length > hacker2.length) { 
    console.log(`The driver has the longest name, it has ${dChar} characters.`)
    }
 
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${nChar} characters.`)
    }

else (console.log(`Wow, you both have equally long names, ${dChar} characters!`))

// Iteration 3: Loops
const uHacker1 = hacker1.toUpperCase()

let driver = ""
for (let i = 0; i < hacker1.length; i++) {
    driver += uHacker1[i] + " ";
    console.log(driver)
}

const lastIndex = hacker1.length - 1;
let driverRev = "" 
for (let i = lastIndex; i >= 0; i--) {
  driverRev += hacker1[i];
  console.log(driverRev);
}

if (hacker1.localeCompare(hacker2) === -1) { 
    console.log(`The driver's name goes first.`)
    }
 
else if (hacker1.localeCompare(hacker2) === 1){
    console.log(`Yo, the navigator goes first, definitely.`)
    }

else {console.log(`What?! You both have the same name?`)}

// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec iaculis magna. Nunc ac aliquet turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis tempus dolor a massa pretium, quis vehicula ante condimentum. Praesent vestibulum, lacus quis malesuada posuere, erat quam suscipit nulla, nec dignissim libero ligula sed purus. Proin ultricies ante sit amet metus facilisis, eget efficitur diam feugiat. Etiam et imperdiet nulla. Pellentesque viverra erat quis tellus cursus, bibendum pellentesque nunc dictum. Vestibulum condimentum ipsum sit amet leo rutrum, et bibendum ex accumsan. Cras placerat lobortis ante sit amet molestie. Mauris efficitur augue diam, in ullamcorper tellus tempus at. Nunc quis maximus mi, sodales volutpat erat. Nulla facilisi. Sed felis arcu, semper ac sagittis vel, pretium in magna. Donec cursus nec arcu sit amet consectetur. Nunc ante est, aliquam eu suscipit in, rutrum non libero. Donec aliquet diam vitae sem commodo, nec pellentesque lacus mollis. Cras id nunc tincidunt, congue tellus ut, porttitor nulla. Aliquam erat volutpat. Proin sit amet convallis neque. Nullam vel libero interdum, fringilla risus in, consectetur tortor. Nunc id eleifend ante, quis condimentum augue. Mauris nec leo molestie odio efficitur laoreet eu in neque. Ut eleifend est at leo volutpat dictum. Maecenas porttitor dignissim lobortis. Nunc a malesuada erat, id hendrerit erat. Cras at nunc lacinia, efficitur ante vel, sollicitudin neque. Nullam luctus sapien a est sollicitudin, in ullamcorper orci lacinia. Nullam eget mauris eu nunc luctus lacinia. Aenean mauris ante, posuere sed facilisis a, convallis id nibh. Nulla sollicitudin viverra sollicitudin. In mollis rhoncus est at faucibus. Nullam in ante nec odio euismod rhoncus in vel nisi. Fusce ac scelerisque erat."
const words = longText.split(" ");

let count = " "
let ecount = " "

for (let i = 0; i < longText.length; i++){ 

    switch(words[i]) {
        case "et":
            ecount++;
        break;
        case " ":
            // rest of text, unwanted and unstored.
        default: 
            count++;
    }
}

console.log(ecount)
console.log(count)


let phraseToCheck = "Amor, Roma"
phraseToCheck = phraseToCheck.toUpperCase()

const lastIn = phraseToCheck.length - 1
palirev = ""

for(let i = lastIn; i >= 0; i--){
    palirev += phraseToCheck[i]}

if (palirev === phraseToCheck) {
        console.log(`This is a palindrome: ${palirev} is the same as ${phraseToCheck}`)}
else {console.log(`This is not a palindrome: ${palirev} is not the same as ${phraseToCheck}.`)
}

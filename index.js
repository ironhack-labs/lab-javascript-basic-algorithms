// Iteration 1: Names and Input

const hacker1 = "Guillem"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Xavier"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}
// Iteration 3: Loops

let hacker1Capital = ""
for (let i=0;i<hacker1.length;i++){
    if(i === hacker1.length-1){
       hacker1Capital+=hacker1[i].toUpperCase()
    } else{
       hacker1Capital+=`${hacker1[i].toUpperCase()} `
    }
}

console.log(hacker1Capital)

let hacker2Backwards = ""
for (let j=hacker2.length-1;j>=0;j--){
    hacker2Backwards+=hacker2[j]
}
console.log(hacker2Backwards)

if(hacker1<hacker2){
    console.log("The driver's name goes first.")
} else if(hacker1>hacker2){
    console.log("Yo, the navigator goes first, definitely.")
} else if (hacker1 === hacker2){
    console.log("What?! You both have the same name?")
}

// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus massa orci, non viverra lacus volutpat sit amet. Praesent nisl risus, iaculis sed lacus ut, ultricies maximus eros. Pellentesque tincidunt, leo imperdiet condimentum lacinia, odio diam faucibus ex, porta fringilla augue sapien quis odio. Aenean nibh arcu, congue eget ornare a, rutrum faucibus massa. Duis iaculis risus metus, id elementum nibh ultricies sit amet. Nam vitae dictum augue. Sed non elementum metus. Duis elementum eget justo id tempor. Nullam in ante dapibus, tempor dui et, aliquam justo. Donec in eros ac est vulputate pretium. In in eros massa. Praesent pulvinar maximus lacus id tristique. Aliquam volutpat tellus in purus ultricies lobortis nec a mi. Vestibulum sed sollicitudin est. Morbi sit amet ultricies felis. Morbi facilisis ullamcorper dictum. Etiam non justo at velit commodo varius. Nam rhoncus orci nisl, eget aliquet ex venenatis sed. In sed malesuada justo. Vivamus facilisis libero ut turpis maximus feugiat. Nunc eleifend lorem nec leo pellentesque pellentesque vitae at lacus. Vestibulum quis porta neque. Donec non quam id magna accumsan venenatis non nec odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vestibulum tortor ut mattis efficitur. Vestibulum ac ornare nunc, id scelerisque ipsum. In tristique mi eros, eu volutpat augue faucibus luctus. Maecenas rhoncus aliquam nunc ut rhoncus. Etiam blandit erat felis, nec auctor sapien sagittis sit amet. Nullam ornare convallis purus eget tincidunt. Ut a nisl at enim ultricies mollis. Etiam ex metus, bibendum at erat sed, feugiat tempus turpis."
const longTextWords = longText.split(" ")
const longTextWordsLength = longTextWords.length
console.log(longTextWordsLength)
let count = 0
for (let i=0;i<longTextWords.length;i++){
    if(longTextWords[i] === "et" ||
        longTextWords[i] === "et." ||
        longTextWords[i] === "et,"){
       count++ 
    }
}
console.log(count)


// Bonus 2

const phraseToCheck="No 'x' in Nixon"
let phraseToCheckClean=""
let phraseBackwards=""
let isPalindrome = false
for(let i=0;i<phraseToCheck.length;i++){
    if(phraseToCheck[i] === " " ||
       phraseToCheck[i] === "!" ||
       phraseToCheck[i] === "." ||
       phraseToCheck[i] === "," ||
       phraseToCheck[i] === "'" ||
       phraseToCheck[i] === "?"){ 
        continue } else {
        phraseToCheckClean+=phraseToCheck[i].toLowerCase()
       }
}
for(let j=phraseToCheckClean.length-1;j>=0;j--){
        phraseBackwards+=phraseToCheckClean[j].toLowerCase()
       } 
console.log(phraseBackwards)

if(phraseBackwards === phraseToCheckClean){
    isPalindrome=true
}
console.log(isPalindrome)

//iteration 1 : Name and Input

const hacker1 = "Cristian"
const hacker2 = "Gio"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

//ireration2 : Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//iteration3 : Loops
let newName = ""
for (let iterationIndex = 0, iterationEnd = hacker1.length; iterationIndex < iterationEnd; iterationIndex++) {
    newName += hacker1[iterationIndex] + " ";
}    
console.log(newName.toUpperCase())

newName = ""
for (let iterationIndex = hacker2.length - 1, iterationEnd = 0; iterationIndex >= iterationEnd; iterationIndex--) {
    newName += hacker2[iterationIndex]
}
console.log(newName)

let correct = true
let something = 0
while (correct) {
    if (hacker1[something] < hacker2[something]) {
        console.log(`The driver's name goes first.`)
        correct = false
    } else if (hacker1[something] > hacker2[something]){
        console.log(`Yo, the navigator goes first definitely.`)
        correct = false
    } else if (something === hacker1.length || something === hacker2.length) {
        console.log(`What?! You both have the same name?`)
        correct = false
    } 
    something++
}
    //bonus 1

    const x = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at congue tortor, sed interdum velit. Donec porttitor varius laoreet. Nulla facilisi. Etiam pulvinar tincidunt leo, id tincidunt elit venenatis non. Sed sapien ex, rhoncus eget tempus ac, dignissim vel turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper bibendum neque eu porta. Morbi viverra volutpat tellus, vel porta elit euismod sit amet. Praesent ornare ac nisl non sagittis. Praesent fermentum malesuada eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a tempor leo"
    const y = "muma bullaa hulaVestibulum rutrum erat nec eleifend vulputate. Phasellus vehicula ligula sit amet nulla pulvinar vehicula. In sit amet nunc et lacus tristique pharetra. Pellentesque vitae ultricies mi, vitae mollis mi. Proin vel ex consectetur, suscipit metus eu, sollicitudin quam. Fusce id enim et leo iaculis imperdiet. Cras sollicitudin urna viverra, tempor dui sit amet, consectetur turpis. Cras rutrum metus nec ipsum posuere, sed posuere eros suscipit. Duis ac libero porta, congue nulla ut, egestas lectus."
    const z = "Vestibulum tincidunt molestie ultricies. Praesent euismod ex malesuada neque pulvinar, at tincidunt quam imperdiet. Quisque eget eros finibus, sodales ante eu, placerat leo. In diam felis, dapibus in pretium ac, eleifend ut felis. Nulla facilisi. Praesent suscipit dignissim leo, eu maximus nisl pretium in. Fusce in ligula sapien. Vestibulum vel ullamcorper risus, sed viverra justo"
    function countLetters (paragraph) {
       // return paragraph.split(" ").length
       let counter = 0
       for (let i = 0; i < paragraph.length; i++){
        if (paragraph[i] === " "){
            counter += 1
        }
       }
       if (paragraph[paragrapth.length-1] !== " ")  {
           counter += 1
       }
       return counter
    }

  // practicando con flecha
  // let arrowCountLetters = (paragraph) => paragraph.split(" ").length;
  // console.log(arrowCountLetters(z))


// count et
  function countEt (paragraph) {
    let counter = 0
    let words = paragraph.split(" ")
    for (let i = 0; i < words.length; i++){
     if (words[i].toLowerCase().indexOf("et") !== -1){
         counter += 1
     }
    }
    return counter
 }
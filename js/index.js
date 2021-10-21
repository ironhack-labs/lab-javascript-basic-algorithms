// Iteration 1: Names and Input
// 

let hacker1 = "Fernando"
let hacker2 = "Nerea"

console.log (`The driver's name is ${hacker1}`)

console.log (`The driver's name is ${hacker2}`)




// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length < hacker2.length){
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.lenght){

}

// Iteration 3: Loops

//3.1
let inCapitals = ""

for (let i=0; i<hacker1.length; i++){
    inCapitals += hacker1[i].toUpperCase() + " "
}
console.log(inCapitals)

//3.2
let reverse = ""

for(let i = hacker2.length -1; i>=0; i--){
    reverse += hacker2[i]
}
console.log(reverse)

//3.3
//
let hacker1First=""
let hacker2First=""
let equals=""

if (hacker1.localeCompare(hacker2)===-1){
    hacker1First = "The driver's name goes first."
    console.log(hacker1First)
}else if(hacker1.localeCompare(hacker2)===1){
    hacker2First = "Yo, the navigator goes first definitely"
    console.log(hacker2First)
}else if (hacker1.localeCompare(hacker2)===0){
    equals = "What?! You both have the same name?"  
    console.log(equals)  
}



//BONUS!!

//Bonus 1

let phrase = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nullam in faucibus sem, commodo varius erat. Maecenas rutrum massa ac dictum faucibus. In porta lectus eget mi ornare, at condimentum metus tempus. In sagittis tellus id neque gravida, et pellentesque nisi semper. Ut maximus neque odio, eget sollicitudin nulla consectetur eget. In eget nibh aliquet, sollicitudin nisi quis, porta turpis. Nunc vitae turpis ullamcorper, maximus lorem ut, dapibus ante. Sed ut ornare magna, et lacinia tortor. Donec eros tortor, sollicitudin sed viverra ac, gravida ac urna. In hac habitasse platea dictumst. Curabitur velit nisi, ultrices ut turpis sed, efficitur consectetur libero. Quisque nulla est, pellentesque in diam bibendum, vestibulum commodo sapien. Nullam euismod congue velit non condimentum. Suspendisse sed tortor semper felis varius finibus nec a nisl. Sed tincidunt varius facilisis.In a metus non risus tristique euismod eget vitae purus. Nam facilisis commodo urna in commodo. Phasellus tempus hendrerit mattis. Morbi malesuada interdum commodo. Quisque maximus consequat lacus, et ultricies nisi laoreet quis. In hac habitasse platea dictumst. Sed viverra scelerisque rhoncus. Vestibulum vitae ullamcorper sapien. Nullam tincidunt lacus et facilisis imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin euismod sapien diam, id consequat risus porta a. Suspendisse risus odio, sagittis sed purus eget, bibendum maximus tortor.In luctus condimentum eros, vitae venenatis eros porttitor in. Suspendisse a tempus mi. Cras ultrices odio ex, quis sollicitudin turpis venenatis sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed dignissim libero sed libero porttitor, quis ullamcorper mi eleifend. Aenean molestie erat at sapien rutrum, id faucibus massa elementum. Nunc volutpat massa convallis nisi imperdiet, iaculis fermentum nibh volutpat. Duis et est interdum, mattis lacus sit amet, vehicula eros. Vestibulum vulputate venenatis ornare."

let words = phrase.split(" ")

console.log(words)
console.log(`It has ${words.length} words`)

let wordEtTimes = phrase.split(" et")
console.log(`The word "et" has appeared ${wordEtTimes.length} times`)

//Bonus 2


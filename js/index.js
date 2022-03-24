// Iteration 1: Names and Input
//

let hacker1 = "Hugo"
console.log(`The driver's name is ${hacker1} `)
let hacker2 = "Clara"
console.log(`The navigator's name is ${hacker2} `)


// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops


let upperName = hacker1.toUpperCase()

let definitivo = ""

for (i = 0 ; i < upperName.length; i++){
  definitivo += upperName[i]+ " "
}

console.log(definitivo)

// console.log(hacker1.toUpperCase().split("").join(" "))

let reverseName = ""

for ( let i = hacker2.length-1 ; i >= 0 ; i--){
  reverseName += hacker2[i]
}
console.log(reverseName)

// console.log(hacker2.split("").reverse().join(""))

if ( hacker1 < hacker2 ){
  console.log("The driver's name goes first.")
} else if (hacker2 < hacker1){
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}


// BONUS 1

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus viverra lorem sit amet scelerisque. Nullam eu felis vel est finibus tempus. Aenean condimentum sapien nec sollicitudin laoreet. Fusce tincidunt pharetra dignissim. Fusce sed varius tortor. Morbi commodo ipsum a semper eleifend. Aliquam ut semper nisi. Quisque scelerisque libero consectetur, fringilla mauris ut, mattis leo. Integer nec diam scelerisque, ornare odio id, tincidunt sapien. Quisque in metus ullamcorper, faucibus purus elementum, elementum purus. Praesent quis consequat sapien. Integer lobortis pellentesque imperdiet. Maecenas sed est interdum, sodales sapien in, egestas velit. Aliquam consequat mauris ornare augue rhoncus porta. Nam sagittis orci molestie lectus luctus imperdiet. Fusce interdum blandit diam, sit amet sagittis orci convallis ut. Vivamus eu euismod ipsum. Praesent a vulputate sem. Nulla pellentesque arcu vitae suscipit finibus. Aenean lectus justo, venenatis eget nunc sed, malesuada tempus arcu. Maecenas id augue lacus. Nam egestas pulvinar consectetur. Etiam a lectus imperdiet, hendrerit mi quis, rutrum lectus. Aenean sit amet neque sit amet nisi elementum imperdiet. Etiam feugiat bibendum mauris, quis mattis purus sodales eget. Vestibulum turpis orci, malesuada et enim non, lacinia gravida neque. Quisque cursus, quam dignissim efficitur eleifend, odio turpis hendrerit mauris, et tristique eros nulla lacinia mi. Etiam nulla felis, ornare dignissim interdum venenatis, vulputate non mi. Curabitur commodo ac augue at hendrerit. Sed at venenatis ipsum. Quisque eget sem elit. Aenean sollicitudin leo sit amet ipsum eleifend faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum porttitor tristique vehicula. Sed mollis scelerisque pretium. Cras ultrices, sapien eu aliquam porttitor, erat arcu commodo urna, dictum fermentum enim risus quis sapien. Morbi maximus, risus ut efficitur dignissim, arcu orci mollis ipsum, at laoreet mauris nunc ac dui. In neque lacus, mollis non vehicula sed, tristique non erat. Nulla euismod, turpis non aliquam aliquam, orci dui lacinia lacus, nec auctor magna ipsum in lorem. Etiam posuere nibh at lectus imperdiet viverra. Integer nec orci quis mauris euismod volutpat nec quis risus. Mauris ullamcorper metus vel nulla sagittis, quis congue enim euismod."


let k = 0

for (i = 0 ; i < lorem.length; i++){
  if (lorem[i] === " "){
    k++
  }
}

console.log(k+1)



// let words = lorem.split(" ")

// let wordsCount = words.length

// console.log(wordsCount)

let j = 0

for (let i = 0; i < words.length; i++){

  if (words[i] === "et") {
    j++
  }

}
console.log(j)


//BONUS 2

let palindrome = "Amor, Roma"
let correctPalindrome = ""

for ( i = 0; i < palindrome.length; i++){

  if ( palindrome[i] === " " || palindrome[i] === ","){
    continue
  } 

  correctPalindrome += palindrome[i]
  
}

if (correctPalindrome.length % 2 === 0){
  
}



console.log(correctPalindrome)















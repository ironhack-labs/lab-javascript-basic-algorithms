// Iteration 1: Names and Input

let hacker1 = 'André'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Marina'
console.log(`The navigator's  name is ${hacker2}`)

// Iteration 2: Conditionals



if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}



// Iteration 3: Loops


for(let i = 0; i<hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase())
}

let reversed ='';
for (let i = hacker2.length-1; i>=0; i--) {
    reversed +=hacker2[i]
}
console.log(reversed);





if(hacker2.localeCompare(hacker1)===1) {
    console.log("The driver's name goes first.")
    
} else if (hacker2.localeCompare(hacker1)===-1) {
    console.log("Yo, the navigator goes first, definitely")

} else if  (hacker1.localeCompare(hacker2)===0) {
    console.log("What?! You both have the same name?")
}



//Bonus 1


let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id purus diam. Pellentesque tincidunt, erat sodales consequat aliquet, mi augue pellentesque augue, eget dapibus ipsum nunc vel sapien. Phasellus tempus nibh eget eros eleifend bibendum. In scelerisque justo gravida mi consectetur, quis aliquet nulla vehicula. Morbi condimentum, eros ut volutpat aliquet, lorem mauris mollis enim, feugiat posuere lorem ipsum vel magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sit amet mauris eu enim efficitur scelerisque hendrerit ut neque. Vestibulum vestibulum neque nec mi placerat, in rutrum lectus mattis. Integer augue libero, sodales non posuere eget, molestie vitae odio.

Etiam mollis arcu mi, ac rhoncus risus imperdiet at. Curabitur porttitor viverra leo, egestas vehicula dui laoreet in. Nam non lectus rhoncus, facilisis dolor ut, malesuada dolor. Curabitur pharetra facilisis massa. Vivamus ut nunc imperdiet, consequat tortor pharetra, feugiat dolor. Nunc porta, nisi et congue mollis, justo arcu faucibus tellus, vitae luctus justo leo placerat metus. Ut quam tortor, fermentum id justo quis, blandit pretium diam. In malesuada sapien elementum augue fringilla, sit amet egestas turpis mollis. Curabitur ultricies, dui elementum condimentum luctus, massa velit venenatis erat, ac venenatis dolor diam et dolor. Nulla facilisi. Cras quis placerat libero. In ac nulla neque. Etiam felis velit, vestibulum vitae ipsum eu, ultrices mattis purus. Nulla bibendum vitae neque vel vehicula. Maecenas dictum lacus eget nulla iaculis vestibulum.

Donec pretium ornare pulvinar. Maecenas eu interdum velit. Mauris et orci est. Suspendisse eleifend hendrerit sollicitudin. Nunc eget lacus quis nisi dignissim cursus sit amet rhoncus odio. Donec ac magna nulla. Donec aliquam pharetra nisl eget vestibulum. Nunc venenatis felis et porttitor rhoncus.`



let countSpaces = 0;
let NmbWords

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    countSpaces += 1;
  }
}
NmbWords = countSpaces+1
console.log(NmbWords)




let countEt = 0;

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " " && longText[i + 1] === "e" && longText[i + 2]==="t" && longText[i + 3]===","||longText[i + 3]==="."||longText[i + 3]===" ") {
    countEt += 1;
  }
}

console.log(countEt);


//BONUS 2 


const first = 'step on no pets';
let second = ''

for (let i = first.length -1; i >= 0; i--) {
  second += first[i];
  if (first.length ===second.length){
    if (first===second){
      console.log("Palindrome")
  } else {
    console.log("Its not")
  }
  }
}
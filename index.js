// Iteration 1: Names and Input

const hacker1 = "Albert"
const hacker2 = "Sanchez"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
/*  The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
 */


if (hacker1.length > hacker2.length) {
console.log(` The driver has the longest name, it has ${hacker1.length} characters.`)
  
} else if (hacker2.length > hacker1.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

}else if( hacker1.length == hacker2.length){

 console.log( `Wow, you both have equally long names, ${hacker1.length} characters!.`)
}





// Iteration 3: Loops
/* 3.1 Print out the driver's name (hacker1) */

for (let i= 0 ;i< hacker1.length ; i++){

  console.log(hacker1[i].toUpperCase())
}



/*  3.2 Print all the characters of the navigator's name in reverse order, i.e., `"nhoJ"`. */

let n = hacker2.length -1
while ( n >= 0){
console.log(hacker2[n])
n--

}

/* 3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name? */




if(hacker1.localeCompare(hacker2)==0){

  console.log("What?! You both have the same name?")

}else if (hacker1.localeCompare(hacker2) == -1){

  console.log("The driver's name goes first.")
}else if (hacker2.localeCompare(hacker1)== 1){

  console.log("Yo, the navigator goes first, definitely.")
}


/* Bonus 1  */

const longText= `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna ipsum, quis imperdiet metus bibendum hendrerit. Mauris a scelerisque felis. Suspendisse ullamcorper, elit non venenatis fermentum, neque ligula posuere dui, at venenatis metus mauris eu ante. Nullam a suscipit velit. Cras commodo ligula vitae risus hendrerit, et interdum elit maximus. Nunc nec vehicula risus, at faucibus lorem. Proin semper eget dolor sit amet aliquam.

Phasellus ligula nibh, pretium ut semper at, placerat in sapien. Donec dignissim justo at purus cursus feugiat. Quisque lacus tortor, facilisis non commodo in, pharetra tincidunt dolor. Sed molestie arcu dignissim risus blandit, sit amet congue sem euismod. Curabitur facilisis orci non nisl mattis rutrum. In porttitor lorem erat, elementum semper lacus laoreet id. Phasellus egestas, turpis vel auctor pharetra, ligula ipsum pretium nisl, a pellentesque lacus nisl in sapien. Vestibulum hendrerit faucibus odio eget faucibus. Fusce tempor imperdiet risus, eu euismod purus auctor et. Aenean quis commodo leo, at finibus lectus. Cras eget augue felis. Nullam finibus eget ligula ut consequat.

Aenean suscipit mauris sit amet semper aliquam. Maecenas at dolor sed quam aliquam consequat non id dolor. Maecenas bibendum id massa eget auctor. Quisque volutpat ut ex quis porta. Donec feugiat auctor quam, in viverra dolor pretium at. Proin sit amet condimentum augue. In imperdiet nisl augue, in venenatis libero mattis id. In eleifend mi felis, eu varius augue pulvinar a. Pellentesque id mi ipsum. Duis aliquam, quam nec vehicula aliquam, mi felis tempus justo, et placerat ipsum risus ut magna. Donec posuere tellus et lectus ultrices, non dictum lorem venenatis. Cras rhoncus felis purus, quis sollicitudin mi imperdiet et.`

const textArray = longText.split(" " || "\n")


const numberOfWords = textArray.length

let trimWords = 

console.log("There are " + numberOfWords + "words in this paragraph")



let numberOfEtWords = 0;

for (i=0; i<numberOfWords; i++){

  let word = textArray[i].trim();
if (word==="et" || word==="et." ){
numberOfEtWords += 1
}

}

console.log(`There are ${numberOfEtWords}  "et" words in the paragraph` )







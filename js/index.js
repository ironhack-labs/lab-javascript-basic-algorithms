// Iteration 1: Names and Input
let hacker1 = "Mario"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "David"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log(`The navigator has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker1.length < hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)

} else {

    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)

}


// Iteration 3: Loops


function upperSeparate() {
    result = hacker1.split('').join(' ').toUpperCase(' ');
    console.log(result)
}
upperSeparate()

function reverse() {
    let array2 = hacker2.split("")
    result2 = array2.reverse().join("")
    console.log(result2)
}

reverse()

function lexOrder(a, b) {

    if (a < b) {
        console.log("The driver's name goes first.")
    } else if (a > b) {
        console.log("Yo, the navigator goes first definitely.")
    } else {
        console.log("What?! You both have the same name?")
    }
}

lexOrder(hacker1, hacker2)

//Bonus

let loremParag = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum urna nisl, vitae fringilla tellus mollis a. Nullam at leo dignissim, bibendum nisi at, lacinia urna. Vivamus dignissim tortor in felis rhoncus mollis. Morbi dapibus nisl a viverra fermentum. Etiam sed nisi vel quam auctor tempus. Morbi placerat justo eget magna scelerisque, id malesuada tellus tempor. Nunc tincidunt, mauris vitae porta tempor, ipsum est sagittis nunc, eget imperdiet urna urna a nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam convallis diam sed risus euismod, a vehicula purus blandit. Fusce finibus ut nisl in finibus.

Praesent commodo condimentum lectus, in tincidunt massa blandit sed. Fusce eget dapibus sapien. Nam cursus nunc ut hendrerit imperdiet. Donec bibendum dolor ut nulla fringilla commodo. Proin orci est, luctus nec semper eu, tincidunt a ligula. Nam non erat sagittis, molestie nunc non, iaculis ex. Integer pretium mattis aliquet. In nisi nunc, ornare at semper sit amet, tempus sit amet ligula. Donec pellentesque feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit arcu a ligula feugiat viverra.

Nunc feugiat consequat justo. Nullam at blandit lorem, non vulputate nunc. Etiam quis justo dolor. In nec ante vel elit auctor imperdiet. Fusce vel bibendum velit. Sed finibus aliquam lorem, eu pellentesque leo euismod sit amet. Praesent pulvinar velit enim.`

let wordArray = loremParag.split(" ");

console.log(wordArray.length)

function countEt() {
    let count = 0;
    wordArray.forEach(value => (value == "et")  count++)
    return count;
}
console.log(countEt)

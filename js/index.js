// Iteration 1: Names and Input
const hacker1 = 'Juan'
  
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Pedro'

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '))

let reverse = "";

for (let i = hacker2.length; i >= 0; i--) {

    reverse += hacker2.charAt(i)
}
console.log(reverse)


if (hacker1.localeCompare(hacker2) === -1) {

    console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log('Yo, the navigator goes first definitely')
} else {
    console.log('What?! You both have the same name?')
}

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel quam ac tellus tempor efficitur. Aliquam vel consectetur purus. Sed et felis vel nisi blandit feugiat a quis lorem. Cras accumsan purus urna, tempor malesuada sem lobortis vitae. Fusce hendrerit mauris lacus, et laoreet sem aliquam vitae. Donec ac dui velit. Morbi congue lobortis lectus ut aliquam. Maecenas a magna id nisl dictum elementum. Ut convallis facilisis imperdiet. Sed egestas porta pulvinar. Curabitur et posuere leo. Phasellus ut nisi massa. Cras et sapien eget sem semper tristique quis eget enim. Fusce consectetur, nibh non luctus convallis, tellus sem feugiat nisi, non efficitur eros neque eu diam. In vitae fringilla orci. Cras eu massa sed quam lacinia hendrerit nec quis metus. In hac habitasse platea dictumst. Vivamus vel sem sed leo vulputate imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis rutrum fermentum nisl. Fusce porttitor sem sem, non pharetra ligula porttitor non. Fusce enim tortor, sollicitudin ac interdum sit amet, vestibulum et tortor. Cras a elementum urna, sed lacinia diam. In aliquet sapien eu ex auctor placerat. Morbi quis rhoncus mauris. Pellentesque non sapien non mauris sollicitudin sodales non sed elit. Quisque non ex tristique, suscipit purus sit amet, sagittis dolor. Aenean eu maximus leo, non iaculis nibh. Sed ac orci eget mi tincidunt suscipit ut ut massa. Nunc pellentesque dignissim sapien. Ut pulvinar convallis sapien, eget faucibus justo pellentesque eget. Donec condimentum orci at magna ultrices auctor. Morbi tristique lacus lectus, sit amet luctus massa sollicitudin ac. Fusce auctor odio vel congue laoreet. Nunc libero libero, auctor quis nibh eget, interdum porttitor tortor. Aliquam ac auctor elit. Fusce mi dui, mattis vel est quis, venenatis aliquam ligula."

console.log(lorem.split(' ').length)
console.log(lorem.split('et').length)
console.log(lorem.split(' '))

const phraseToCheck = 'reconocer'

if (phraseToCheck === phraseToCheck.split("").reverse().join("")) {
    console.log('this variable is a Palindrome')
} else {
    console.log('this variable is NOT a Palindrome')
}
